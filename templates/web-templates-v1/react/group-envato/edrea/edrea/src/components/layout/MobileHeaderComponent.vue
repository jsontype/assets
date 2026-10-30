<template>
  <div class="edrea_tm_topbar">
    <div class="topbar_inner">
      <div class="logo">
        <a href="#" @click="navFuntions.activeSection('home')"
          ><img src="img/logo/logo.png" alt=""
        /></a>
      </div>
      <div class="trigger">
        <div
          class="hamburger hamburger--slider"
          @click="navFuntions.toggleMobileMenu()"
        >
          <div class="hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="edrea_tm_mobile_menu"
    :class="navFuntions.mobileToggle ? 'opened' : ''"
  >
    <div class="inner">
      <div class="menu_list">
        <Menu />
      </div>
    </div>
  </div>
</template>

<script>
import { navFuntions } from "@/navFuntions";
import Menu from "./Menu.vue";
export default {
  name: `MobileHeaderComponent`,
  data() {
    return {
      navFuntions,
    };
  },
  components: { Menu },
};
</script>

<style scoped>
.edrea_tm_topbar,
.edrea_tm_mobile_menu {
  display: none;
}
@media (max-width: 1040px) {
  .edrea_tm_topbar,
  .edrea_tm_mobile_menu {
    display: block;
  }
}
</style>
