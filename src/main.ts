import '@/styles/global.css'
import '@/styles/nprogress.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './routes'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
