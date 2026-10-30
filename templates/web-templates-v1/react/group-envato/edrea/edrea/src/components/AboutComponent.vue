<template>
  <div class="edrea_tm_section" id="about">
    <div class="section_inner">
      <div class="edrea_tm_about">
        <div class="left">
          <div class="image">
            <img src="img/thumbs/1-1.jpg" alt="" />
            <div class="main" data-img-url="img/about/1.jpg"></div>
          </div>
        </div>
        <div class="right">
          <div class="short">
            <h3 class="name">David <span class="coloring">Parker</span></h3>
            <h3 class="job">
              <AnimationText />
            </h3>
          </div>
          <div class="text">
            <p>
              My name is <span>David Parker.</span> I am a graphic designer, and
              I'm very passionate and dedicated to my work. With 20 years
              experience as a professional a graphic designer, I have acquired
              the skills and knowledge.
            </p>
          </div>
          <div class="edrea_tm_button" id="aboutPopup">
            <a href="#">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnimationText from "./AnimationText.vue";
export default {
  name: `AboutComponent`,
  data() {
    return {
      open: false,
    };
  },
  components: {
    AnimationText,
  },
};
</script>

<style scoped>
.edrea_tm_modalbox {
  top: -90px;
}
</style>
