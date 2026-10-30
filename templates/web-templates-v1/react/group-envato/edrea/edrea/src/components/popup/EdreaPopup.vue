<template>
  <div class="edrea_tm_modalbox" :class="open ? 'opened' : ''">
    <div class="box_inner">
      <div class="close">
        <a href="#" @click="close"><i class="icon-cancel"></i></a>
      </div>
      <div
        class="description_wrap"
        v-html="element ? element.outerHTML : ''"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: `EdreaPopup`,
  data() {
    return {
      element: null,
      open: false,
    };
  },
  mounted() {
    let edrea_tm_hidden_content = document.querySelectorAll(
      ".edrea_tm_hidden_content"
    );
    edrea_tm_hidden_content.forEach((element) => {
      let parent = element.parentElement,
        a = parent.getElementsByTagName("a")[0];
      document.querySelectorAll(`.details a`).forEach((element_) => {
        element_.addEventListener("click", () => {
          let popup_details = element_
            .closest(".list_inner")
            .getElementsByClassName("edrea_tm_hidden_content")[0]
            .getElementsByTagName("div")[0];
          this.element = popup_details;
          this.open = true;
        });
      });
      a.addEventListener("click", () => {
        let popup_details = element.getElementsByTagName("div")[0];
        this.element = popup_details;
        this.open = true;
      });
    });
  },
  methods: {
    close() {
      this.open = false;
    },
  },
};
</script>
