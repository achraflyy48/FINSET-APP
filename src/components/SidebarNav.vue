<script setup>
import { RouterLink } from 'vue-router'
// Mengimpor ikon spesifik yang kita butuhkan dari Lucide
import {
  LayoutDashboard,
  ArrowRightLeft,
  Wallet,
  Target,
  PieChart,
  BarChart2,
  Settings,
  HelpCircle,
  LogOut,
  Sun,
  Moon,
  X,
} from 'lucide-vue-next'

//MENERIMA ISOPEN DARI APP.VUE
defineProps({
  isOpen: Boolean,
})

//MENUTUP SIDEBAR JIKA TOMBOL X DI KLIK
const emit = defineEmits(['close-sidebar'])

// Menyimpan daftar menu dalam bentuk Array Object (Prinsip DRY)
const mainMenus = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Transactions', path: '/transactions', icon: ArrowRightLeft },
  { name: 'Wallet', path: '/wallet', icon: Wallet },
  { name: 'Goals', path: '/goals', icon: Target },
  { name: 'Budget', path: '/budget', icon: PieChart },
  { name: 'Analytics', path: '/', icon: BarChart2 }, // Path '/' mengarah ke halaman aktif kita saat ini
  { name: 'Settings', path: '/settings', icon: Settings },
]
</script>

<template>
  <div
    v-if="isOpen"
    @click="emit('close-sidebar')"
    class="fixed inset-0 bg-[#1A1D1F]/50 backdrop-blur-sm z-40 md:hidden transition-opacity"
  ></div>
  <aside
    :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    class="fixed md:relative inset-y-0 left-0 z-50 w-64 h-full bg-white md:border-r border-slate-100 flex flex-col justify-between py-8 px-6 shrink-0 transition-transform duration-300 ease-in-out md:translate-x-0"
  >
    <div>
      <div class="flex items-center justify-between mb-10 px-2">
        <div class="flex items-center gap-3">
          <div
            class="w-8 h-8 rounded-full bg-[#1A1D1F] flex items-center justify-center text-white"
          >
            <span class="font-bold text-lg leading-none mt-[-2px]">F</span>
          </div>
          <span class="font-bold text-xl tracking-tight text-[#1A1D1F]">FinSet</span>
        </div>

        <button
          @click="emit('close-sidebar')"
          class="md:hidden p-1 text-slate-400 hover:text-[#1A1D1F] transition-all"
        >
          <X class="w-5 h-5" />
        </button>
      </div>

      <nav class="flex flex-col gap-1">
        <RouterLink
          v-for="menu in mainMenus"
          :key="menu.name"
          :to="menu.path"
          @click="emit('close-sidebar')"
          class="flex items-center gap-4 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200"
          active-class="bg-[#6F4EFA] text-white shadow-lg shadow-[#6F4EFA]/25"
          exact-active-class="bg-[#6F4EFA] text-white shadow-lg shadow-[#6F4EFA]/25"
          :class="[
            $route.path === menu.path
              ? ''
              : 'text-slate-500 hover:text-[#1A1D1F] hover:bg-slate-50',
          ]"
        >
          <component :is="menu.icon" class="w-5 h-5 stroke-[2px]" />
          {{ menu.name }}
        </RouterLink>
      </nav>
    </div>

    <div class="flex flex-col gap-1">
      <button
        class="flex items-center gap-4 px-4 py-3 rounded-2xl text-sm font-medium text-slate-500 hover:text-[#1A1D1F] hover:bg-slate-50 transition-all text-left"
      >
        <HelpCircle class="w-5 h-5 stroke-[2px]" />
        Help
      </button>

      <button
        class="flex items-center gap-4 px-4 py-3 rounded-2xl text-sm font-medium text-slate-500 hover:text-red-500 hover:bg-red-50 transition-all text-left mb-6"
      >
        <LogOut class="w-5 h-5 stroke-[2px]" />
        Log out
      </button>

      <div
        class="bg-slate-50 p-1.5 rounded-full flex items-center justify-between border border-slate-100"
      >
        <button
          class="flex-1 flex justify-center py-2 rounded-full bg-[#6F4EFA] text-white shadow-sm transition-all"
        >
          <Sun class="w-4 h-4 stroke-[2.5px]" />
        </button>
        <button
          class="flex-1 flex justify-center py-2 rounded-full text-slate-400 hover:text-slate-600 transition-all"
        >
          <Moon class="w-4 h-4 stroke-[2.5px]" />
        </button>
      </div>
    </div>
  </aside>
</template>
