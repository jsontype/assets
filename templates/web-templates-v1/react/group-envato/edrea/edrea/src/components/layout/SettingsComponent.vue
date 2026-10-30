<template>
  <div class="edrea_tm_settings" :class="toggle ? 'opened' : ''">
    <div class="icon" @click="toggle = !toggle">
      <img class="svg" src="img/setting.svg" alt="" />
      <a class="link" href="#"></a>
    </div>
    <div class="wrapper">
      <span class="title">Unlimited Colors</span>
      <ul class="colors">
        <li v-for="(color, i) in colors" :key="i">
          <a
            href="#"
            :data-color="color"
            :style="{ 'background-color': color }"
            @click="changeColor(color)"
          ></a>
        </li>
      </ul>
      <span class="title">Magic Cursor</span>
      <ul class="cursor">
        <li>
          <a
            class="show"
            :class="magicCursor === 'show' ? 'showme' : ''"
            @click="magicCursorFun('show')"
            href="#"
          ></a>
        </li>
        <li>
          <a
            class="hide"
            :class="magicCursor === 'hide' ? 'showme' : ''"
            href="#"
            @click="magicCursorFun('hide')"
            ><img class="svg" src="img/arrow.svg" alt=""
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: `SettingsComponent`,
  data() {
    return {
      toggle: false,
      magicCursor: true,
      color: "#EB4A4C",
      colors: [
        "#4169e1",
        "#66B95C",
        "#ff9800",
        "#ff5e94",
        "#fa5b0f",
        "#f39977",
        "#9200ee",
        "#00D4BD",
        "#5e9e9f",
        "#EB4A4C",
        "#666d41",
        "#fe0000",
      ],
    };
  },
  methods: {
    changeColor(value) {
      this.color = value;
      document.querySelector("html").style.setProperty("--main-color", value);
      localStorage.setItem("edrea-color", value);
    },
    magicCursorFun(value) {
      this.magicCursor = value;
      localStorage.setItem("edrea-cursor", value);
      const edrea_tm_all_wrap = document.querySelector(".edrea_tm_all_wrap");
      edrea_tm_all_wrap.setAttribute("data-magic-cursor", value);
    },
  },
  mounted() {
    const color = localStorage.getItem("edrea-color"),
      cursor = localStorage.getItem("edrea-cursor");
    if (color) {
      this.changeColor(color);
    } else {
      this.changeColor(this.color);
    }
    if (cursor) {
      this.magicCursorFun(cursor);
    } else {
      this.magicCursorFun(this.magicCursor ? "show" : "hide");
    }
  },
};
</script>

<style scoped>
.colors li {
  margin: 0 2.5px;
}
</style>
