import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin  from 'vue3-google-login'
import 'sweetalert2/dist/sweetalert2.min.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(vue3GoogleLogin, {
    clientId: '425645206671-ht5ut2u05djfr1b9eg4ca8jc024fqv5n.apps.googleusercontent.com'
  })

app.use(createPinia())
app.use(router)

app.mount('#app')
