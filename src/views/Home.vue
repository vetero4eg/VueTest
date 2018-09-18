<template>
  <section class="home">
    <div class="container">
      <h1>Home Page</h1>
      <gallery />
    </div>
  </section>
</template>

<script>
import Gallery from '@/components/Gallery.vue';

export default {
  name: 'home',
  components: {
    Gallery
  },
};
</script>


<style lang="sass" scoped>
  .home 
    padding: 100px 0
</style>