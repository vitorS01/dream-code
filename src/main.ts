import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import "prismjs";
import "prismjs/themes/prism.css";
import App from "./App.vue";
import { useUserStore } from "./stores/userStore";
import "katex/dist/katex.min.css";

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

//TODO: remember to remove mock authentication
const userStore = useUserStore();
userStore.login({
  email: "test@example.com",
  id: "123",
  username: "Thiago Nepomuceno",
});

import router from "./router";
app.use(router);
app.mount("#app");
