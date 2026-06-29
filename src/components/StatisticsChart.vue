<script setup>
import { ChevronDown } from 'lucide-vue-next'
</script>

<template>
  <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col h-full">
    <div class="flex items-center justify-between mb-8">
      <h3 class="text-base font-bold text-[#1A1D1F]">Statistics</h3>
      <div class="flex gap-2">
        <button
          class="flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1.5 rounded-lg border border-slate-100"
        >
          Expense <ChevronDown class="w-3 h-3" />
        </button>
        <button
          class="flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1.5 rounded-lg border border-slate-100"
        >
          Details <ChevronDown class="w-3 h-3" />
        </button>
      </div>
    </div>

    <div class="flex-1 flex flex-col items-center justify-center gap-8">
      <div
        class="w-48 h-48 rounded-full border-[16px] border-slate-100 flex flex-col items-center justify-center shadow-inner relative"
      >
        <p class="text-xs text-slate-400 font-medium">This month expense</p>
        <p class="text-xl font-bold text-[#1A1D1F]">$6,222.00</p>
        <div
          class="absolute -right-4 -top-2 bg-white border border-slate-100 shadow-sm px-2 py-1 rounded-md text-[10px] font-bold text-slate-600"
        >
          50% <br />
          $2,500
        </div>
      </div>

      <div class="w-full grid grid-cols-2 gap-y-3 gap-x-2 text-xs font-medium text-slate-500">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-[#6F4EFA]"></span>Money transfer
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-slate-800"></span>Cafe & Restaurants
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-slate-400"></span>Rent
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-slate-300"></span>Education
        </div>
      </div>
    </div>
  </div>
</template>
