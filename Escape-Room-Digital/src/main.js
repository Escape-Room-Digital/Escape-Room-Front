import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from 'vue-query';
import vuetify from './plugins/vuetify'
import { createPinia } from 'pinia'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

const pinia = createPinia()

createApp(App)
  .use(VueQueryPlugin)
  .use(pinia)
  .use(router)
  .use(vuetify)
  .mount('#app')
