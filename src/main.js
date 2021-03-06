import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App.vue'
import VueTyperPlugin from 'vue-typer'
import VueParticles from 'vue-particles'
import vuetify from './plugins/vuetify';
import router from './router'
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
Vue.use(SuiVue);
Vue.use(VueParticles)
Vue.use(VueTyperPlugin)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
