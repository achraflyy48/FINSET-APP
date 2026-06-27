<script setup>
import { TrendingUp, TrendingDown, ArrowRightLeft, LayoutGrid, ChevronDown } from 'lucide-vue-next'

defineProps({
  title: String,
  amount: String,
  trendPercent: String,
  isPositive: Boolean, // Jika true = Hijau naik, false = Merah turun
  transactions: Number,
  categories: Number,
  comparisonText: String,
})
</script>

<template>
  <div
    class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-6 hover:shadow-md transition-all"
  >
    <div class="flex items-center justify-between">
      <h3 class="text-base font-bold text-[#1A1D1F]">{{ title }}</h3>
      <button
        class="flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100"
      >
        USD <ChevronDown class="w-3 h-3" />
      </button>
    </div>

    <div>
      <h2 class="text-[32px] font-bold text-[#1A1D1F] tracking-tight">{{ amount }}</h2>
    </div>

    <div class="flex items-center gap-4">
      <div
        class="flex items-center gap-1 px-2 py-1 rounded-md text-xs font-bold"
        :class="isPositive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500'"
      >
        <TrendingUp v-if="isPositive" class="w-3 h-3 stroke-[3px]" />
        <TrendingDown v-else class="w-3 h-3 stroke-[3px]" />
        {{ trendPercent }}
      </div>

      <div class="flex gap-4 text-xs font-medium text-[#1A1D1F]">
        <div class="flex items-center gap-1.5">
          <div class="p-1 bg-[#6F4EFA]/10 rounded-md">
            <ArrowRightLeft class="w-3 h-3 text-[#6F4EFA]" />
          </div>
          {{ transactions }} transactions
        </div>
        <div class="flex items-center gap-1.5">
          <div class="p-1 bg-[#6F4EFA]/10 rounded-md">
            <LayoutGrid class="w-3 h-3 text-[#6F4EFA]" />
          </div>
          {{ categories }} categories
        </div>
      </div>
    </div>

    <div class="pt-4 border-t border-slate-100">
      <p class="text-xs text-slate-400 font-medium leading-relaxed" v-html="comparisonText"></p>
    </div>
  </div>
</template>
