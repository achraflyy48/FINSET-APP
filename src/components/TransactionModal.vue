<script setup>
import { ref, watch } from 'vue'
import { X, DollarSign, Calendar, Tag, FileText } from 'lucide-vue-next'

// Menerima instruksi dari komponen induk (Dashboard)
const props = defineProps({
  isOpen: Boolean,
  initialTab: {
    type: String,
    default: 'expense', // 'income' atau 'expense'
  },
})

const emit = defineEmits(['close'])

// State lokal untuk mengatur tab mana yang sedang aktif
const activeTab = ref(props.initialTab)

// Memastikan tab selalu sinkron jika dibuka dari tombol yang berbeda di Dashboard
watch(
  () => props.initialTab,
  (newVal) => {
    activeTab.value = newVal
  },
)
</script>

<template>
  <template v-if="isOpen">
    <div
      @click="emit('close')"
      class="fixed inset-0 bg-[#1A1D1F]/40 backdrop-blur-sm z-50 transition-opacity"
    ></div>

    <div
      class="fixed z-50 w-full md:w-[28rem] bg-white bottom-0 md:bottom-auto md:top-1/2 left-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 rounded-t-3xl md:rounded-3xl shadow-2xl flex flex-col max-h-[90vh]"
    >
      <div class="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mt-4 mb-2 md:hidden"></div>

      <div class="flex items-center justify-between px-6 pt-2 pb-4 border-b border-slate-100">
        <h3 class="text-lg font-bold text-[#1A1D1F]">Add Transaction</h3>
        <button
          @click="emit('close')"
          class="p-2 text-slate-400 hover:text-[#1A1D1F] hover:bg-slate-50 rounded-full transition-all"
        >
          <X class="w-5 h-5" />
        </button>
      </div>

      <div class="p-6 overflow-y-auto">
        <div class="flex p-1 bg-slate-50 rounded-xl border border-slate-100 mb-8">
          <button
            @click="activeTab = 'expense'"
            class="flex-1 py-2 text-sm font-bold rounded-lg transition-all"
            :class="
              activeTab === 'expense'
                ? 'bg-white text-[#1A1D1F] shadow-sm'
                : 'text-slate-400 hover:text-slate-600'
            "
          >
            Expense
          </button>
          <button
            @click="activeTab = 'income'"
            class="flex-1 py-2 text-sm font-bold rounded-lg transition-all"
            :class="
              activeTab === 'income'
                ? 'bg-white text-[#1A1D1F] shadow-sm'
                : 'text-slate-400 hover:text-slate-600'
            "
          >
            Income
          </button>
        </div>

        <form @submit.prevent="emit('close')" class="space-y-6">
          <div class="space-y-2 text-center">
            <label class="text-xs font-medium text-slate-400 uppercase tracking-wider"
              >Amount</label
            >
            <div class="flex items-center justify-center gap-1 text-[#1A1D1F]">
              <span class="text-3xl font-bold text-slate-300">Rp</span>
              <input
                type="number"
                placeholder="0.00"
                class="w-3/4 text-4xl font-bold bg-transparent text-center focus:outline-none placeholder:text-slate-200"
                :class="activeTab === 'income' ? 'text-green-500' : 'text-[#1A1D1F]'"
              />
            </div>
          </div>

          <hr class="border-slate-100" />

          <div class="space-y-1.5">
            <label class="text-sm font-medium text-[#1A1D1F] flex items-center gap-2">
              <Tag class="w-4 h-4 text-slate-400" /> Category
            </label>
            <select
              class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6F4EFA]/20 focus:border-[#6F4EFA] transition-all appearance-none"
            >
              <option value="" disabled selected>Select category...</option>
              <template v-if="activeTab === 'expense'">
                <option value="food">Food & Groceries</option>
                <option value="transport">Transportation</option>
                <option value="rent">Rent / Bills</option>
              </template>
              <template v-else>
                <option value="salary">Salary</option>
                <option value="freelance">Freelance</option>
                <option value="investment">Investment</option>
              </template>
            </select>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <label class="text-sm font-medium text-[#1A1D1F] flex items-center gap-2">
                <Calendar class="w-4 h-4 text-slate-400" /> Date
              </label>
              <input
                type="date"
                class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6F4EFA]/20 focus:border-[#6F4EFA] transition-all"
              />
            </div>

            <div class="space-y-1.5">
              <label class="text-sm font-medium text-[#1A1D1F] flex items-center gap-2">
                <FileText class="w-4 h-4 text-slate-400" /> Note
              </label>
              <input
                type="text"
                placeholder="Optional"
                class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6F4EFA]/20 focus:border-[#6F4EFA] transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            class="w-full py-3.5 rounded-xl text-white font-bold text-sm transition-all shadow-sm"
            :class="
              activeTab === 'income'
                ? 'bg-green-500 hover:bg-green-600 shadow-green-500/25'
                : 'bg-[#6F4EFA] hover:bg-[#5b3ce0] shadow-[#6F4EFA]/25'
            "
          >
            Save {{ activeTab === 'income' ? 'Income' : 'Expense' }}
          </button>
        </form>
      </div>
    </div>
  </template>
</template>
