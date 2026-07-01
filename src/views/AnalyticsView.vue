<script setup>
import { Calendar, LayoutTemplate, Plus } from 'lucide-vue-next'
import SummaryCard from '../components/SummaryCard.vue'
import OverviewChart from '@/components/OverviewChart.vue'
import BudgetChart from '@/components/BudgetChart.vue'
import StatisticsChart from '@/components/StatisticsChart.vue'
import { formatRupiah } from '../utils/formatters.js'
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

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <SummaryCard
        title="Total balance"
        :amount="formatRupiah(15700000)"
        trendPercent="12.1%"
        :isPositive="true"
        :transactions="50"
        :categories="15"
        :comparisonText="`You have extra <span class='text-[#1A1D1F] font-bold'>${formatRupiah(1700000)}</span><br>compared to last month`"
      />

      <SummaryCard
        title="Income"
        :amount="formatRupiah(8500000)"
        trendPercent="6.2%"
        :isPositive="true"
        :transactions="27"
        :categories="6"
        :comparisonText="`You earn extra <span class='text-[#1A1D1F] font-bold'>${formatRupiah(500000)}</span><br>compared to last month`"
      />

      <SummaryCard
        title="Expense"
        :amount="formatRupiah(6222000)"
        trendPercent="2.4%"
        :isPositive="false"
        :transactions="23"
        :categories="9"
        :comparisonText="`You spent extra <span class='text-[#1A1D1F] font-bold'>${formatRupiah(1222000)}</span><br>compared to last month`"
      />
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      <div class="lg:col-span-2 flex flex-col gap-6">
        <OverviewChart />
        <BudgetChart />
      </div>
      <div class="lg:col-span-1">
        <StatisticsChart />
      </div>
    </div>
  </div>
</template>
