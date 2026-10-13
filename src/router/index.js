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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
      meta: {
        title: 'Dashboard',
        subtitle: 'Welcome back, here is your financial overview',
        requiresAuth: true,
      },
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: AnalyticsView,
      meta: {
        title: 'Analytics',
        subtitle: 'Detailed overview of your financial situation',
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
  ],
})

// Route Guard / Gatekeeper
router.beforeEach(async (to, from, next) => {
  const {
    data: { session },
  } = await supabase.auth.getSession()
  const isAuthenticated = !!session

  if (to.meta.requiresAuth && !isAuthenticated) {
    // Jika halaman butuh login tapi user belum login -> arahkan ke /login
    next({ name: 'Login' })
  } else if (to.meta.guestOnly && isAuthenticated) {
    // Jika user sudah login tapi mencoba buka /login atau /register -> arahkan ke Dashboard
    next({ name: 'Dashboard' })
  } else {
    next()
  }
})

export default router
