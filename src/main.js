import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import BootstrapVue3 from "bootstrap-vue-3";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import BrainPlugin from "@/plugins/BrainPlugin";
import CorePlugin from "./plugins/core-plugin";
import SolidPlugin from "./plugins/solid-plugin";

import SolidDataPlugin from "./plugins/solid-data-plugin";

createApp(App)
  .use(store)
  .use(router)
  .use(BootstrapVue3)
  .use(CorePlugin, { store })
  .use(SolidPlugin, { store })
  .use(SolidDataPlugin, { store })
  .use(BrainPlugin, {
    store,
    /* optional options */
  })
  .mount("#app");
