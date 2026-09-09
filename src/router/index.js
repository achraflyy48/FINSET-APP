import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import AnalyticsView from '@/views/AnalyticsView.vue'
import TransactionsView from '../views/TransactionsView.vue'
import WalletView from '../views/WalletView.vue'
import GoalsView from '../views/GoalsView.vue'
import BudgetView from '../views/BudgetView.vue'
import SettingsView from '../views/SettingsView.vue'

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
      },
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: AnalyticsView,
      meta: {
        title: 'Analytics',
        subtitle: 'Detailed overview of your financial situation',
      },
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: TransactionsView,
      meta: {
        title: 'Transactions',
        subtitle: 'Manage and track your financial history',
      },
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: WalletView,
      meta: {
        title: 'My Wallet',
        subtitle: 'Manage your accounts and digital wallets',
      },
    },
    {
      path: '/goals',
      name: 'goals',
      component: GoalsView,
      meta: {
        title: 'Financial Goals',
        subtitle: 'Track and manage your savings targets',
      },
    },
    {
      path: '/budget',
      name: 'budget',
      component: BudgetView,
      meta: {
        title: 'Monthly Budget',
        subtitle: 'Control your expenses and set limits',
      },
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
      meta: {
        title: 'Settings',
        subtitle: 'Manage your account and app preferences',
      },
    },
  ],
})

export default router
