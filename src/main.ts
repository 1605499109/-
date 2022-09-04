import { createApp } from 'vue'
import  {router} from './router/index'
import App from './App.vue'
import Markdown from 'vue3-markdown-it';
import 'highlight.js/styles/monokai.css'
// import 'highlight.js/styles/monokai.css'
createApp(App).use(router).use(Markdown as any).mount('#app')
