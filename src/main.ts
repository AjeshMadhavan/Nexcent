import { createApp } from "vue";
import { Vue3Marquee } from "vue3-marquee";

import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");

App.use(Vue3Marquee);