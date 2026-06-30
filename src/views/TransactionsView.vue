<script setup>
import {
  Search,
  Download,
  Filter,
  MoreVertical,
  ShoppingCart,
  Utensils,
  ArrowUpRight,
  Monitor,
  Home,
} from 'lucide-vue-next'

//MOCK DATA / DATA SEMENTARA
const transactions = [
  {
    id: 1,
    title: 'Freelance UI Design',
    category: 'Income',
    date: 'Jun 28, 2026, 10:00 AM',
    amount: '1,200.00',
    type: 'income',
    icon: ArrowUpRight,
    colorClass: 'bg-green-100 text-green-600',
  },
  {
    id: 2,
    title: 'MacBook Pro M3',
    category: 'Electronics',
    date: 'Jun 27, 2026, 14:30 PM',
    amount: '2,499.00',
    type: 'expense',
    icon: Monitor,
    colorClass: 'bg-blue-100 text-blue-600',
  },
  {
    id: 3,
    title: 'Groceries Supermarket',
    category: 'Food',
    date: 'Jun 26, 2026, 09:15 AM',
    amount: '124.50',
    type: 'expense',
    icon: ShoppingCart,
    colorClass: 'bg-orange-100 text-orange-600',
  },
  {
    id: 4,
    title: 'Apartment Rent',
    category: 'Rent',
    date: 'Jun 25, 2026, 08:00 AM',
    amount: '850.00',
    type: 'expense',
    icon: Home,
    colorClass: 'bg-purple-100 text-purple-600',
  },
  {
    id: 5,
    title: 'Starbucks Coffee',
    category: 'Cafe & Restaurants',
    date: 'Jun 24, 2026, 16:45 PM',
    amount: '12.00',
    type: 'expense',
    icon: Utensils,
    colorClass: 'bg-rose-100 text-rose-600',
  },
]
</script>

<template>
  <div class="space-y-6">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
      <div>
        <h1 class="text-2xl font-bold tracking-tight text-[#1A1D1F]">Transactions</h1>
        <p class="text-sm text-slate-500">Manage and track your financial history</p>
      </div>

      <div class="flex items-center gap-3 w-full md:w-auto">
        <div class="relative flex-1 md:flex-none">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            class="w-full md:w-64 pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#6F4EFA]/20 focus:border-[#6F4EFA] transition-all"
          />
        </div>

        <button
          class="p-2 md:px-4 md:py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-[#1A1D1F] hover:bg-slate-50 transition-all flex items-center gap-2 shrink-0"
        >
          <Filter class="w-4 h-4" />
          <span class="hidden md:inline">Filter</span>
        </button>
        <button
          class="p-2 md:px-4 md:py-2 bg-[#6F4EFA] text-white rounded-full text-sm font-medium hover:bg-[#5b3ce0] transition-all flex items-center gap-2 shadow-sm shadow-[#6F4EFA]/25 shrink-0"
        >
          <Download class="w-4 h-4" />
          <span class="hidden md:inline">Export CSV</span>
        </button>
      </div>
    </div>

    <div class="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
      <div
        class="hidden md:grid grid-cols-12 gap-4 p-6 border-b border-slate-100 bg-slate-50/50 text-xs font-bold text-slate-400 uppercase tracking-wider"
      >
        <div class="col-span-4">Transaction Details</div>
        <div class="col-span-3">Category</div>
        <div class="col-span-3">Date & Time</div>
        <div class="col-span-2 text-right pr-8">Amount</div>
      </div>
    </div>
  </div>
</template>
