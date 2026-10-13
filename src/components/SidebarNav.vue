<script setup>
import { RouterLink, useRoute } from 'vue-router'
import {
  LayoutDashboard,
  Receipt,
  Wallet,
  Target,
  PieChart,
  Settings,
  HelpCircle,
  LogOut,
  X,
} from 'lucide-vue-next'

const route = useRoute()

// Menerima props untuk mengontrol status buka/tutup di HP
defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close'])
</script>

<template>
  <!-- Overlay gelap saat sidebar terbuka di HP -->
  <div v-if="isOpen" @click="emit('close')" class="fixed inset-0 bg-black/50 z-40 md:hidden"></div>

  <!-- Sidebar Container -->
  <aside
    :class="[
      'fixed md:static inset-y-0 left-0 z-50 w-64 flex flex-col h-screen p-6 bg-white border-r border-slate-100 transition-transform duration-300 ease-in-out',
      isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
    ]"
  >
    <!-- Logo / Brand -->
    <div class="flex items-center justify-between mb-10">
      <div class="flex items-center gap-3">
        <div
          class="w-10 h-10 rounded-xl bg-[#1A1D1F] flex items-center justify-center text-white font-bold text-xl"
        >
          F
        </div>
        <span class="text-xl font-bold text-[#1A1D1F]">FinSet</span>
      </div>
      <!-- Tombol Close khusus HP -->
      <button
        @click="emit('close')"
        class="md:hidden p-2 rounded-xl text-slate-400 hover:text-[#1A1D1F] hover:bg-slate-100 transition-colors"
      >
        <X class="w-6 h-6" />
      </button>
    </div>

    <!-- Navigation Links -->
    <nav class="flex-1 space-y-2 overflow-y-auto">
      <RouterLink
        to="/"
        @click="emit('close')"
        class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-slate-500 hover:text-[#1A1D1F] hover:bg-slate-50 transition-all"
        :class="{
          'bg-[#6F4EFA] text-white hover:bg-[#6F4EFA] hover:text-white': route.path === '/',
        }"
      >
        <LayoutDashboard class="w-5 h-5" />
        <span>Dashboard</span>
      </RouterLink>

      <RouterLink
        to="/transactions"
        @click="emit('close')"
        class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-slate-500 hover:text-[#1A1D1F] hover:bg-slate-50 transition-all"
        :class="{
          'bg-[#6F4EFA] text-white hover:bg-[#6F4EFA] hover:text-white':
            route.path === '/transactions',
        }"
      >
        <Receipt class="w-5 h-5" />
        <span>Transactions</span>
      </RouterLink>

      <RouterLink
        to="/wallets"
        @click="emit('close')"
        class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-slate-500 hover:text-[#1A1D1F] hover:bg-slate-50 transition-all"
        :class="{
          'bg-[#6F4EFA] text-white hover:bg-[#6F4EFA] hover:text-white': route.path === '/wallets',
        }"
      >
        <Wallet class="w-5 h-5" />
        <span>Wallets</span>
      </RouterLink>

      <RouterLink
        to="/goals"
        @click="emit('close')"
        class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-slate-500 hover:text-[#1A1D1F] hover:bg-slate-50 transition-all"
        :class="{
          'bg-[#6F4EFA] text-white hover:bg-[#6F4EFA] hover:text-white': route.path === '/goals',
        }"
      >
        <Target class="w-5 h-5" />
        <span>Goals</span>
      </RouterLink>

      <RouterLink
        to="/budget"
        @click="emit('close')"
        class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-slate-500 hover:text-[#1A1D1F] hover:bg-slate-50 transition-all"
        :class="{
          'bg-[#6F4EFA] text-white hover:bg-[#6F4EFA] hover:text-white': route.path === '/budget',
        }"
      >
        <PieChart class="w-5 h-5" />
        <span>Budget</span>
      </RouterLink>

      <RouterLink
        to="/analytics"
        @click="emit('close')"
        class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-slate-500 hover:text-[#1A1D1F] hover:bg-slate-50 transition-all"
        :class="{
          'bg-[#6F4EFA] text-white hover:bg-[#6F4EFA] hover:text-white':
            route.path === '/analytics',
        }"
      >
        <PieChart class="w-5 h-5" />
        <span>Analytics</span>
      </RouterLink>

      <RouterLink
        to="/settings"
        @click="emit('close')"
        class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-slate-500 hover:text-[#1A1D1F] hover:bg-slate-50 transition-all"
        :class="{
          'bg-[#6F4EFA] text-white hover:bg-[#6F4EFA] hover:text-white': route.path === '/settings',
        }"
      >
        <Settings class="w-5 h-5" />
        <span>Settings</span>
      </RouterLink>

      <RouterLink
        to="/help"
        @click="emit('close')"
        class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-slate-500 hover:text-[#1A1D1F] hover:bg-slate-50 transition-all"
        :class="{
          'bg-[#6F4EFA] text-white hover:bg-[#6F4EFA] hover:text-white': route.path === '/help',
        }"
      >
        <HelpCircle class="w-5 h-5" />
        <span>Help</span>
      </RouterLink>
    </nav>

    <!-- Footer / Logout -->
    <div class="mt-auto pt-4 border-t border-slate-100">
      <button
        @click="emit('close')"
        class="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-slate-500 hover:text-red-600 hover:bg-red-50 transition-all"
      >
        <LogOut class="w-5 h-5" />
        <span>Log out</span>
      </button>
    </div>
  </aside>
</template>
