<script setup>
import { ref } from 'vue'
import {
  User,
  Sliders,
  Bell,
  Shield,
  Camera,
  Download,
  AlertTriangle,
  LogOut,
  Component,
} from 'lucide-vue-next'

// State untuk Tab Aktif
const activeTab = ref('profile')

// Data Konfigurasi Tab Menu
const tabs = [
  { id: 'profile', label: 'My Profile', icon: User },
  { id: 'preferences', label: 'Preferences', icon: Sliders },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Data & Security', icon: Shield },
]

// Mock State Data
const profileForm = ref({
  name: 'Achmad Rafli Teguh Pradana Susanto',
  email: 'achmadraflitp@gmail.com',
})

const notifSettings = ref({
  budgetAlerts: true,
  goalReminders: true,
  weeklyReports: false,
})
</script>

<template>
  <div class="flex flex-col md:flow-row gap-8">
    <!-- KOLOM KIRI: Menu Navigasi -->
    <!-- Di mobile jadi horizontal scroll, di desktop jadi kolom vertikal -->
    <div class="w-full md:w-64 shrink-0">
      <div
        class="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 hide-scrollbar"
      >
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="[
            'flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold transition-all whitespace-nowrap',
            activeTab === tab.id
              ? 'bg-[#6F4EFA]/10 text-[#6F4EFA]'
              : 'text-slate-500 hover:bg-slate-50 hover:text-[#1A1D1F]',
          ]"
        >
          <component
            :is="tab.icon"
            class="w-5 h-5"
            :class="activeTab === tab.id ? 'stroke-[2.5px]' : 'stroke-[2px]'"
          />
          {{ tab.label }}
        </button>
      </div>
    </div>

    <!--KOLOM KANAN: Area Konten-->
    <div
      class="flex-1 bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm min-h-[500px]"
    >
      <!--KONTEN: PROFILE-->
      <div v-show="activeTab === 'profile'" class="space-y-8 animate-fade-in">
        <div>
          <h3 class="text-xl font-bold text-[#1A1D1F]">Profile Information</h3>
          <p class="text-sm text-slate-500 mt-1">Update your photo and personal details</p>
        </div>

        <!--AVATAR UPLOAD-->
        <div class="flex items-center gap-6">
          <div class="relative group cursor-pointer">
            <div class="w-24 h-24 rounded-full bg-gradient-to-tr from-[#6F4EFA] to-purple-400 p-1">
              <img
                src="https://i.pravatar.cc/150?img=11"
                alt="Profile"
                class="w-full h-full rounded-full border-4 border-white object-cover"
              />
            </div>
            <!--OVERLAY CAMERA ICON-->
            <div
              class="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Camera class="w-6 h-6 text-white" />
            </div>
          </div>
          <div>
            <div class="flex gap-3">
              <button
                class="px-4 py-2 bg-slate-100 text-[#1A1D1F] rounded-xl text-sm font-bold hover:bg-slate-200 transition-all"
              >
                Upload New
              </button>
              <button
                class="px-4 py-2 text-slate-500 hover:text-red-500 rounded-xl text-sm font-bold transition-all"
              >
                Remove
              </button>
            </div>
            <p class="text-xs text-slate-400 mt-2">Recommended: Square JPG or PNG, max 2MB.</p>
          </div>
        </div>

        <hr class="border-slate-100" />
      </div>
    </div>
  </div>
</template>
