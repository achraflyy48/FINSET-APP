<script setup>
import { RouterView } from 'vue-router'
import SidebarNav from './components/SidebarNav.vue'
</script>

<template>
  <div class="flex h-screen w-screen overflow-hidden bg-[#F8F9FA] text-[#1A1D1F]">
    <SidebarNav />
    <div class="flex-1 h-full flex flex-col overflow-hidden">
      <header
        class="h-20 bg-white border-slate-100 flex items-center justify-between px-8 shrink-0"
      >
        <div class="text-sm text-slate-400">[Header: Breadcrumb / Title]</div>
        <div class="text-sm text-slate-400">[Header: User Profile]</div>
      </header>

      <main class="flex-1 overflow-y-auto p-8">
        <RouterView />
      </main>
    </div>
  </div>
</template>
