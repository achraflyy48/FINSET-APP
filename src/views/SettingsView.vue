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
  <div class="flex flex-col md:flex-row gap-8">
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

    <!-- KOLOM KANAN: Area Konten -->
    <div
      class="flex-1 bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm min-h-[500px]"
    >
      <!-- 1. KONTEN: PROFILE -->
      <div v-show="activeTab === 'profile'" class="space-y-8 animate-fade-in">
        <div>
          <h3 class="text-xl font-bold text-[#1A1D1F]">Profile Information</h3>
          <p class="text-sm text-slate-500 mt-1">Update your photo and personal details.</p>
        </div>

        <!-- Avatar Upload -->
        <div class="flex items-center gap-6">
          <div class="relative group cursor-pointer">
            <div class="w-24 h-24 rounded-full bg-gradient-to-tr from-[#6F4EFA] to-purple-400 p-1">
              <img
                src="https://i.pravatar.cc/150?img=11"
                alt="Profile"
                class="w-full h-full rounded-full border-4 border-white object-cover"
              />
            </div>
            <!-- Overlay Camera Icon -->
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

        <!-- Form Inputs -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-2">
            <label class="text-sm font-bold text-[#1A1D1F]">Full Name</label>
            <input
              v-model="profileForm.name"
              type="text"
              class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6F4EFA]/20 focus:border-[#6F4EFA] transition-all font-medium text-[#1A1D1F]"
            />
          </div>
          <div class="space-y-2">
            <label class="text-sm font-bold text-[#1A1D1F]">Email Address</label>
            <input
              v-model="profileForm.email"
              type="email"
              class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6F4EFA]/20 focus:border-[#6F4EFA] transition-all font-medium text-[#1A1D1F]"
            />
          </div>
        </div>

        <div class="flex justify-end pt-4">
          <button
            class="px-6 py-3 bg-[#6F4EFA] text-white rounded-xl font-bold hover:bg-[#5b3ce0] transition-all shadow-sm shadow-[#6F4EFA]/25"
          >
            Save Changes
          </button>
        </div>
      </div>

      <!-- 2. KONTEN: PREFERENCES -->
      <div v-show="activeTab === 'preferences'" class="space-y-8 animate-fade-in">
        <div>
          <h3 class="text-xl font-bold text-[#1A1D1F]">App Preferences</h3>
          <p class="text-sm text-slate-500 mt-1">Customize how the app works for you.</p>
        </div>

        <div class="space-y-6">
          <!-- Base Currency -->
          <div
            class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border border-slate-100 rounded-2xl"
          >
            <div>
              <h4 class="font-bold text-[#1A1D1F]">Base Currency</h4>
              <p class="text-sm text-slate-500 mt-0.5">Your primary currency for reports.</p>
            </div>
            <select
              class="px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-[#1A1D1F] focus:outline-none focus:ring-2 focus:ring-[#6F4EFA]/20 focus:border-[#6F4EFA]"
            >
              <option value="IDR">IDR - Indonesian Rupiah</option>
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
            </select>
          </div>

          <!-- Billing Cycle (Tanggal Gajian) -->
          <div
            class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border border-slate-100 rounded-2xl"
          >
            <div>
              <h4 class="font-bold text-[#1A1D1F]">Billing Cycle Start</h4>
              <p class="text-sm text-slate-500 mt-0.5">When does your monthly budget reset?</p>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sm font-medium text-slate-500">Date:</span>
              <select
                class="px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-[#1A1D1F] focus:outline-none focus:ring-2 focus:ring-[#6F4EFA]/20 focus:border-[#6F4EFA]"
              >
                <option v-for="n in 31" :key="n" :value="n">{{ n }}</option>
              </select>
            </div>
          </div>

          <!-- Appearance -->
          <div
            class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border border-slate-100 rounded-2xl"
          >
            <div>
              <h4 class="font-bold text-[#1A1D1F]">Appearance</h4>
              <p class="text-sm text-slate-500 mt-0.5">Choose your visual theme.</p>
            </div>
            <div class="flex bg-slate-100 p-1 rounded-xl">
              <button
                class="px-4 py-2 bg-white text-[#1A1D1F] rounded-lg text-sm font-bold shadow-sm"
              >
                Light
              </button>
              <button
                class="px-4 py-2 text-slate-500 hover:text-[#1A1D1F] rounded-lg text-sm font-bold transition-colors"
              >
                Dark
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 3. KONTEN: NOTIFICATIONS -->
      <div v-show="activeTab === 'notifications'" class="space-y-8 animate-fade-in">
        <div>
          <h3 class="text-xl font-bold text-[#1A1D1F]">Notifications</h3>
          <p class="text-sm text-slate-500 mt-1">Manage what alerts you receive.</p>
        </div>

        <div class="space-y-4">
          <!-- Toggle 1 -->
          <label
            class="flex items-center justify-between p-4 border border-slate-100 rounded-2xl cursor-pointer hover:bg-slate-50 transition-colors"
          >
            <div>
              <h4 class="font-bold text-[#1A1D1F]">Budget Alerts</h4>
              <p class="text-sm text-slate-500 mt-0.5">
                Get notified when you reach 90% of a budget.
              </p>
            </div>
            <div class="relative">
              <input type="checkbox" v-model="notifSettings.budgetAlerts" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6F4EFA]"
              ></div>
            </div>
          </label>

          <!-- Toggle 2 -->
          <label
            class="flex items-center justify-between p-4 border border-slate-100 rounded-2xl cursor-pointer hover:bg-slate-50 transition-colors"
          >
            <div>
              <h4 class="font-bold text-[#1A1D1F]">Goal Reminders</h4>
              <p class="text-sm text-slate-500 mt-0.5">
                Reminders for your saving target deadlines.
              </p>
            </div>
            <div class="relative">
              <input type="checkbox" v-model="notifSettings.goalReminders" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6F4EFA]"
              ></div>
            </div>
          </label>

          <!-- Toggle 3 -->
          <label
            class="flex items-center justify-between p-4 border border-slate-100 rounded-2xl cursor-pointer hover:bg-slate-50 transition-colors"
          >
            <div>
              <h4 class="font-bold text-[#1A1D1F]">Weekly Reports</h4>
              <p class="text-sm text-slate-500 mt-0.5">
                Receive weekly financial summary via email.
              </p>
            </div>
            <div class="relative">
              <input type="checkbox" v-model="notifSettings.weeklyReports" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6F4EFA]"
              ></div>
            </div>
          </label>
        </div>
      </div>

      <!-- 4. KONTEN: SECURITY & DATA -->
      <div v-show="activeTab === 'security'" class="space-y-8 animate-fade-in">
        <div>
          <h3 class="text-xl font-bold text-[#1A1D1F]">Data & Security</h3>
          <p class="text-sm text-slate-500 mt-1">Protect your account and manage your data.</p>
        </div>

        <!-- Password -->
        <div class="space-y-4">
          <h4 class="font-bold text-[#1A1D1F]">Change Password</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="password"
              placeholder="Current Password"
              class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6F4EFA]/20 focus:border-[#6F4EFA]"
            />
            <input
              type="password"
              placeholder="New Password"
              class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6F4EFA]/20 focus:border-[#6F4EFA]"
            />
          </div>
          <button
            class="px-5 py-2.5 bg-slate-100 text-[#1A1D1F] rounded-xl text-sm font-bold hover:bg-slate-200 transition-all"
          >
            Update Password
          </button>
        </div>

        <hr class="border-slate-100" />

        <!-- Export -->
        <div>
          <h4 class="font-bold text-[#1A1D1F] mb-3">Export Data</h4>
          <p class="text-sm text-slate-500 mb-4">
            Download a complete copy of your financial data (transactions, budgets, goals).
          </p>
          <button
            class="flex items-center gap-2 px-5 py-2.5 border-2 border-slate-200 text-[#1A1D1F] rounded-xl text-sm font-bold hover:border-[#6F4EFA] hover:text-[#6F4EFA] hover:bg-[#6F4EFA]/5 transition-all"
          >
            <Download class="w-4 h-4 stroke-[2.5px]" />
            Export as CSV
          </button>
        </div>

        <!-- Danger Zone -->
        <div class="mt-8 border border-red-200 bg-red-50/50 rounded-2xl p-5">
          <h4 class="font-bold text-red-600 flex items-center gap-2">
            <AlertTriangle class="w-5 h-5" />
            Danger Zone
          </h4>
          <p class="text-sm text-slate-600 mt-1 mb-4">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <button
            class="px-5 py-2.5 bg-white border-2 border-red-100 text-red-600 rounded-xl text-sm font-bold hover:bg-red-50 hover:border-red-200 transition-all"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Transisi halus saat pindah tab */
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Sembunyikan scrollbar di mobile tab tapi tetap bisa di-scroll */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
