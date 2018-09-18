<template>
    <div class="container">
        <h3>Send Your Message Here</h3>
        <form action="" class="feedback" @submit.prevent="submit">
            <div class="feedback__field" :class="{'error': $v.name.$invalid }">
                <label for="name" class="feedback__label">Name</label>
                <input type="text" id="name" class="feedback__input" placeholder="No less 3 simbols" v-model.trim="name">
                <div class="error" v-if="!$v.name.required">Field is required</div>
                <div class="error" v-if="!$v.name.minLength">
                  Name must have at equal or more {{$v.name.$params.minLength.min}} letters.
                </div>
            </div>
            <div class="feedback__field">
                <label for="phone" class="feedback__label">Phone</label>
                <masked-input id="phone" class="feedback__input" v-model="phone" mask="\+\7 (111) 111-11-11" placeholder="Mobile phone's number" type="tel"></masked-input>
            </div>
            <div class="feedback__field" :class="{'error': $v.message.$error}">
                <label for="message">Your Message</label>
                <textarea class="feedback__message" id="message" rows="5" placeholder="No more 250 simbols" v-model.trim="$v.message.$model"></textarea>
                <div class="error" v-if="!$v.message.maxLength">Message must have at least {{$v.message.$params.maxLength.max}} letters.</div>
            </div>
            <button type="submit" class="feedback__btn btn" :disabled="submitStatus === 'PENDING'">Send mail</button>
            <p class="error" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
            <p v-if="submitStatus === 'PENDING'">Sending...</p>
        </form>
        <div class="modal" v-if="submitStatus === 'OK'" @click="isHide = !isHide" :class="{hide: isHide}">
            <p class="modal__text">{{ name }}!</p>
            <p class="modal__text">{{ resp }}</p>
            <p class="modal__text close">Click for close this window</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import MaskedInput from 'vue-masked-input';
import { minLength, maxLength, required } from 'vuelidate/lib/validators';

export default {
  name: 'Feedback',
  data() {
    return {
      name: this.$store.getters.getFeedbackName,
      phone: '',
      message: '',
      submitStatus: null,
      resp: '',
      isHide: true,
    };
  },
  methods: {
    submit() {
      console.log('submit!');
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR';
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING';
        this.$store.commit('SET_FEEDBACK', this.feedbackData);
        setTimeout(() => {
          axios
            .get('info.json')
            .then(response => response.data.message)
            .then(response => this.resp = response)
            .catch(error => console.log(error));
          this.submitStatus = 'OK';
          this.isHide = false;
        }, 500);
      }
    },
  },
  validations: {
    name: {
      required,
      minLength: minLength(3),
    },
    phone: {
      required,
      minLength: minLength(18), // позволила себе изменить условия валидации в форме ради юзабилити
      maxLength: maxLength(18),
    },
    message: {
      maxLength: maxLength(250),
    },

  },
  computed: {
    feedbackData() {
      return {
        name: this.name,
        phone: this.phone.replace(/[\s-_()+]/g, ''), // поэтому тут очищаем номер от лишних символов
        message: this.message,
      };
    },
  },
  components: {
    MaskedInput,
  },
};

</script>

<style lang="sass" scoped>
    .feedback
        display: flex
        width: 100%
        max-width: 600px
        min-width: 250px
        min-height: 400px
        margin: 30px auto
        padding: 25px 30px
        flex-direction: column
        justify-content: space-between
        align-items: center
        box-shadow: 0 0 5px 1px rgba(0, 0, 0, .5)
        &__field
            width: 100%
            display: flex
            flex-direction: column
            justify-content: space-between
            align-items: center
            &.error
                color: red
                input,
                textarea
                    box-shadow: 0 0 7px 2px rgba(200, 0, 0, .5)
        &__btn
            width: 80%
            max-width: 400px
            min-width: 180px
            margin: 30px auto 0
    .modal
        display: flex
        flex-direction: column
        justify-content: center
        align-items: senter
        position: fixed
        top: 50%
        left: 50%
        opasity: 1
        visibility: visible
        width: 80%
        max-width: 400px
        padding: 50px
        background: azure
        border-radius: 3px
        box-shadow: 0 0 5px 1px rgba(0, 0, 0, .5)
        transform: translate(-50%, -50%)
        transition: all .3s ease
        cursor: pointer
        z-index: 5000
        &.hide
            display: none
            opasity: 0
            visibility: hidden
        &__text
            font-size: 18px
            font-weight: bold
            &.close
                font-weight: normal
                color: #42b983
</style>
