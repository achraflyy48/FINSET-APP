<script setup>
import { Search, Bell } from 'lucide-vue-next'
//DATA STATIS / DATA SEMENTARA
const userProfile = {
  name: 'Ela Adinda Safira',
  email: 'elaadindasafira@gmail.com',
  avatar: 'https://i.pravatar.cc/150?img=47', //FOTO PROFIL SEMENTARA
}
</script>

<template>
  <header class="flex items-center justify-between pt-8 px-8 pb-4 shrink-0">
    <div>
      <h1 class="text-[28px] font-bold text-[#1A1D1F] tracking-tight leading-none mb-1">
        Analytics
      </h1>
      <p class="text-sm text-slate-500 font-medium">
        Detailed overview of your financial situation
      </p>
    </div>

    <div class="flex items-center gap-5">
      <button
        class="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#1A1D1F] hover:bg-slate-50 transition-all shadow-sm"
      >
        <Search class="w-4 h-4 stroke-[2.5px]" />
      </button>

      <button
        class="relative w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#1A1D1F] hover:bg-slate-50 transition-all shadow-sm"
      >
        <Bell class="w-4 h-4 stroke-[2.5px]" />
        <span
          class="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white box-content"
        ></span>
      </button>

      <div class="flex items-center gap-3 pl-2 ml-2 cursor-pointer group">
        <img
          :src="userProfile.avatar"
          alt="User Avatar"
          class="w-10 h-10 rounded-full object-cover border border-slate-100 group-hover:ring-2 ring-[#6F4EFA] transition-all"
        />
        <div class="hidden sm:block text-left">
          <p class="text-sm font-bold text-[#1A1D1F] leading-none mb-1">{{ userProfile.name }}</p>
          <p class="text-xs text-slate-500 leading-none">{{ userProfile.email }}</p>
        </div>
      </div>
    </div>
  </header>
</template>
