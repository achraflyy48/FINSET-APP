<script setup>
import { ref } from 'vue'
import { X, Landmark, Wallet, CreditCard, Palette, ShieldCheck } from 'lucide-vue-next'

defineProps({
  isOpen: Boolean,
})

const emit = defineEmits(['close', 'save'])

// State untuk menyimpan inputan form
const walletName = ref('')
const walletType = ref('Bank Account')
const balance = ref('')
const theme = ref('light')
const isPrimary = ref(false)

// Fungsi untuk mengirim data ke komponen induk saat tombol disubmit
const handleSave = () => {
  if (!walletName.value || !balance.value) return // Validasi sederhana

  emit('save', {
    name: walletName.value,
    type: walletType.value,
    balance: Number(balance.value),
    theme: theme.value,
    isPrimary: isPrimary.value,
  })

  // Reset form setelah disave
  walletName.value = ''
  balance.value = ''
  isPrimary.value = false
  theme.value = 'light'
}
</script>

<template>
  <template v-if="isOpen">
    <div
      class="fixed inset-0 bg-[#1A1D1F]/40 backdrop-blur-sm z-50 transition-opacity"
      @click="emit('close')"
    ></div>

    <div
      class="fixed z-50 w-full md:w-[420px] bg-white bottom-0 md:top-0 md:bottom-auto md:right-0 h-auto md:h-full max-h-[90vh] md:max-h-full rounded-t-3xl md:rounded-none md:rounded-l-3xl shadow-2xl flex flex-col transition-transform"
    >
      <div class="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mt-4 mb-2 md:hidden"></div>

      <div
        class="flex items-center justify-between px-6 md:px-8 pt-2 md:pt-8 pb-6 border-b border-slate-100 shrink-0"
      >
        <div>
          <h3 class="text-xl font-bold text-[#1A1D1F]">Add New Wallet</h3>
          <p class="text-sm text-slate-500 mt-1">Setup your new account details</p>
        </div>
        <button
          @click="emit('close')"
          class="p-2 text-slate-400 hover:text-[#1A1D1F] hover:bg-slate-50 rounded-full transition-all"
        >
          <X class="w-6 h-6" />
        </button>
      </div>

      <div class="p-6 md:px-8 overflow-y-auto flex-1 space-y-6">
        <div class="space-y-2">
          <label class="text-sm font-medium text-[#1A1D1F]">Wallet Name</label>
          <input
            v-model="walletName"
            type="text"
            placeholder="e.g., BCA Tabungan"
            class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6F4EFA]/20 focus:border-[#6F4EFA] transition-all"
          />
        </div>

        <div class="space-y-2">
          <label class="text-sm font-medium text-[#1A1D1F]">Initial Balance</label>
          <div class="relative flex items-center">
            <span class="absolute left-4 font-bold text-slate-400">Rp</span>
            <input
              v-model="balance"
              type="number"
              placeholder="0"
              class="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6F4EFA]/20 focus:border-[#6F4EFA] transition-all font-bold text-[#1A1D1F]"
            />
          </div>
        </div>

        <div class="space-y-3">
          <label class="text-sm font-medium text-[#1A1D1F]">Type</label>
          <div class="grid grid-cols-3 gap-3">
            <button
              @click="walletType = 'Bank Account'"
              :class="[
                'flex flex-col items-center gap-2 p-3 rounded-xl border transition-all',
                walletType === 'Bank Account'
                  ? 'border-[#6F4EFA] bg-[#6F4EFA]/5 text-[#6F4EFA]'
                  : 'border-slate-200 text-slate-500 hover:bg-slate-50',
              ]"
            >
              <Landmark class="w-5 h-5" />
              <span class="text-[10px] font-bold uppercase tracking-wider">Bank</span>
            </button>
            <button
              @click="walletType = 'E-Wallet'"
              :class="[
                'flex flex-col items-center gap-2 p-3 rounded-xl border transition-all',
                walletType === 'E-Wallet'
                  ? 'border-[#6F4EFA] bg-[#6F4EFA]/5 text-[#6F4EFA]'
                  : 'border-slate-200 text-slate-500 hover:bg-slate-50',
              ]"
            >
              <Wallet class="w-5 h-5" />
              <span class="text-[10px] font-bold uppercase tracking-wider">E-Wallet</span>
            </button>
            <button
              @click="walletType = 'Physical'"
              :class="[
                'flex flex-col items-center gap-2 p-3 rounded-xl border transition-all',
                walletType === 'Physical'
                  ? 'border-[#6F4EFA] bg-[#6F4EFA]/5 text-[#6F4EFA]'
                  : 'border-slate-200 text-slate-500 hover:bg-slate-50',
              ]"
            >
              <CreditCard class="w-5 h-5" />
              <span class="text-[10px] font-bold uppercase tracking-wider">Cash</span>
            </button>
          </div>
        </div>

        <hr class="border-slate-100" />

        <div class="space-y-3">
          <label class="text-sm font-medium text-[#1A1D1F] flex items-center gap-2">
            <Palette class="w-4 h-4 text-slate-400" /> Card Appearance
          </label>
          <div class="flex p-1 bg-slate-50 rounded-xl border border-slate-100">
            <button
              @click="theme = 'light'"
              :class="[
                'flex-1 py-2 text-sm font-bold rounded-lg transition-all',
                theme === 'light'
                  ? 'bg-white text-[#1A1D1F] shadow-sm'
                  : 'text-slate-400 hover:text-slate-600',
              ]"
            >
              Light Theme
            </button>
            <button
              @click="theme = 'dark'"
              :class="[
                'flex-1 py-2 text-sm font-bold rounded-lg transition-all',
                theme === 'dark'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-600',
              ]"
            >
              Dark Theme
            </button>
          </div>
        </div>

        <div
          class="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50/50"
        >
          <div class="flex items-center gap-3">
            <div class="p-2 bg-white rounded-lg shadow-sm border border-slate-100">
              <ShieldCheck class="w-4 h-4 text-[#6F4EFA]" />
            </div>
            <div>
              <p class="text-sm font-bold text-[#1A1D1F]">Set as Primary</p>
              <p class="text-xs text-slate-500">Make this default for transactions</p>
            </div>
          </div>
          <button
            @click="isPrimary = !isPrimary"
            :class="[
              'w-11 h-6 rounded-full transition-colors relative',
              isPrimary ? 'bg-[#6F4EFA]' : 'bg-slate-200',
            ]"
          >
            <span
              :class="[
                'absolute top-1 w-4 h-4 rounded-full bg-white transition-all shadow-sm',
                isPrimary ? 'left-6' : 'left-1',
              ]"
            ></span>
          </button>
        </div>
      </div>

      <div class="p-6 md:px-8 border-t border-slate-100 bg-white shrink-0">
        <button
          @click="handleSave"
          class="w-full py-4 bg-[#6F4EFA] text-white rounded-xl font-bold hover:bg-[#5b3ce0] transition-all shadow-sm shadow-[#6F4EFA]/25"
        >
          Save Wallet
        </button>
      </div>
    </div>
  </template>
</template>
