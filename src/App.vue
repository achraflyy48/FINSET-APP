<script setup>
import { RouterView } from 'vue-router'
// Catatan Senior: Nanti di Fase 2, kita akan mengimpor komponen SidebarNav di sini
</script>

<template>
  <div class="flex h-screen w-screen overflow-hidden bg-[#F8F9FA] text-[#1A1D1F]">
    <aside
      class="w-64 h-full bg-white border-r border-slate-100 flex flex-col justify-between p-6 shrink-0"
    >
      <div>
        <div class="font-bold text-xl tracking-tight mb-8 text-[#6F4EFA]">Finset</div>
        <p class="text-xs text-slate-400 font-medium uppercase tracking-wider mb-4">Menu</p>
        <div
          class="text-sm text-slate-500 bg-slate-50 p-3 rounded-xl border border-dashed border-slate-200"
        >
          [Sidebar Links Placeholder]
        </div>
      </div>

      <div class="text-xs text-slate-400 text-center bg-slate-50 p-2 rounded-lg">Theme Toggle</div>
    </aside>

    <div class="flex-1 h-full flex flex-col overflow-hidden">
      <header
        class="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 shrink-0"
      >
        <div class="text-sm text-slate-400">[Header: Breadcrumb / Title]</div>
        <div class="text-sm text-slate-400">[Header: User Profile]</div>
      </header>

      <main class="flex-1 overflow-y-auto p-8">
        <RouterView />
      </main>
    </div>
  </div>
</template>
