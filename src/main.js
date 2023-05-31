import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from "axios";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// axios.defaults.baseURL =
//     import.meta.env.VUE_APP_BASE_URL
axios.defaults.baseURL = 'http://127.0.0.1:8000/'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Toast)

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"