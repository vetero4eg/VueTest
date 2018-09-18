<template>
  <section class="fullimage">
    <div class="container">
        <h1>Slide {{id}}</h1>
        <div class="fullimage__item">
            <img :src="image.link" :alt="image.title">
        </div>
        <div class="fullimage__buttons">
            <!-- Хотела дополнительно реализовать навигационные кнопки по картинкам
            в этом компоненте, но так и не успела до конца реализовать задачу -->
            <!-- Prev Buttons -->
            <button class="fullimage__return btn" @click="backHome()">Return</button>
            <!-- Next Buttons -->
        </div>
    </div>
  </section>
</template>

<script>

  export default {
    name: 'FullImage',
    data() {
        return {
            id: this.$route.params.id,

        };
    },
    computed: {
        image() {
            return this.$store.getters.getSelectImg(this.id);
        },
    },
    methods: {
        backHome() {
            this.$router.push('/');
        },
    },
  };
</script>

<style lang="sass" scoped>
    .fullimage 
        &__item 
            width: 80% 
            margin: 0 auto 
            padding: 10px
            box-shadow: 0 0 5px 1px rgba(0, 0, 0, .5)
            img 
                width: 100% 
                height: auto 
                object-fit: contain
        &__buttons 
            display: flex 
            width: 100% 
            margin: 20px auto
            flex-direction: row 
            flex-wrap: wrap 
            align-item: center 
            justify-content: center

        
</style>