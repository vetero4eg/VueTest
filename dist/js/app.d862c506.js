(function(e){function t(t){for(var i,r,o=t[0],l=t[1],c=t[2],m=0,d=[];m<o.length;m++)r=o[m],n[r]&&d.push(n[r][0]),n[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=a[0]))}return e}var i={},n={app:0},s=[];function r(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=i,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(a,i,function(t){return e[t]}.bind(null,i));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/VueTest/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"00e0":function(e,t,a){},1459:function(e,t,a){"use strict";var i=a("b491"),n=a.n(i);n.a},2239:function(e,t,a){"use strict";var i=a("9a8e"),n=a.n(i);n.a},"3b38":function(e,t,a){"use strict";var i=a("a4ba"),n=a.n(i);n.a},"4f7b":function(e,t,a){"use strict";var i=a("fa8b"),n=a.n(i);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var i=a("2b0e"),n=a("1dce"),s=a.n(n),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("navigation",{attrs:{isSticky:e.sticky}}),a("main",[a("router-view"),a("div",{staticStyle:{"min-height":"800px"}})],1)],1)},o=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header",class:e.sticky},[a("div",{staticClass:"container"},[a("nav",{staticClass:"header__nav nav",attrs:{id:"nav"}},[a("router-link",{staticClass:"nav__link",attrs:{to:"/"}},[e._v("Home")]),a("router-link",{staticClass:"nav__link",attrs:{to:"/about"}},[e._v("About us")]),a("router-link",{staticClass:"nav__link",attrs:{to:"/contact"}},[e._v("Contact us")])],1)])])},c=[],u={name:"Navigation",props:{isSticky:{type:Boolean,default:!1}},computed:{sticky:function(){return this.isSticky?"sticky":""}}},m=u,d=(a("cee8"),a("2877")),f=Object(d["a"])(m,l,c,!1,null,"71cf4fe0",null);f.options.__file="Navigation.vue";var p=f.exports,v={name:"app",data:function(){return{sticky:!1,scrollTop:5}},methods:{handlerScroll:function(){this.sticky=window.scrollY>this.scrollTop}},created:function(){window.addEventListener("scroll",this.handlerScroll)},destroyed:function(){window.removeEventListener("scroll",this.handlerScroll)},components:{Navigation:p}},g=v,_=(a("cf25"),Object(d["a"])(g,r,o,!1,null,null,null));_.options.__file="App.vue";var b=_.exports,h=a("8c4f"),k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"home"},[a("div",{staticClass:"container"},[a("h1",[e._v("Home Page")]),a("gallery")],1)])},C=[],$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"gallery"},[a("h3",[e._v("Our Gallery")]),a("div",{staticClass:"sliderwrap"},[a("carousel",{staticClass:"slider",attrs:{perPage:1,perPageCustom:[[768,2],[1024,3]],autoplay:!1}},e._l(e.images,function(e){return a("slide",{key:e.id,staticClass:"slider__item"},[a("a",{staticClass:"slider__link",attrs:{href:"/image/"+e.id}},[a("img",{staticClass:"slider__img",attrs:{src:e.link,alt:e.title}})])])}))],1)])},y=[],j=(a("c5f6"),a("0a63")),S={name:"Gallery",props:{count:{type:Number,default:12}},computed:{images:function(){return this.$store.state.images.slice(0,this.count)}},components:{Carousel:j["Carousel"],Slide:j["Slide"]}},x=S,O=(a("3b38"),Object(d["a"])(x,$,y,!1,null,"5ea4c8b6",null));O.options.__file="Gallery.vue";var w=O.exports,E={name:"home",components:{Gallery:w}},N=E,P=(a("a2a9"),Object(d["a"])(N,k,C,!1,null,"2e159440",null));P.options.__file="Home.vue";var L=P.exports,F=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},H=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"about"},[a("div",{staticClass:"container"},[a("h1",[e._v("About Us")])])])}],M={name:"about"},T=M,I=(a("2239"),Object(d["a"])(T,F,H,!1,null,"77bd2655",null));I.options.__file="About.vue";var D=I.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"contact"},[a("div",{staticClass:"container"},[a("h1",[e._v("Contact Us")]),a("feedback")],1)])},G=[],R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h3",[e._v("Send Your Message Here")]),a("form",{staticClass:"feedback",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("div",{staticClass:"feedback__field",class:{error:e.$v.name.$invalid}},[a("label",{staticClass:"feedback__label",attrs:{for:"name"}},[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.name,expression:"name",modifiers:{trim:!0}}],staticClass:"feedback__input",attrs:{type:"text",id:"name",placeholder:"No less 3 simbols"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),e.$v.name.required?e._e():a("div",{staticClass:"error"},[e._v("Field is required")]),e.$v.name.minLength?e._e():a("div",{staticClass:"error"},[e._v("\n              Name must have at equal or more "+e._s(e.$v.name.$params.minLength.min)+" letters.\n            ")])]),a("div",{staticClass:"feedback__field"},[a("label",{staticClass:"feedback__label",attrs:{for:"phone"}},[e._v("Phone")]),a("masked-input",{staticClass:"feedback__input",attrs:{id:"phone",mask:"\\+\\7 (111) 111-11-11",placeholder:"Mobile phone's number",type:"tel"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),a("div",{staticClass:"feedback__field",class:{error:e.$v.message.$error}},[a("label",{attrs:{for:"message"}},[e._v("Your Message")]),a("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.message.$model,expression:"$v.message.$model",modifiers:{trim:!0}}],staticClass:"feedback__message",attrs:{id:"message",rows:"5",placeholder:"No more 250 simbols"},domProps:{value:e.$v.message.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.message,"$model",t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),e.$v.message.maxLength?e._e():a("div",{staticClass:"error"},[e._v("Message must have at least "+e._s(e.$v.message.$params.maxLength.max)+" letters.")])]),a("button",{staticClass:"feedback__btn btn",attrs:{type:"submit",disabled:"PENDING"===e.submitStatus}},[e._v("Send mail")]),"ERROR"===e.submitStatus?a("p",{staticClass:"error"},[e._v("Please fill the form correctly.")]):e._e(),"PENDING"===e.submitStatus?a("p",[e._v("Sending...")]):e._e()]),"OK"===e.submitStatus?a("div",{staticClass:"modal",class:{hide:e.isHide},on:{click:function(t){e.isHide=!e.isHide}}},[a("p",{staticClass:"modal__text"},[e._v(e._s(e.name)+"!")]),a("p",{staticClass:"modal__text"},[e._v(e._s(e.resp))]),a("p",{staticClass:"modal__text close"},[e._v("Click for close this window")])]):e._e()])},A=[],U=(a("a481"),a("7f7f"),a("bc3a")),K=a.n(U),B=a("ab99"),Y=a("b5ae"),J={name:"Feedback",data:function(){return{name:this.$store.getters.getFeedbackName,phone:"",message:"",submitStatus:null,resp:"",isHide:!0}},methods:{submit:function(){var e=this;console.log("submit!"),this.$v.$touch(),this.$v.$invalid?this.submitStatus="ERROR":(this.submitStatus="PENDING",this.$store.commit("SET_FEEDBACK",this.feedbackData),setTimeout(function(){K.a.get("info.json").then(function(e){return e.data.message}).then(function(t){return e.resp=t}).catch(function(e){return console.log(e)}),e.submitStatus="OK",e.isHide=!1},500))}},validations:{name:{required:Y["required"],minLength:Object(Y["minLength"])(3)},phone:{required:Y["required"],minLength:Object(Y["minLength"])(18),maxLength:Object(Y["maxLength"])(18)},message:{maxLength:Object(Y["maxLength"])(250)}},computed:{feedbackData:function(){return{name:this.name,phone:this.phone.replace(/[\s-_()+]/g,""),message:this.message}}},components:{MaskedInput:B["a"]}},V=J,W=(a("e61a"),Object(d["a"])(V,R,A,!1,null,"ddf7c036",null));W.options.__file="Feedback.vue";var z=W.exports,Q={name:"contact",components:{Feedback:z}},X=Q,Z=(a("1459"),Object(d["a"])(X,q,G,!1,null,"3943fafc",null));Z.options.__file="Contact.vue";var ee=Z.exports,te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"fullimage"},[a("div",{staticClass:"container"},[a("h1",[e._v("Slide "+e._s(e.id))]),a("div",{staticClass:"fullimage__item"},[a("img",{attrs:{src:e.image.link,alt:e.image.title}})]),a("div",{staticClass:"fullimage__buttons"},[a("button",{staticClass:"fullimage__return btn",on:{click:function(t){e.backHome()}}},[e._v("Return")])])])])},ae=[],ie={name:"FullImage",data:function(){return{id:this.$route.params.id}},computed:{image:function(){return this.$store.getters.getSelectImg(this.id)}},methods:{backHome:function(){this.$router.push("/")}}},ne=ie,se=(a("4f7b"),Object(d["a"])(ne,te,ae,!1,null,"7a056999",null));se.options.__file="FullImage.vue";var re=se.exports;i["a"].use(h["a"]);var oe=new h["a"]({mode:"history",base:"/VueTest/",routes:[{path:"/",name:"home",component:L},{path:"/about",name:"about",component:D},{path:"/contact",name:"contact",component:ee},{path:"/image/:id",name:"FullImage",component:re}]}),le=(a("7514"),a("2f62"));i["a"].use(le["a"]);var ce=new le["a"].Store({state:{feedback:{name:"Olga",phone:"79064218904",message:"Write Us"},images:[{id:1,link:"/img/01.png",title:"title for img"},{id:2,link:"/img/02.jpg",title:"title for img"},{id:3,link:"/img/03.jpg",title:"title for img"},{id:4,link:"/img/04.png",title:"title for img"},{id:5,link:"/img/05.jpg",title:"title for img"},{id:6,link:"/img/06.jpg",title:"title for img"},{id:7,link:"/img/07.jpg",title:"title for img"},{id:8,link:"/img/08.jpg",title:"title for img"},{id:9,link:"/img/09.jpg",title:"title for img"},{id:10,link:"/img/10.jpg",title:"title for img"},{id:11,link:"/img/11.jpg",title:"title for img"},{id:12,link:"/img/12.jpg",title:"title for img"}]},getters:{getFeedbackName:function(e){return e.feedback.name},getFeedbackPhone:function(e){return e.feedback.phone},getFeedbackMessage:function(e){return e.feedback.message},getSelectImg:function(e){return function(t){return e.images.find(function(e){return e.id===Number(t)})}}},mutations:{SET_FEEDBACK:function(e,t){e.feedback.name=t.name,e.feedback.phone=t.phone,e.feedback.message=t.message}}});i["a"].use(s.a),i["a"].config.productionTip=!1,new i["a"]({router:oe,store:ce,render:function(e){return e(b)}}).$mount("#app")},7386:function(e,t,a){},"9a8e":function(e,t,a){},a2a9:function(e,t,a){"use strict";var i=a("b549"),n=a.n(i);n.a},a4ba:function(e,t,a){},accd:function(e,t,a){},b491:function(e,t,a){},b549:function(e,t,a){},cee8:function(e,t,a){"use strict";var i=a("00e0"),n=a.n(i);n.a},cf25:function(e,t,a){"use strict";var i=a("7386"),n=a.n(i);n.a},e61a:function(e,t,a){"use strict";var i=a("accd"),n=a.n(i);n.a},fa8b:function(e,t,a){}});
//# sourceMappingURL=app.d862c506.js.map