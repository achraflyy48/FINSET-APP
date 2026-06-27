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
} from 'lucide-vue-next'

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
  <aside
    class="w-64 h-full bg-white border-r border-slate-100 flex flex-col justify-between py-8 px-6 shrink-0 z-10"
  >
    <div>
      <div class="flex items-center gap-3 mb-10 px-2">
        <div class="w-8 h-8 rounded-full bg-[#1A1D1F] flex items-center justify-center text-white">
          <span class="font-bold text-lg leading-none mt-[-2px]">F</span>
        </div>
        <span class="font-bold text-xl tracking-tight text-[#1A1D1F]">FinSet</span>
      </div>

      <nav class="flex flex-col gap-1">
        <RouterLink
          v-for="menu in mainMenus"
          :key="menu.name"
          :to="menu.path"
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
