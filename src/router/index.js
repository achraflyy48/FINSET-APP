import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from '../supabase'

import DashboardView from '../views/DashboardView.vue'
import AnalyticsView from '@/views/AnalyticsView.vue'
import TransactionsView from '../views/TransactionsView.vue'
import WalletView from '../views/WalletView.vue'
import GoalsView from '../views/GoalsView.vue'
import BudgetView from '../views/BudgetView.vue'
import SettingsView from '../views/SettingsView.vue'
import HelpView from '../views/HelpView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/analytics',
    name: 'analytics',
    component: AnalyticsView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/transactions',
    name: 'transactions',
    component: TransactionsView,
    meta: {
      title: 'Transactions',
      subtitle: 'Manage and track your financial history',
      requiresAuth: true,
    },
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: WalletView,
    meta: {
      title: 'My Wallet',
      subtitle: 'Manage your accounts and digital wallets',
      requiresAuth: true,
    },
  },
  {
    path: '/goals',
    name: 'goals',
    component: GoalsView,
    meta: {
      title: 'Financial Goals',
      subtitle: 'Track and manage your savings targets',
      requiresAuth: true,
    },
  },
  {
    path: '/budget',
    name: 'budget',
    component: BudgetView,
    meta: {
      title: 'Monthly Budget',
      subtitle: 'Control your expenses and set limits',
      requiresAuth: true,
    },
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView,
    meta: {
      title: 'Settings',
      subtitle: 'Manage your account and app preferences',
      requiresAuth: true,
    },
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView,
    meta: {
      title: 'Help Center',
      subtitle: 'Find answers and get support',
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      guestOnly: true,
    },
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      guestOnly: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Route Guard / Gatekeeper
router.beforeEach(async (to, from, next) => {
  const {
    data: { session },
  } = await supabase.auth.getSession()
  const isAuthenticated = !!session

  if (to.meta.requiresAuth && !isAuthenticated) {
    // Jika halaman butuh login tapi user belum login -> arahkan ke /login
    next({ name: 'login' })
  } else if (to.meta.guestOnly && isAuthenticated) {
    // Jika user sudah login tapi mencoba buka /login atau /register -> arahkan ke Dashboard
    next({ name: 'dashboard' })
  } else {
    next()
  }
})

export default router
