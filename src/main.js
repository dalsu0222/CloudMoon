/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import axios from "axios";
import "../node_modules/flowbite-vue/dist/index.css";

loadFonts();

createApp(App).use(router).use(store).use(vuetify).mount("#app");
