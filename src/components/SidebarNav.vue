<script setup>
import { ref } from 'vue'
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
} from 'lucide-vue-next'

const route = useRoute()
</script>

<template>
  <aside class="sidebar-container flex flex-col h-screen p-6 bg-white border-r border-slate-100">
    <!-- Logo / Brand -->
    <div class="flex items-center gap-3 mb-10">
      <div
        class="w-10 h-10 rounded-xl bg-[#1A1D1F] flex items-center justify-center text-white font-bold text-xl"
      >
        F
      </div>
      <span class="text-xl font-bold text-[#1A1D1F]">FinSet</span>
    </div>

    <!-- Navigation Links -->
    <nav class="flex-1 space-y-2">
      <RouterLink
        to="/"
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
        class="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-slate-500 hover:text-red-600 hover:bg-red-50 transition-all"
      >
        <LogOut class="w-5 h-5" />
        <span>Log out</span>
      </button>
    </div>
  </aside>
</template>

<style scoped>
/* Tambahkan custom scoped CSS di sini jika diperlukan */
</style>
