<script>
import Navbar from './Navbar.vue'
import Hero from './Hero.vue'
import Home from '../Views/home.vue'
import Information from './Informations.vue'
import Story from '../Views/Story.vue'
import Gallery from './Gallerycard.vue'
import Presence from './FormPresence.vue'
import Gift from './Gifts.vue'
import Footer from './footer.vue'
import { RouterView } from 'vue-router'
import { mapWritableState } from 'pinia'
import { useInvitationStore } from '../stores/counter'

export default {
    components : { RouterView, Navbar, Hero, Home, Information, Story, Gallery, Presence, Gift, Footer },
    computed: {
        ...mapWritableState(useInvitationStore, ['isLoggedIn'])
    }
}
</script>

<template>
     <Hero/>
     <div v-if="isLoggedIn">
         <Navbar/>
         <Home/>
         <Information/>
         <Story/>
         <Gallery/> 
         <Presence/>
         <Gift/> 
         <Footer/>  
     </div>
     <RouterView/>
</template>