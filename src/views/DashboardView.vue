<script setup>
import { Calendar, LayoutTemplate, Plus } from 'lucide-vue-next'
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between pt-2">
      <button
        class="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-[#1A1D1F] hover:bg-slate-50 transition-all shadow-sm"
      >
        <Calendar class="w-4 h-4 text-slate-400" />
        This month
      </button>

      <div class="flex items-center gap-3">
        <button
          class="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-[#1A1D1F] hover:bg-slate-50 transition-all shadow-sm"
        >
          <LayoutTemplate class="w-4 h-4 text-slate-400" />
          Manage widgets
        </button>
        <button
          class="flex items-center gap-2 px-4 py-2 bg-[#6F4EFA] text-white rounded-full text-sm font-medium hover:bg-[#5b3ce0] transition-all shadow-sm shadow-[#6F4EFA]/25"
        >
          <Plus class="w-4 h-4" />
          Add new widget
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
  </div>
</template>
