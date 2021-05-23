import { createApp } from "vue";
import App from "./App.vue";
import store from "./Store.vue";
import router from "./router"

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project


createApp(App)
  .use(store).use(router)
  .mount("#app");
