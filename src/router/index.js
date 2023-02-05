import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../components/layouts/MainLayout.vue'
import MarketLayout from '../components/layouts/MarketLayout.vue'

const routes = [
  {
    path: '/',
    name: 'mainLayout',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'SignUpPage',
        component: () => import('../pages/auth/SignUp.vue')
      },
      {
        path: '/login',
        name: 'LoginPage',
        component: () => import('../pages/auth/LoginPage.vue')
      },
      {
        path: '/forgot-password',
        name: 'ForgotPasswordPage',
        component: () => import('../pages/auth/ForgotPassword.vue')
      },
      {
        path: '/reset-password',
        name: 'ResetPasswordPage',
        component: () => import('../pages/auth/ResetPassword.vue')
      },
      {
        path: '/complete-profile',
        name: 'CompleteProfilePage',
        component: () => import('../pages/CompleteProfilePage.vue')
      },
    ]
  },
  {
    path: '/',
    name: 'MarketLayout',
    component: MarketLayout,
    children: [
      {
        path: '/startup',
        name: 'Startup',
        component: () => import('../pages/StartUpPage.vue')
      },
      {
        path: '/market-place',
        name: 'MarketPlace',
        component: () => import('../pages/MarketPlace.vue')
      },
      {
        path: '/my-listing',
        name: 'MyListing',
        component: () => import('../pages/MyListing.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
