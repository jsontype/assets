<template>
  <ul class="transition_link">
    <li :class="navFuntions.activeNavCls('home')">
      <a href="#home" @click="navFuntions.activeSection('home')">Home</a>
    </li>
    <li :class="navFuntions.activeNavCls('about')">
      <a href="#about" @click="navFuntions.activeSection('about')">About</a>
    </li>
    <li :class="navFuntions.activeNavCls('portfolio')">
      <a href="#portfolio" @click="navFuntions.activeSection('portfolio')"
        >Portfolio</a
      >
    </li>
    <li :class="navFuntions.activeNavCls('news')">
      <a href="#news" @click="navFuntions.activeSection('news')">News</a>
    </li>
    <li :class="navFuntions.activeNavCls('contact')">
      <a href="#contact" @click="navFuntions.activeSection('contact')"
        >Contact</a
      >
    </li>
  </ul>
</template>

<script>
import { navFuntions } from "@/navFuntions";
export default {
  name: `Menu`,
  data() {
    return {
      navFuntions,
    };
  },
};
</script>
