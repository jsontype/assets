<template>
  <div class="mouse-cursor cursor-outer"></div>
  <div class="mouse-cursor cursor-inner"></div>
</template>

<script>
import { edreaCursor } from "@/utilits";

export default {
  name: `CursorComponent`,
  mounted() {
    edreaCursor();
  },
};
</script>
