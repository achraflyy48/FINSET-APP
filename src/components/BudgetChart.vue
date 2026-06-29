<script setup>
import { ChevronDown } from 'lucide-vue-next'
</script>

<template>
  <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col h-full">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-base font-bold text-[#1A1D1F]">Comparing of budget and expense</h3>

      <div class="flex items-center gap-4">
        <div class="flex items-center gap-3 text-xs font-medium text-slate-500">
          <div class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-[#6F4EFA]"></span>Expense
          </div>
          <div class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-[#A893FA]"></span>Budget
          </div>
        </div>
        <button
          class="flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100"
        >
          This year <ChevronDown class="w-3 h-3" />
        </button>
      </div>
    </div>

    <div
      class="flex-1 min-h-[200px] bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center"
    >
      <p class="text-sm font-medium text-slate-400">Area Bar Chart Akan Muncul Di Sini</p>
    </div>
  </div>
</template>
