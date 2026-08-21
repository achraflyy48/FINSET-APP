<script setup>
import { ref } from 'vue'
import { X, Utensils, Car, ShoppingBag, Coffee, Zap, Smartphone } from 'lucide-vue-next'

defineProps({
  isOpen: Boolean,
})

const emit = defineEmits(['close', 'save'])

const categoryName = ref('')
const limitAmount = ref('')
const selectedIcon = ref('food')

const categoryIcons = [
  { id: 'food', label: 'Food', icon: Utensils, bgClass: 'bg-orange-100 text-orange-600' },
  { id: 'transport', label: 'Transport', icon: Car, bgClass: 'bg-blue-100 text-blue-600' },
  {
    id: 'shopping',
    label: 'Shopping',
    icon: ShoppingBag,
    bgClass: 'bg-purple-100 text-purple-600',
  },
  { id: 'cafe', label: 'Cafe', icon: Coffee, bgClass: 'bg-rose-100 text-rose-600' },
  { id: 'bills', label: 'Bills', icon: Zap, bgClass: 'bg-yellow-100 text-yellow-600' },
  { id: 'digital', label: 'Digital', icon: Smartphone, bgClass: 'bg-slate-100 text-slate-600' },
]

const handleSave = () => {
  if (!categoryName.value || !limitAmount.value) return

  const iconData = categoryIcons.find((c) => c.id === selectedIcon.value)

  emit('save', {
    category: categoryName.value,
    limit: Number(limitAmount.value),
    spent: 0, //Awal budget pasti 0
    icon: iconData.icon,
    bgClass: iconData.bgClass,
  })

  //Reset Form
  categoryName.value = ''
  limitAmount.value = ''
  selectedIcon.value = 'food'
}
</script>

<template>
  <template v-if="isOpen">
    <div
      class="fixed inset-0 bg-[#1A1D1F]/40 backdrop-blur-sm z-50 transition-opacity"
      @click="emit('close')"
    ></div>

    <div
      class="fixed z-50 w-full md:w-[420px] bg-white bottom-0 md:top-0 md:bottom-auto md:right-0 h-auto md:h-full max-h-[90vh] md:max-h-full rounded-t-3xl md:rounded-none md:rounded-l-3xl shadow-2xl flex flex-col transition-transform"
    >
      <div class="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mt-4 mb-2 md:hidden"></div>

      <div
        class="flex items-center justify-between px-6 md:px-8 pt-2 md:pt-8 pb-6 border-b border-slate-100 shrink-0"
      >
        <div>
          <h3 class="text-xl font-bold text-[#1A1D1F]">Set New Budget</h3>
          <p class="text-sm text-slate-500 mt-1">Control your monthly limits</p>
        </div>
        <button
          @click="emit('close')"
          class="p-2 text-slate-400 hover:text-[#1A1D1F] hover:bg-slate-50 rounded-full transition-all"
        >
          <X class="w-6 h-6" />
        </button>
      </div>

      <div class="p-6 md:px-8 overflow-y-auto flex-1 space-y-6">
        <div class="space-y-2">
          <label class="text-sm font-medium text-[#1A1D1F]">Category Name</label>
          <input
            v-model="categoryName"
            type="text"
            placeholder="e.g., Groceries"
            class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6F4EFA]/20 focus:border-[#6F4EFA] transition-all"
          />
        </div>

        <div class="space-y-2">
          <label class="text-sm font-medium text-[#1A1D1F]">Maximum Limit (Per Month)</label>
          <div class="relative flex items-center">
            <span class="absolute left-4 font-bold text-slate-400">Rp</span>
            <input
              v-model="limitAmount"
              type="number"
              placeholder="0"
              class="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#6F4EFA]/20 focus:border-[#6F4EFA] font-bold text-[#1A1D1F]"
            />
          </div>
        </div>

        <hr class="border-slate-100" />

        <div class="space-y-3">
          <label class="text-sm font-medium text-[#1A1D1F]">Category Icon</label>
          <div class="grid grid-cols-3 gap-3">
            <button
              v-for="cat in categoryIcons"
              :key="cat.id"
              @click="selectedIcon = cat.id"
              :class="[
                'flex flex-col items-center gap-2 p-3 rounded-xl border transition-all',
                selectedIcon === cat.id
                  ? `border-[#6F4EFA] shadow-sm bg-[#6F4EFA]/5 text-[#6F4EFA]`
                  : 'border-slate-100 text-slate-400 hover:bg-slate-50',
              ]"
            >
              <component :is="cat.icon" class="w-5 h-5" />
              <span class="text-[10px] font-bold uppercase tracking-wider">{{ cat.label }}</span>
            </button>
          </div>
        </div>
      </div>

      <div class="p-6 md:px-8 border-t border-slate-100 bg-white shrink-0">
        <button
          @click="handleSave"
          class="w-full py-4 bg-[#6F4EFA] text-white rounded-xl font-bold hover:bg-[#5b3ce0] transition-all shadow-sm shadow-[#6F4EFA]/25"
        >
          Save Budget Limit
        </button>
      </div>
    </div>
  </template>
</template>
