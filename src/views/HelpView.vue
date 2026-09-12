<script setup>
import { ref } from 'vue'
import {
  Search,
  Rocket,
  Wallet,
  Target,
  Shield,
  ChevronDown,
  MessageSquare,
  Mail,
} from 'lucide-vue-next'

// State untuk Pencarian
const searchQuery = ref('')

// State untuk Accordion FAQ (null = semua tertutup)
const activeFaq = ref(null)

// Data Kategori Bantuan
const helpCategories = [
  {
    id: 1,
    title: 'Getting Started',
    icon: Rocket,
    desc: 'Basic app setup and guides',
    bgClass: 'bg-blue-100 text-blue-600',
  },
  {
    id: 2,
    title: 'Wallets & Trx',
    icon: Wallet,
    desc: 'Managing your daily money',
    bgClass: 'bg-emerald-100 text-emerald-600',
  },
  {
    id: 3,
    title: 'Budgets & Goals',
    icon: Target,
    desc: 'Planning for the future',
    bgClass: 'bg-orange-100 text-orange-600',
  },
  {
    id: 4,
    title: 'Account & Sec',
    icon: Shield,
    desc: 'Passwords and data privacy',
    bgClass: 'bg-purple-100 text-purple-600',
  },
]

// Data FAQ
const faqs = [
  {
    id: 1,
    question: 'How do I add a new wallet account?',
    answer:
      'Go to the "My Wallets" page and click the "+ Add Wallet" button in the top right corner. You can choose between Bank, E-Wallet, or Cash, and set your initial balance.',
  },
  {
    id: 2,
    question: 'What happens when my budget reaches 100%?',
    answer:
      'When a budget reaches 100% (or Overbudget), the progress bar will turn red and you will receive an alert notification. However, the app will not block you from adding new transactions.',
  },
  {
    id: 3,
    question: 'Can I change my base currency?',
    answer:
      'Yes! Navigate to Settings > Preferences. You can change your base currency there, and all your existing reports will be visually updated to match the new symbol.',
  },
  {
    id: 4,
    question: 'How do I delete a transaction by mistake?',
    answer:
      'Go to the Transactions page, find the transaction you want to delete, click the three-dot menu on the right side of the transaction card, and select "Delete".',
  },
  {
    id: 5,
    question: 'Is my financial data secure?',
    answer:
      'Absolutely. We use bank-level encryption to secure your data. We never sell your personal financial information to third parties.',
  },
]

// Fungsi Toggle FAQ
const toggleFaq = (id) => {
  // Jika yang diklik sudah aktif, maka tutup (jadi null). Jika belum, buka (set id).
  activeFaq.value = activeFaq.value === id ? null : id
}
</script>

<template>
  <div class="space-y-8 max-w-5xl mx-auto pb-8">
    <!-- 1. HERO SECTION & SEARCH -->
    <div
      class="bg-gradient-to-br from-[#1A1D1F] to-slate-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-xl"
    >
      <!-- Ornamen Dekorasi -->
      <div
        class="absolute top-0 left-0 w-64 h-64 bg-[#6F4EFA]/20 rounded-full blur-3xl -ml-20 -mt-20"
      ></div>

      <div class="relative z-10 max-w-2xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-3">
          Hi Alexandre, how can we help?
        </h2>
        <p class="text-slate-300 mb-8 text-sm md:text-base">
          Search our knowledge base or browse categories below to find your answers.
        </p>

        <!-- Search Bar -->
        <div class="relative flex items-center">
          <Search class="absolute left-4 w-5 h-5 text-slate-400" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search for 'add wallet', 'budget', etc..."
            class="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:bg-white focus:text-[#1A1D1F] focus:placeholder-slate-400 transition-all shadow-sm backdrop-blur-sm"
          />
        </div>
      </div>
    </div>

    <!-- 2. HELP CATEGORIES -->
    <div>
      <h3 class="text-lg font-bold text-[#1A1D1F] mb-4">Browse by Topic</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <button
          v-for="cat in helpCategories"
          :key="cat.id"
          class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-[#6F4EFA]/30 transition-all text-left group flex flex-col items-start gap-3"
        >
          <div :class="['p-3 rounded-xl transition-transform group-hover:scale-110', cat.bgClass]">
            <component :is="cat.icon" class="w-6 h-6 stroke-[2px]" />
          </div>
          <div>
            <h4 class="font-bold text-[#1A1D1F]">{{ cat.title }}</h4>
            <p class="text-xs text-slate-500 mt-1 line-clamp-2">{{ cat.desc }}</p>
          </div>
        </button>
      </div>
    </div>

    <!-- 3. INTERACTIVE FAQ (ACCORDION) -->
    <div class="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm">
      <h3 class="text-xl font-bold text-[#1A1D1F] mb-6">Frequently Asked Questions</h3>

      <div class="space-y-3">
        <div
          v-for="faq in faqs"
          :key="faq.id"
          class="border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300"
          :class="
            activeFaq === faq.id
              ? 'border-[#6F4EFA]/30 bg-slate-50'
              : 'bg-white hover:border-slate-300'
          "
        >
          <!-- Tombol Header -->
          <button
            @click="toggleFaq(faq.id)"
            class="w-full flex items-center justify-between p-5 text-left focus:outline-none"
          >
            <span class="font-bold text-[#1A1D1F] pr-4">{{ faq.question }}</span>
            <div
              class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
              :class="
                activeFaq === faq.id ? 'bg-[#6F4EFA] text-white' : 'bg-slate-100 text-slate-500'
              "
            >
              <ChevronDown
                class="w-5 h-5 transition-transform duration-300"
                :class="activeFaq === faq.id ? 'rotate-180' : 'rotate-0'"
              />
            </div>
          </button>

          <!-- Konten Jawaban (Buka/Tutup) -->
          <div
            v-show="activeFaq === faq.id"
            class="px-5 pb-5 text-sm text-slate-600 leading-relaxed animate-fade-in-down"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>

    <!-- 4. STILL NEED HELP CARD -->
    <div
      class="bg-[#6F4EFA]/5 border border-[#6F4EFA]/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
    >
      <div>
        <h3 class="text-xl font-bold text-[#1A1D1F]">Still need help?</h3>
        <p class="text-sm text-slate-500 mt-1 max-w-md">
          Can't find the answer you're looking for? Our friendly support team is here to assist you.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
        <button
          class="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#6F4EFA] text-white rounded-xl font-bold hover:bg-[#5b3ce0] transition-all shadow-sm"
        >
          <MessageSquare class="w-5 h-5" />
          <span>Live Chat</span>
        </button>
        <button
          class="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 text-[#1A1D1F] rounded-xl font-bold hover:bg-slate-50 transition-all"
        >
          <Mail class="w-5 h-5" />
          <span>Email Us</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Animasi halus saat jawaban FAQ muncul */
.animate-fade-in-down {
  animation: fadeInDown 0.3s ease-out;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
