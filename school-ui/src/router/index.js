// import { createRouter, createWebHistory } from 'vue-router'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [],
// })

// export default router
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' // This imports HomeView

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',        // The URL path for the home page
      name: 'home',     // A name for the route (useful for navigation)
      component: HomeView // The component to render for this path
    },
    {
      path: '/about',
      name: 'about',
      // This is lazy-loaded for better performance
      component: () => import('../views/AboutView.vue')
    }
    // ... you can add more routes for /news, /contact, etc.
  ]
})

export default router