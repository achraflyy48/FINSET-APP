<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import SidebarNav from './components/SidebarNav.vue'
import HeaderBar from './components/HeaderBar.vue'

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div class="flex h-screen w-screen overflow-hidden bg-white text-[#1A1D1F]">
    <SidebarNav :is-open="isSidebarOpen" @close="isSidebarOpen = false" />

    <div class="flex-1 h-full flex flex-col overflow-hidden bg-white">
      <HeaderBar @toggle-sidebar="toggleSidebar" />

      <main class="flex-1 overflow-y-auto px-4 md:px-8 pb-8">
        <RouterView />
      </main>
    </div>
  </div>
</template>
