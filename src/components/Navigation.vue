<template>
  <header class="header" :class="sticky">
    <div class="container">
      <nav id="nav" class="header__nav nav">
        <router-link class="nav__link" to="/">Home</router-link> 
        <router-link class="nav__link" to="/about">About us</router-link> 
        <router-link class="nav__link" to="/contact">Contact us</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    isSticky: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    sticky() {
      return this.isSticky ? 'sticky' : '';
    }
  }
};
</script>

<style lang="sass" scoped>
  .header 
    position: static
    display: block
    width: 100% 
    min-width: 320px
    background: rgba(255, 255, 255, .8)
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, .5)
    transition: all .3s ease
    &.sticky
      position: sticky 
      top: 0
      z-index: 1000
      .nav
        &__link 
          padding: 10px 20px

  .nav 
    display: flex 
    width: 80% 
    margin: 0 auto
    flex-direction: row 
    justify-content: center
    align-item: center 
    &__link 
      padding: 20px
      font-size: 20px
      line-height: 1.2
      font-weight: bold
      color: #2c3e50
      text-transform: uppercase 
      text-decoration: none
      transition: all .3s ease
      &:hover,
      &:focus 
        text-decoration: underline
      &.router-link-exact-active
        color: #42b983

  @media screen and (max-width: 600px)
    .header 
      padding: 15px 0
      background: #fff
    .nav
      &__link 
        font-size: 16px
        padding: 0 15px

  @media screen and (max-width: 425px)
    .nav
      flex-direction: column
      &__link 
        padding: 10px 0
</style>
