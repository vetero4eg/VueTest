<template>
  <div id="app">
    <navigation :isSticky="sticky"/>
    <main>
      <router-view/>
      <div style="min-height: 800px;"></div>
    </main>
  </div>
</template>

<script>
import Navigation from './components/Navigation';

export default {
  name: 'app',
  data() {
    return {
      sticky: false,
      scrollTop: 5,
    };
  },
  methods: {
    handlerScroll() {
      this.sticky = window.scrollY > this.scrollTop;
    },
  },
  created() {
    window.addEventListener('scroll', this.handlerScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handlerScroll);
  },
  components: {
    Navigation,
  },
};
</script>

<style lang="sass">
/*общие стили. обычно выношу в отдельный файл,
  в который также подключаю миксины и переменные */
*, *:before, *:after
  box-sizing: border-box

body
  margin: 0

section
  padding: 100px 0

h3
  margin: 50px auto
  text-transform: uppercase
  color: #42b983

input,
textarea
  display: block
  width: 100%
  margin: 5px auto 15px
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  font-size: 18px
  border: 1px solid grey
  border-radius: 3px
  background: #fff

input
  height: 45px
  padding: 0 15px
  line-height: 45px

textarea
  height: auto
  padding: 15px
  line-height: 26px

label
  display: inline-block
  padding: 15px 0 5px
  font-size: 14px
  font-weight: bold
  text-transform: uppercase
/* стили для плейсхолдеров пишу вручную, потому что автопрефиксер
   не всегда решает задачу. */
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder
  color: #42b983
  font-size: 18px
  line-height: 45px
input::-moz-placeholder,
textarea::-moz-placeholder
  color: #42b983
  font-size: 18px
  line-height: 45px
input:-moz-placeholder,
textarea:-moz-placeholder
  color: #42b983
  font-size: 18px
  line-height: 45px
input:-ms-input-placeholder,
textarea:-ms-input-placeholder
  color: #42b983
  font-size: 18px
  line-height: 45px

input[type="text"]:focus::-webkit-input-placeholder,
input[type="tel"]:focus::-webkit-input-placeholder,
textarea:focus::-webkit-input-placeholder
  opacity: 0
  -webkit-transition: opacity 0.5s ease
  -o-transition:	    opacity 0.5s ease
  transition:	        opacity 0.5s ease

input[type="text"]:focus::-moz-placeholder,
input[type="tel"]:focus::-moz-placeholder,
textarea:focus::-moz-placeholder
  opacity: 0
  -webkit-transition: opacity 0.5s ease
  -o-transition:	    opacity 0.5s ease
  transition:	        opacity 0.5s ease

input[type="text"]:focus:-moz-placeholder,
input[type="tel"]:focus:-moz-placeholder,
textarea:focus:-moz-placeholder
  opacity: 0
  -webkit-transition: opacity 0.5s ease
  -o-transition:	    opacity 0.5s ease
  transition:	        opacity 0.5s ease

input[type="text"]:focus:-ms-input-placeholder,
input[type="tel"]:focus:-ms-input-placeholder,
textarea:focus:-ms-input-placeholder
  opacity: 0
  -webkit-transition: opacity 0.5s ease
  -o-transition:	    opacity 0.5s ease
  transition:	        opacity 0.5s ease


#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

.container
  position: relative
  display: block
  width: 100%
  max-width: 1200px
  margin: 0 auto
  padding: 0 15px

.btn
  display: block
  width: 100%
  max-width: 200px
  height: 50px
  line-height: 50px
  font-size: 16px
  color: #2c3e50
  font-weight: bold
  text-transform: uppercase
  text-decoration: none
  border-radius: 3px
  border: 2px solid transparent
  background: #42b983
  cursor: pointer
  transition: all .3s ease
  &:hover,
  &:focus
    background: transparent
    border: 2px solid #42b983
  &:disabled
    pointer-events: none
    background: gray

.error
  color: red

</style>
