<script setup>
import { ref, computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import SidebarNav from './components/SidebarNav.vue'
import HeaderBar from './components/HeaderBar.vue'

const route = useRoute()
const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

// Mengecek apakah rute saat ini adalah halaman auth (login / register)
const isAuthPage = computed(() => {
  return route.path === '/login' || route.path === '/register'
})
</script>

<template>
  <!-- Jika sedang di halaman Login atau Register, tampilkan full-screen tanpa sidebar/header -->
  <div v-if="isAuthPage" class="min-h-screen w-screen bg-[#f8fafc]">
    <RouterView />
  </div>

  <!-- Jika sudah login dan mengakses halaman utama, tampilkan layout dashboard lengkap -->
  <div v-else class="flex h-screen w-screen overflow-hidden bg-white text-[#1A1D1F]">
    <SidebarNav :is-open="isSidebarOpen" @close="isSidebarOpen = false" />

    <div class="flex-1 h-full flex flex-col overflow-hidden bg-white">
      <HeaderBar @toggle-sidebar="toggleSidebar" />

      <main class="flex-1 overflow-y-auto px-4 md:px-8 pb-8">
        <RouterView />
      </main>
    </div>
  </div>
</template>
