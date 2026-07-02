<script setup>
import { Plus, MoreVertical, Landmark, Wallet, CreditCard, ArrowUpRight } from 'lucide-vue-next'
import { formatRupiah } from '../utils/formatters'

// Data Mock untuk Daftar Dompet
const wallets = [
  {
    id: 1,
    name: 'Bank BCA',
    type: 'Bank Account',
    balance: 12450000,
    number: '**** **** 5678',
    isPrimary: true,
    icon: Landmark,
    theme: 'dark',
  },
  {
    id: 2,
    name: 'GoPay',
    type: 'E-Wallet',
    balance: 1500000,
    number: '0812 **** 9999',
    isPrimary: false,
    icon: Wallet,
    theme: 'light',
  },
  {
    id: 3,
    name: 'Cash',
    type: 'Physical',
    balance: 1750000,
    number: '---',
    isPrimary: false,
    icon: CreditCard,
    theme: 'light',
  },
]

// Menghitung Total Net Worth secara otomatis dari array wallets
const totalNetWorth = wallets.reduce((sum, wallet) => sum + wallet.balance, 0)
</script>

<template>
  <div class="space-y-8">
    <div
      class="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm"
    >
      <div>
        <p class="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">
          Total Net Worth
        </p>
        <div class="flex items-end gap-4">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-[#1A1D1F]">
            {{ formatRupiah(totalNetWorth) }}
          </h2>
          <span class="flex items-center gap-1 text-sm font-bold text-green-500 mb-1.5">
            <ArrowUpRight class="w-4 h-4" /> 2.4%
          </span>
        </div>
      </div>

      <button
        class="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#6F4EFA] text-white rounded-xl font-bold hover:bg-[#5b3ce0] transition-all shadow-sm shadow-[#6F4EFA]/25"
      >
        <Plus class="w-5 h-5 stroke-[2.5px]" />
        <span>Add New Wallet</span>
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="wallet in wallets"
        :key="wallet.id"
        :class="[
          'rounded-3xl p-6 md:p-8 relative overflow-hidden group cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl duration-300 flex flex-col justify-between min-h-[220px]',
          wallet.theme === 'dark'
            ? 'bg-gradient-to-br from-[#121316] to-[#1A1D1F] text-white shadow-lg border border-slate-800'
            : 'bg-white text-[#1A1D1F] border border-slate-200 shadow-sm',
        ]"
      >
        <div
          v-if="wallet.theme === 'dark'"
          class="absolute top-0 right-0 w-32 h-32 bg-[#6F4EFA]/20 rounded-full blur-3xl -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-125"
        ></div>

        <div class="flex justify-between items-start mb-8 relative z-10">
          <div
            :class="[
              'p-3.5 rounded-2xl',
              wallet.theme === 'dark'
                ? 'bg-white/10 text-white backdrop-blur-md'
                : 'bg-slate-100 text-slate-600',
            ]"
          >
            <component :is="wallet.icon" class="w-6 h-6 stroke-[2px]" />
          </div>

          <div class="flex items-center gap-3">
            <span
              v-if="wallet.isPrimary"
              class="px-3.5 py-1.5 bg-[#6F4EFA]/15 text-[#A893FA] text-[10px] font-bold uppercase tracking-wider rounded-full border border-[#6F4EFA]/20 backdrop-blur-sm shadow-[0_0_10px_rgba(111,78,250,0.2)]"
            >
              Primary
            </span>

            <button
              :class="[
                'p-2 rounded-xl transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100',
                wallet.theme === 'dark'
                  ? 'hover:bg-white/10 text-slate-400 hover:text-white'
                  : 'hover:bg-slate-100 text-slate-400 hover:text-[#1A1D1F]',
              ]"
            >
              <MoreVertical class="w-5 h-5" />
            </button>
          </div>
        </div>

        <div class="relative z-10">
          <p
            :class="[
              'text-sm font-medium mb-1',
              wallet.theme === 'dark' ? 'text-slate-400' : 'text-slate-500',
            ]"
          >
            {{ wallet.name }}
          </p>
          <h3 class="text-2xl font-bold tracking-tight mb-6">
            {{ formatRupiah(wallet.balance) }}
          </h3>

          <div
            class="flex items-center justify-between border-t pt-4"
            :class="wallet.theme === 'dark' ? 'border-white/10' : 'border-slate-100'"
          >
            <p
              :class="[
                'text-xs font-mono tracking-widest',
                wallet.theme === 'dark' ? 'text-slate-400' : 'text-slate-400',
              ]"
            >
              {{ wallet.number }}
            </p>
            <p
              :class="[
                'text-[10px] font-bold uppercase tracking-wider',
                wallet.theme === 'dark' ? 'text-slate-600' : 'text-slate-300',
              ]"
            >
              {{ wallet.type }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
