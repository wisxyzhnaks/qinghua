import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import http from './axios/api.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import i18n from './lang'

const app = createApp(App)

app.config.globalProperties.$http = http;
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
