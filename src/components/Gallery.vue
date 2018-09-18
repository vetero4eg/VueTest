<template>
    <div class="gallery">
        <h3>Our Gallery</h3>
        <div class="sliderwrap">
            <carousel class="slider" :perPage='1' :perPageCustom='[[768, 2], [1024, 3]]' :autoplay='false'>
                <slide class="slider__item" v-for="img in images" :key="img.id">
                    <a class="slider__link" :href="`/image/${img.id}`">
                        <img class="slider__img" :src="img.link" :alt="img.title">
                    </a>
                </slide>
            </carousel>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'Gallery',
  props: {
    count: {
      type: Number,
      default: 12, // ограничиваем количество "прилетевших" фото
    },

  },
  computed: {
    images() {
      return this.$store.state.images.slice(0, this.count);
    },
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style lang='sass' scoped>
    .slider
        width: 100%
        padding: 30px 0
        &__item
            display: block
            width: 30%
            padding: 15px
        &__img
            display: block
            width: 100%
            height: auto
            object-fit: contain
            transition: all .3s ease
            &:hover,
            &:focus
                transform: scale(1.1, 1.1)
                box-shadow: 0 0 5px 1px rgba(0, 0, 0, .5)

    @media screen and (max-width: 768px)
        .slider
            &__item
                width: 45%
    @media screen and (max-width: 425px)
        .slider
            &__item
                width: 100%

</style>
