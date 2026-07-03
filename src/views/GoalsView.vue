<script setup>
import { ref, computed } from 'vue'
import {
  Plus,
  MoreVertical,
  Home,
  Laptop,
  Plane,
  ShieldAlert,
  Clock,
  PlusCircle,
} from 'lucide-vue-next'
import { formatRupiah } from '../utils/formatters'

// Data Mock untuk Daftar Goals (Perhatikan variasi hasDeadline)
const goals = ref([
  {
    id: 1,
    title: 'DP Rumah KPR',
    icon: Home,
    saved: 45000000,
    target: 100000000,
    hasDeadline: true,
    deadlineText: 'Dec 2026',
    colorClass: 'text-blue-500',
    bgClass: 'bg-blue-50',
    progressColor: 'bg-blue-500',
  },
  {
    id: 2,
    title: 'MacBook Pro M3',
    icon: Laptop,
    saved: 12000000,
    target: 25000000,
    hasDeadline: false,
    deadlineText: '',
    colorClass: 'text-purple-500',
    bgClass: 'bg-purple-50',
    progressColor: 'bg-purple-500',
  },
  {
    id: 3,
    title: 'Dana Darurat',
    icon: ShieldAlert,
    saved: 15000000,
    target: 30000000,
    hasDeadline: false,
    deadlineText: '',
    colorClass: 'text-green-500',
    bgClass: 'bg-green-50',
    progressColor: 'bg-green-500',
  },
  {
    id: 4,
    title: 'Liburan Jepang',
    icon: Plane,
    saved: 8000000,
    target: 20000000,
    hasDeadline: true,
    deadlineText: 'Oct 2026',
    colorClass: 'text-orange-500',
    bgClass: 'bg-orange-50',
    progressColor: 'bg-orange-500',
  },
])

// Computed property untuk menghitung persentase, total tersimpan, dan total target
const totalSaved = computed(() => goals.value.reduce((sum, goal) => sum + goal.saved, 0))
const totalTarget = computed(() => goals.value.reduce((sum, goal) => sum + goal.target, 0))

// Fungsi utilitas untuk menghitung persentase bar
const getPercent = (saved, target) => {
  return Math.min(Math.round((saved / target) * 100), 100)
}
</script>

<template>
  <div class="space-y-8">
    <div
      class="bg-gradient-to-br from-[#121316] to-[#1A1D1F] rounded-3xl p-6 md:p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl relative overflow-hidden"
    >
      <div
        class="absolute top-0 right-0 w-64 h-64 bg-[#6F4EFA]/20 rounded-full blur-3xl -mr-20 -mt-20"
      ></div>

      <div class="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16">
        <div>
          <p class="text-sm font-medium text-slate-400 mb-1">Total Saved</p>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-white">
            {{ formatRupiah(totalSaved) }}
          </h2>
        </div>
        <div class="hidden md:block w-px h-12 bg-white/10 self-center"></div>
        <div>
          <p class="text-sm font-medium text-slate-400 mb-1">Total Target</p>
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-slate-300">
            {{ formatRupiah(totalTarget) }}
          </h2>
        </div>
      </div>

      <button
        class="relative z-10 flex items-center justify-center gap-2 px-6 py-3.5 bg-[#6F4EFA] text-white rounded-xl font-bold hover:bg-[#5b3ce0] transition-all shadow-sm shadow-[#6F4EFA]/25 w-full md:w-auto"
      >
        <Plus class="w-5 h-5 stroke-[2.5px]" />
        <span>Create Goal</span>
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="goal in goals"
        :key="goal.id"
        class="bg-white rounded-3xl p-6 md:p-7 border border-slate-100 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between min-h-[260px]"
      >
        <div class="flex justify-between items-start mb-6">
          <div :class="['p-3 rounded-2xl', goal.bgClass, goal.colorClass]">
            <component :is="goal.icon" class="w-6 h-6 stroke-[2px]" />
          </div>
          <button
            class="p-2 text-slate-300 hover:text-[#1A1D1F] hover:bg-slate-50 rounded-xl transition-all"
          >
            <MoreVertical class="w-5 h-5" />
          </button>
        </div>

        <div class="mb-6">
          <h3 class="text-lg font-bold text-[#1A1D1F] mb-4">{{ goal.title }}</h3>

          <div class="flex items-end justify-between mb-3">
            <div>
              <p class="text-2xl font-bold tracking-tight text-[#1A1D1F] leading-none mb-1">
                {{ formatRupiah(goal.saved) }}
              </p>
              <p class="text-xs font-medium text-slate-400">of {{ formatRupiah(goal.target) }}</p>
            </div>
            <span class="text-sm font-bold text-[#1A1D1F]"
              >{{ getPercent(goal.saved, goal.target) }}%</span
            >
          </div>

          <div class="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div
              :class="[
                'h-full rounded-full transition-all duration-1000 ease-out',
                goal.progressColor,
              ]"
              :style="{ width: `${getPercent(goal.saved, goal.target)}%` }"
            ></div>
          </div>
        </div>

        <div class="flex items-center justify-between pt-4 border-t border-slate-100">
          <div
            v-if="goal.hasDeadline"
            class="flex items-center gap-1.5 text-orange-500 bg-orange-50 px-2.5 py-1 rounded-md"
          >
            <Clock class="w-3.5 h-3.5" />
            <span class="text-xs font-bold tracking-wide">Target: {{ goal.deadlineText }}</span>
          </div>

          <div v-else class="flex items-center gap-1.5 text-slate-400">
            <span class="text-xs font-medium tracking-wide">Flexible Target</span>
          </div>

          <button
            class="flex items-center gap-1 text-xs font-bold text-[#6F4EFA] hover:text-[#5b3ce0] transition-colors"
          >
            <PlusCircle class="w-4 h-4" /> Add Funds
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
