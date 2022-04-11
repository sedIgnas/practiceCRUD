require('./bootstrap');

import { createApp } from 'vue';
import laravelVuePagination from 'laravel-vue-pagination';
import router from './routes/index';
import VueSweetalert2 from 'vue-sweetalert2';

const app = createApp({})
app.use(router)
app.use(VueSweetalert2)
app.component('Pagination', laravelVuePagination)
app.mount('#app')