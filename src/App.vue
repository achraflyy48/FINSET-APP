<script setup>
import { RouterView } from 'vue-router'
import SidebarNav from './components/SidebarNav.vue'
import HeaderBar from './components/HeaderBar.vue' // 1. Import komponen baru
</script>

<template>
  <div class="flex h-screen w-screen overflow-hidden bg-white text-[#1A1D1F]">
    <SidebarNav />

    <div class="flex-1 h-full flex flex-col overflow-hidden bg-white">
      <HeaderBar />

      <main class="flex-1 overflow-y-auto px-8 pb-8">
        <RouterView />
      </main>
    </div>
  </div>
</template>
