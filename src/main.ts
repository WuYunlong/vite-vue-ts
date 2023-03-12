import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Arco from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App);
app.use(Arco);
app.mount('#app');
