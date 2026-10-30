<template>
  <span class="cd-headline rotate-1">
    <span class="blc">Creative </span>
    <span class="cd-words-wrapper">
      <b
        :class="text == i ? 'is-visible' : 'is-hidden'"
        v-for="(skill, i) in skills"
        :key="i"
      >
        {{ skill }}</b
      >
    </span>
  </span>
</template>

<script>
export default {
  name: `AnimationText`,
  data() {
    return {
      skills: ["Designer", "Developer", "Freelancer"],
      text: 0,
    };
  },
  mounted() {
    const interval = setInterval(() => {
      this.text = this.text < this.skills.length - 1 ? this.text + 1 : 0;
    }, 3000);
    return () => clearInterval(interval);
  },
};
</script>
