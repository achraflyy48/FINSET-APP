<script setup>
import { ref, watch } from 'vue'
import { X, Home, Laptop, Plane, ShieldAlert, Car, Heart, Calendar } from 'lucide-vue-next'

defineProps({
  isOpen: Boolean,
})

const emit = defineEmits(['close', 'save'])

// State untuk Form
const title = ref('')
const target = ref('')
const saved = ref('')
const hasDeadline = ref(false)
const deadlineDate = ref('')

// State untuk Pemilihan Kategori (mengatur Ikon & Warna)
const selectedCategory = ref('property')

const categories = [
  {
    id: 'property',
    label: 'Property',
    icon: Home,
    colorClass: 'text-blue-500',
    bgClass: 'bg-blue-50',
    progressColor: 'bg-blue-500',
  },
  {
    id: 'gadget',
    label: 'Gadget',
    icon: Laptop,
    colorClass: 'text-purple-500',
    bgClass: 'bg-purple-50',
    progressColor: 'bg-purple-500',
  },
  {
    id: 'emergency',
    label: 'Emergency',
    icon: ShieldAlert,
    colorClass: 'text-green-500',
    bgClass: 'bg-green-50',
    progressColor: 'bg-green-500',
  },
  {
    id: 'travel',
    label: 'Travel',
    icon: Plane,
    colorClass: 'text-orange-500',
    bgClass: 'bg-orange-50',
    progressColor: 'bg-orange-500',
  },
  {
    id: 'vehicle',
    label: 'Vehicle',
    icon: Car,
    colorClass: 'text-red-500',
    bgClass: 'bg-red-50',
    progressColor: 'bg-red-500',
  },
  {
    id: 'wedding',
    label: 'Wedding',
    icon: Heart,
    colorClass: 'text-rose-500',
    bgClass: 'bg-rose-50',
    progressColor: 'bg-rose-500',
  },
]

// Fungsi memformat "2026-12" (dari input month) menjadi "Dec 2026"
const formatMonthYear = (dateStr) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

const handleSave = () => {
  if (!title.value || !target.value) return

  const catData = categories.find((c) => c.id === selectedCategory.value)

  emit('save', {
    title: title.value,
    target: Number(target.value),
    saved: Number(saved.value) || 0, // Jika kosong, set 0
    hasDeadline: hasDeadline.value,
    deadlineText: hasDeadline.value ? formatMonthYear(deadlineDate.value) : '',
    icon: catData.icon,
    colorClass: catData.colorClass,
    bgClass: catData.bgClass,
    progressColor: catData.progressColor,
  })

  // Reset Form
  title.value = ''
  target.value = ''
  saved.value = ''
  hasDeadline.value = false
  deadlineDate.value = ''
  selectedCategory.value = 'property'
}
</script>

<template>
  <template v-if="isOpen">
    <!-- Overlay Gelap -->
    <div
      class="fixed inset-0 bg-[#1A1D1F]/40 backdrop-blur-sm z-50 transition-opacity"
      @click="emit('close')"
    ></div>

    <!-- Panel Drawer -->
    <div
      class="fixed z-50 w-full md:w-[420px] bg-white bottom-0 md:top-0 md:bottom-auto md:right-0 h-auto md:h-full max-h-[90vh] md:max-h-full rounded-t-3xl md:rounded-none md:rounded-l-3xl shadow-2xl flex flex-col transition-transform"
    >
      <!-- Handle Mobile -->
      <div class="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mt-4 mb-2 md:hidden"></div>

      <!-- Header -->
      <div
        class="flex items-center justify-between px-6 md:px-8 pt-2 md:pt-8 pb-6 border-b border-slate-100 shrink-0"
      >
        <div>
          <h3 class="text-xl font-bold text-[#1A1D1F]">Create New Goal</h3>
          <p class="text-sm text-slate-500 mt-1">What are you saving for?</p>
        </div>
        <button
          @click="emit('close')"
          class="p-2 text-slate-400 hover:text-[#1A1D1F] hover:bg-slate-50 rounded-full transition-all"
        >
          <X class="w-6 h-6" />
        </button>
      </div>

      <!-- Body Form -->
      <div class="p-6 md:px-8 overflow-y-auto flex-1 space-y-6">
        <!-- Input Nama Target -->
        <div class="space-y-2">
          <label class="text-sm font-medium text-[#1A1D1F]">Goal Name</label>
          <input
            v-model="title"
            type="text"
            placeholder="e.g., Dream House"
            class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6F4EFA]/20 focus:border-[#6F4EFA] transition-all"
          />
        </div>

        <!-- Input Nominal -->
        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-2 col-span-2 md:col-span-1">
            <label class="text-sm font-medium text-[#1A1D1F]">Target Amount</label>
            <div class="relative flex items-center">
              <span class="absolute left-4 font-bold text-slate-400">Rp</span>
              <input
                v-model="target"
                type="number"
                placeholder="0"
                class="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6F4EFA]/20 focus:border-[#6F4EFA] font-bold text-[#1A1D1F]"
              />
            </div>
          </div>
          <div class="space-y-2 col-span-2 md:col-span-1">
            <label class="text-sm font-medium text-[#1A1D1F]">Initial Saved</label>
            <div class="relative flex items-center">
              <span class="absolute left-4 font-bold text-slate-400">Rp</span>
              <input
                v-model="saved"
                type="number"
                placeholder="Optional"
                class="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6F4EFA]/20 focus:border-[#6F4EFA] font-bold text-[#1A1D1F]"
              />
            </div>
          </div>
        </div>

        <hr class="border-slate-100" />

        <!-- Visual & Category Selector -->
        <div class="space-y-3">
          <label class="text-sm font-medium text-[#1A1D1F]">Category & Color</label>
          <div class="grid grid-cols-3 gap-3">
            <button
              v-for="cat in categories"
              :key="cat.id"
              @click="selectedCategory = cat.id"
              :class="[
                'flex flex-col items-center gap-2 p-3 rounded-xl border transition-all',
                selectedCategory === cat.id
                  ? `border-slate-300 shadow-sm ${cat.bgClass} ${cat.colorClass}`
                  : 'border-slate-100 text-slate-400 hover:bg-slate-50',
              ]"
            >
              <component :is="cat.icon" class="w-5 h-5" />
              <span class="text-[10px] font-bold uppercase tracking-wider">{{ cat.label }}</span>
            </button>
          </div>
        </div>

        <hr class="border-slate-100" />

        <!-- THE SMART DEADLINE TOGGLE -->
        <div class="space-y-4 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="p-2 bg-white rounded-lg shadow-sm border border-slate-100">
                <Calendar class="w-4 h-4 text-orange-500" />
              </div>
              <div>
                <p class="text-sm font-bold text-[#1A1D1F]">Set a Target Date</p>
                <p class="text-xs text-slate-500">I have a deadline for this goal</p>
              </div>
            </div>
            <!-- Toggle Switch -->
            <button
              @click="hasDeadline = !hasDeadline"
              :class="[
                'w-11 h-6 rounded-full transition-colors relative',
                hasDeadline ? 'bg-orange-500' : 'bg-slate-200',
              ]"
            >
              <span
                :class="[
                  'absolute top-1 w-4 h-4 rounded-full bg-white transition-all shadow-sm',
                  hasDeadline ? 'left-6' : 'left-1',
                ]"
              ></span>
            </button>
          </div>

          <!-- Date Picker (Hanya Muncul Jika Toggle ON) -->
          <div
            v-if="hasDeadline"
            class="pt-4 border-t border-slate-200/60 animate-in fade-in slide-in-from-top-2 duration-300"
          >
            <label class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block"
              >Select Month & Year</label
            >
            <input
              v-model="deadlineDate"
              type="month"
              class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-[#1A1D1F]"
            />
          </div>
        </div>
      </div>

      <!-- Footer Action -->
      <div class="p-6 md:px-8 border-t border-slate-100 bg-white shrink-0">
        <button
          @click="handleSave"
          class="w-full py-4 bg-[#6F4EFA] text-white rounded-xl font-bold hover:bg-[#5b3ce0] transition-all shadow-sm shadow-[#6F4EFA]/25"
        >
          Save Goal
        </button>
      </div>
    </div>
  </template>
</template>
