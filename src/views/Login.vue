<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { useAuth } from '../composables/useAuth'
import { Lock, Mail, ArrowRight, AlertCircle } from 'lucide-vue-next'

const router = useRouter()
const { signIn, loading, errorMessage } = useAuth()

const email = ref('')
const password = ref('')

const handleLogin = async () => {
  try {
    await signIn(email.value, password.value)
    router.push('/') // Berhasil login, arahkan ke Dashboard
  } catch (err) {
    // Error sudah ditangkap di composable
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4">
    <div class="max-w-md w-full bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
      <!-- Logo / Header -->
      <div class="text-center mb-8">
        <div
          class="w-12 h-12 rounded-2xl bg-[#1A1D1F] text-white flex items-center justify-center font-bold text-2xl mx-auto mb-4"
        >
          F
        </div>
        <h1 class="text-2xl font-bold text-[#1A1D1F]">Welcome Back to FinSet</h1>
        <p class="text-slate-500 text-sm mt-1">Please enter your details to sign in</p>
      </div>

      <!-- Alert Error -->
      <div
        v-if="errorMessage"
        class="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 flex items-center gap-3 text-red-600 text-sm"
      >
        <AlertCircle class="w-5 h-5 flex-shrink-0" />
        <span>{{ errorMessage }}</span>
      </div>

      <!-- Form Login -->
      <form @submit.prevent="handleLogin" class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
          <div class="relative">
            <span
              class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400"
            >
              <Mail class="w-5 h-5" />
            </span>
            <input
              type="email"
              v-model="email"
              required
              placeholder="name@example.com"
              class="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#6F4EFA] text-slate-800 text-sm transition-all"
            />
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
          <div class="relative">
            <span
              class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400"
            >
              <Lock class="w-5 h-5" />
            </span>
            <input
              type="password"
              v-model="password"
              required
              placeholder="••••••••"
              class="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#6F4EFA] text-slate-800 text-sm transition-all"
            />
          </div>
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full mt-2 py-3 px-4 bg-[#6F4EFA] hover:bg-[#5b3edb] text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <span v-if="loading">Signing in...</span>
          <span v-else class="flex items-center gap-2">
            Sign In <ArrowRight class="w-4 h-4" />
          </span>
        </button>
      </form>

      <!-- Footer Link ke Register -->
      <p class="text-center text-sm text-slate-500 mt-6">
        Don't have an account?
        <RouterLink to="/register" class="text-[#6F4EFA] font-medium hover:underline"
          >Sign up</RouterLink
        >
      </p>
    </div>
  </div>
</template>
