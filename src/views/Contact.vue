<template>
  <section class="contact">
    <div class="container">
      <h1>Contact Us</h1>
      <feedback />
    </div>
  </section>
</template>

<script>
import Feedback from '@/components/Feedback.vue';

export default {
  name: 'contact',
  components: {
    Feedback,
  },

};
</script>

<style lang="sass" scoped>

</style>
