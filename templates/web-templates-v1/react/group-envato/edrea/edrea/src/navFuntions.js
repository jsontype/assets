import { reactive } from "vue";
import { edreaSectionActive } from "./utilits";

export const navFuntions = reactive({
  active: "home",
  mobileToggle: false,
  activeSection(value) {
    this.active = value;
    this.mobileToggle = false;
    edreaSectionActive(value);
  },
  activeNavCls(value) {
    return this.active == value ? "active" : "";
  },
  toggleMobileMenu() {
    this.mobileToggle = !this.mobileToggle;
  },
});
