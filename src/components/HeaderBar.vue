<script setup>
import { Search, Bell, Menu } from 'lucide-vue-next'

const emit = defineEmits(['toggle-sidebar'])

const userProfile = {
  name: 'Ela Adinda Safira',
  email: 'elaadindasafira@gmail.com',
  avatar: 'https://i.pravatar.cc/150?img=47', //FOTO PROFIL SEMENTARA
}
</script>

<template>
  <header class="flex items-center justify-between pt-6 md:pt-8 px-4 md:px-8 pb-4 shrink-0">
    <div class="flex items-center gap-4">
      <button
        @click="emit('toggle-sidebar')"
        class="md:hidden p-2 -ml-2 rounded-xl text-slate-500 hover:bg-slate-50 transition-all"
      >
        <Menu class="w-6 h-6 stroke-[2px]" />
      </button>

      <div>
        <h1
          class="text-xl md:text-[28px] font-bold text-[#1A1D1F] tracking-light leading-none mb-1"
        >
          Analytics
        </h1>
        <p class="hidden md:block text-sm text-slate-500 font-medium">
          Detailed overview of your financial situation
        </p>
      </div>
    </div>

    <div class="flex items-center gap-3 md:gap-5">
      <button
        class="w-9 h-9 md:w-10 md:h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#1A1D1F] hover:bg-slate-50 transition-all shadow-sm"
      >
        <Search class="w-4 h-4 stroke-[2.5px]" />
      </button>

      <button
        class="relative w-9 h-9 md:w-10 md:h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#1A1D1F] hover:bg-slate-50 transition-all shadow-sm"
      >
        <Bell class="w-4 h-4 stroke-[2.5px]" />
        <span
          class="absolute top-2 right-2 md:top-2.5 md:right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white box-content"
        ></span>
      </button>

      <div class="flex items-center gap-3 pl-1 md:pl-2 ml-1 md:ml-2 cursor-pointer group">
        <img
          :src="userProfile.avatar"
          alt="User Avatar"
          class="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover border border-slate-100 group-hover:ring-2 ring-[#6F4EFA] transition-all"
        />
        <div class="hidden sm:block text-left">
          <p class="text-sm font-bold text-[#1A1D1F] leading-none mb-1">{{ userProfile.name }}</p>
          <p class="text-xs text-slate-500 leading-none">{{ userProfile.email }}</p>
        </div>
      </div>
    </div>
  </header>
</template>
