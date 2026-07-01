<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import {
  Plus,
  Minus,
  CreditCard,
  Wallet,
  ArrowUpRight,
  ShoppingCart,
  Utensils,
} from 'lucide-vue-next'
import TransactionModal from '../components/TransactionModal.vue'
import { formatRupiah } from '../utils/formatters' // 1. Import Fungsi Format

const isModalOpen = ref(false)
const modalType = ref('expense')

const openModal = (type) => {
  modalType.value = type
  isModalOpen.value = true
}

// 2. Data diubah menjadi nominal Rupiah (integer murni)
const recentTransactions = [
  {
    id: 1,
    title: 'Freelance UI Design',
    date: 'Today, 10:00 AM',
    amount: 1500000,
    type: 'income',
    icon: ArrowUpRight,
    colorClass: 'bg-green-100 text-green-600',
  },
  {
    id: 2,
    title: 'Groceries Supermarket',
    date: 'Yesterday, 09:15 AM',
    amount: 250000,
    type: 'expense',
    icon: ShoppingCart,
    colorClass: 'bg-orange-100 text-orange-600',
  },
  {
    id: 3,
    title: 'Coffee Shop',
    date: 'Jun 24, 16:45 PM',
    amount: 45000,
    type: 'expense',
    icon: Utensils,
    colorClass: 'bg-rose-100 text-rose-600',
  },
]
</script>

<template>
  <div class="space-y-8">
    <div
      class="bg-[#6F4EFA] rounded-3xl p-6 md:p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-lg shadow-[#6F4EFA]/20"
    >
      <div>
        <p class="text-[#A893FA] font-medium mb-1">Total Balance</p>
        <!-- 3. Terapkan fungsi formatRupiah -->
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          {{ formatRupiah(15700000) }}
        </h2>
        <div class="flex items-center gap-2 text-sm">
          <span class="bg-white/20 px-2 py-1 rounded-md font-medium">+12.1%</span>
          <span class="text-[#A893FA]">vs last month</span>
        </div>
      </div>

      <!-- Tombol Income & Expense (Sama seperti sebelumnya) -->
      <div class="flex items-center gap-3 w-full md:w-auto">
        <button
          @click="openModal('income')"
          class="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-white text-[#6F4EFA] rounded-xl font-bold hover:bg-slate-50 transition-all shadow-sm"
        >
          <Plus class="w-5 h-5 stroke-[2.5px]" />
          <span class="text-sm">Income</span>
        </button>
        <button
          @click="openModal('expense')"
          class="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-[#5b3ce0] border border-[#7b5cfa] text-white rounded-xl font-bold hover:bg-[#4a2ec2] transition-all shadow-sm"
        >
          <Minus class="w-5 h-5 stroke-[2.5px]" />
          <span class="text-sm">Expense</span>
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- AREA 2: My Wallets -->
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-bold text-[#1A1D1F]">My Wallets</h3>
          <!-- 4. Tombol Manage disambungkan ke halaman Wallet -->
          <RouterLink to="/wallet" class="text-sm font-medium text-[#6F4EFA] hover:underline">
            Manage
          </RouterLink>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <!-- Kartu 1: Dark Mode Minimalist Bank -->
          <div
            class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-5 text-white shadow-md relative overflow-hidden group cursor-pointer"
          >
            <div
              class="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-4 -mt-4 blur-xl transition-all group-hover:scale-110"
            ></div>
            <div class="flex justify-between items-start mb-6 relative z-10">
              <CreditCard class="w-6 h-6 text-slate-300" />
              <span class="text-xs font-bold tracking-widest text-slate-400">BANK BCA</span>
            </div>
            <p class="text-slate-400 text-xs mb-1 relative z-10">Main Account</p>
            <p class="text-lg md:text-xl font-bold tracking-tight relative z-10">
              {{ formatRupiah(12450000) }}
            </p>
          </div>

          <!-- Kartu 2: E-Wallet -->
          <div
            class="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <div class="flex justify-between items-start mb-6">
              <div class="p-2 bg-blue-50 rounded-lg"><Wallet class="w-5 h-5 text-blue-500" /></div>
            </div>
            <p class="text-slate-500 text-xs mb-1">Cash / E-Wallet</p>
            <p class="text-lg md:text-xl font-bold tracking-tight text-[#1A1D1F]">
              {{ formatRupiah(3250000) }}
            </p>
          </div>
        </div>
      </div>

      <!-- AREA 3: Recent Transactions -->
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-bold text-[#1A1D1F]">Recent Transactions</h3>
          <RouterLink to="/transactions" class="text-sm font-medium text-[#6F4EFA] hover:underline">
            View All
          </RouterLink>
        </div>

        <div
          class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden divide-y divide-slate-100"
        >
          <div
            v-for="tx in recentTransactions"
            :key="tx.id"
            class="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <div class="flex items-center gap-4">
              <div
                :class="[
                  'w-10 h-10 rounded-full flex items-center justify-center shrink-0',
                  tx.colorClass,
                ]"
              >
                <component :is="tx.icon" class="w-4 h-4 stroke-[2.5px]" />
              </div>
              <div>
                <p class="text-sm font-bold text-[#1A1D1F]">{{ tx.title }}</p>
                <p class="text-xs text-slate-500 mt-0.5">{{ tx.date }}</p>
              </div>
            </div>
            <!-- 5. Terapkan formatRupiah pada tabel -->
            <span
              :class="[
                'text-sm font-bold',
                tx.type === 'income' ? 'text-green-600' : 'text-[#1A1D1F]',
              ]"
            >
              {{ tx.type === 'income' ? '+' : '-' }} {{ formatRupiah(tx.amount) }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <TransactionModal
      :is-open="isModalOpen"
      :initial-tab="modalType"
      @close="isModalOpen = false"
    />
  </div>
</template>
