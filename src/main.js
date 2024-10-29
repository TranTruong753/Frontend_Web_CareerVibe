import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/reset.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/css/footer.css';
import './assets/css/style.css';
import './assets/css/mycss.css';




const app = createApp(App)

app.use(router)

app.use(Antd).mount('#app');
