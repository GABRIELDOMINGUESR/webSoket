import { createApp } from 'vue';
import App from './App.vue';
import ChatComponent from './components/ChatComponent.vue';

const app = createApp(App);
app.component('ChatComponent', ChatComponent); 
app.mount('#app');
