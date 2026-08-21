<script setup>
import { ref, computed } from 'vue'
import { Plus, MoreVertical, Utensils, Car, ShoppingBag, Coffee } from 'lucide-vue-next'
import { formatRupiah } from '../utils/formatters'
import AddBudgetDrawer from '../components/AddBudgetDrawer.vue'

const isDrawerOpen = ref(false)

// Data Mock Budget
const budgets = ref([
  {
    id: 1,
    category: 'Food & Groceries',
    icon: Utensils,
    spent: 1800000,
    limit: 2000000,
    bgClass: 'bg-orange-100 text-orange-600',
  }, // 90% (Merah)
  {
    id: 2,
    category: 'Transportation',
    icon: Car,
    spent: 600000,
    limit: 1000000,
    bgClass: 'bg-blue-100 text-blue-600',
  }, // 60% (Hijau)
  {
    id: 3,
    category: 'Shopping',
    icon: ShoppingBag,
    spent: 1200000,
    limit: 1500000,
    bgClass: 'bg-purple-100 text-purple-600',
  }, // 80% (Oranye)
  {
    id: 4,
    category: 'Cafe & Snacks',
    icon: Coffee,
    spent: 450000,
    limit: 500000,
    bgClass: 'bg-rose-100 text-rose-600',
  }, // 90% (Merah)
])

// Kalkulasi Total untuk Banner Atas
const totalLimit = computed(() => budgets.value.reduce((sum, b) => sum + b.limit, 0))
const totalSpent = computed(() => budgets.value.reduce((sum, b) => sum + b.spent, 0))
const masterPercent = computed(() =>
  Math.min(Math.round((totalSpent.value / totalLimit.value) * 100), 100),
)

// FUNGSI LOGIKA "TRAFFIC LIGHT"
const getPercent = (spent, limit) => Math.min(Math.round((spent / limit) * 100), 100)

const getTrafficLightColor = (percent) => {
  if (percent >= 90) return 'bg-red-500' // Bahaya (>= 90%)
  if (percent >= 75) return 'bg-orange-400' // Hati-hati (75% - 89%)
  return 'bg-green-500' // Aman (< 75%)
}

// Fungsi Simpan dari Drawer
const handleAddNewBudget = (newBudget) => {
  budgets.value.push({
    id: Date.now(),
    ...newBudget,
  })
  isDrawerOpen.value = false
}
</script>

<template>
  <div class="space-y-8">
    <!-- 1. The Burn Rate Banner -->
    <div
      class="bg-gradient-to-br from-slate-800 to-[#1A1D1F] rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden"
    >
      <!-- Glow Effect -->
      <div
        class="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20"
      ></div>

      <div
        class="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8"
      >
        <div>
          <p class="text-sm font-medium text-slate-400 mb-1">Total Monthly Budget</p>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
            {{ formatRupiah(totalLimit) }}
          </h2>
          <p class="text-sm text-slate-400">
            You've spent <span class="text-white font-bold">{{ formatRupiah(totalSpent) }}</span> so
            far
          </p>
        </div>
        <button
          @click="isDrawerOpen = true"
          class="flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#1A1D1F] rounded-xl font-bold hover:bg-slate-50 transition-all shadow-sm w-full md:w-auto"
        >
          <Plus class="w-5 h-5 stroke-[2.5px]" />
          <span>Create Budget</span>
        </button>
      </div>

      <!-- Master Progress Bar -->
      <div class="relative z-10">
        <div class="flex justify-between text-xs font-bold mb-2">
          <span class="text-slate-300">Spent: {{ masterPercent }}%</span>
          <span class="text-emerald-400">{{ formatRupiah(totalLimit - totalSpent) }} Left</span>
        </div>
        <div class="h-3 w-full bg-slate-700 rounded-full overflow-hidden">
          <div
            class="h-full rounded-full transition-all duration-1000 ease-out bg-emerald-500"
            :style="{ width: `${masterPercent}%` }"
          ></div>
        </div>
      </div>
    </div>

    <!-- 2. The Budget List (Susunan Baris) -->
    <div class="space-y-4">
      <h3 class="text-lg font-bold text-[#1A1D1F] mb-2">Budget Categories</h3>

      <!-- Iterasi Kartu List -->
      <div
        v-for="budget in budgets"
        :key="budget.id"
        class="bg-white rounded-2xl p-5 md:p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all group"
      >
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <!-- Kiri: Ikon & Kategori -->
          <div class="flex items-center gap-4">
            <div :class="['p-3.5 rounded-xl shrink-0', budget.bgClass]">
              <component :is="budget.icon" class="w-6 h-6 stroke-[2px]" />
            </div>
            <div>
              <h4 class="text-lg font-bold text-[#1A1D1F]">{{ budget.category }}</h4>
              <p class="text-sm font-medium text-slate-500 mt-0.5">
                {{ getPercent(budget.spent, budget.limit) }}% used
              </p>
            </div>
          </div>

          <!-- Kanan: Nominal Limit & Sisa (Desktop dikanan, Mobile dibawah teks) -->
          <div
            class="md:text-right flex flex-row md:flex-col justify-between items-center md:items-end border-t md:border-none border-slate-100 pt-3 md:pt-0"
          >
            <div>
              <p class="text-sm text-slate-500 font-medium mb-0.5 md:hidden">Remaining</p>
              <p class="text-lg font-bold text-[#1A1D1F] leading-none mb-1">
                {{ formatRupiah(budget.limit - budget.spent) }}
                <span class="text-sm font-medium text-slate-400 hidden md:inline">left</span>
              </p>
              <p class="text-xs font-medium text-slate-400">of {{ formatRupiah(budget.limit) }}</p>
            </div>
            <button
              class="p-2 text-slate-300 hover:text-[#1A1D1F] hover:bg-slate-50 rounded-xl transition-all md:hidden"
            >
              <MoreVertical class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- The Traffic Light Progress Bar -->
        <div class="flex items-center gap-4">
          <div class="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div
              :class="[
                'h-full rounded-full transition-all duration-1000 ease-out',
                getTrafficLightColor(getPercent(budget.spent, budget.limit)),
              ]"
              :style="{ width: `${getPercent(budget.spent, budget.limit)}%` }"
            ></div>
          </div>
          <!-- Opsi titik tiga khusus desktop -->
          <button
            class="hidden md:block p-1 text-slate-300 hover:text-[#1A1D1F] transition-colors shrink-0"
          >
            <MoreVertical class="w-5 h-5" />
          </button>
        </div>

        <!-- Warning Teks jika >= 90% -->
        <p
          v-if="getPercent(budget.spent, budget.limit) >= 90"
          class="text-xs font-bold text-red-500 mt-3 flex items-center gap-1"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
          Warning: Approaching budget limit!
        </p>
      </div>
    </div>

    <AddBudgetDrawer
      :is-open="isDrawerOpen"
      @close="isDrawerOpen = false"
      @save="handleAddNewBudget"
    />
  </div>
</template>
