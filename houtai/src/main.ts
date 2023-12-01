
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import http from './axios/api.js'
import * as echarts from 'echarts';

const app = createApp(App)

app.config.globalProperties.$echarts = echarts;
app.config.globalProperties.$http = http;
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
