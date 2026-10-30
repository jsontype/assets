import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

createApp(App).use(router).mount("#app");
