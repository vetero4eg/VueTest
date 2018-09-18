import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    feedback: {
      name: 'Olga',
      phone: '79064218904',
      message: 'Write Us',
    },
    /* предполагается, что тем или иным способом для слайдера приходит подобный массив */
    images: [
      {
        id: 1,
        link: '/img/01.png',
        title: 'title for img',
      }, {
        id: 2,
        link: '/img/02.jpg',
        title: 'title for img',
      }, {
        id: 3,
        link: '/img/03.jpg',
        title: 'title for img',
      }, {
        id: 4,
        link: '/img/04.png',
        title: 'title for img',
      }, {
        id: 5,
        link: '/img/05.jpg',
        title: 'title for img',
      }, {
        id: 6,
        link: '/img/06.jpg',
        title: 'title for img',
      }, {
        id: 7,
        link: '/img/07.jpg',
        title: 'title for img',
      }, {
        id: 8,
        link: '/img/08.jpg',
        title: 'title for img',
      }, {
        id: 9,
        link: '/img/09.jpg',
        title: 'title for img',
      }, {
        id: 10,
        link: '/img/10.jpg',
        title: 'title for img',
      }, {
        id: 11,
        link: '/img/11.jpg',
        title: 'title for img',
      }, {
        id: 12,
        link: '/img/12.jpg',
        title: 'title for img',
      },
    ],
  },
  getters: {
    getFeedbackName(state) {
      return state.feedback.name;
    },
    getFeedbackPhone(state) {
      return state.feedback.phone;
    },
    getFeedbackMessage(state) {
      return state.feedback.message;
    },
    getSelectImg(state) {
      return id => state.images.find(image => image.id === Number(id));
    },
  },
  mutations: {
    SET_FEEDBACK(state, data) {
      state.feedback.name = data.name;
      state.feedback.phone = data.phone;
      state.feedback.message = data.message;
    },
  },
});
