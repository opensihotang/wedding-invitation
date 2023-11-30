import { createRouter, createWebHistory } from 'vue-router'
import Hero from '../components/Hero.vue'
import Home from '../views/Home.vue'
import Information from '../components/Informations.vue'
import Story from '../views/Story.vue'
import Gallery from '../components/GalleryCard.vue'
import Presence from '../components/FormPresence.vue'
import Gift from '../components/Gifts.vue'
import Layout from '../components/Layout.vue'
import Navbar from '../components/Navbar.vue'
// import Footer from './footer.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // if (to.hash) {
    //   return {
    //     el: to.hash,
    //     behavior: 'smooth',
    //   };
    // } else if (savedPosition) {
    //   return savedPosition;
    // } else {
    //   return { top: 0 };
    // }
  },
  routes: [
      {
        path: '/',
        name: 'layout',
        component: Layout
      },
      {
        path: '/home',
        name: 'home',
        component: Navbar,
      },
      {
        path:'/information',
        name: 'information',
        component : Information
      },
      {
        path:'/story',
        name: 'story',
        component : Story
      },
      {
        path:'/gallery',
        name: 'gallery',
        component : Gallery
      },
      {
        path:'/presence',
        name: 'presence',
        component : Presence
      },
      {
        path:'/gift',
        name: 'gift',
        component : Gift
      }
    ]
})

export default router
