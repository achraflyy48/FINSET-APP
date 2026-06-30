import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import AnalyticsView from '@/views/AnalyticsView.vue'
import TransactionsView from '../views/TransactionsView.vue'

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
  ],
})

export default router
