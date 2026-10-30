<template>
  <div id="preloader">
    <div class="loader_line"></div>
  </div>
</template>

<script>
import { edreaPreLoader } from "@/utilits";

export default {
  name: `PreloaderComponent`,
  mounted() {
    edreaPreLoader();
  },
};
</script>
