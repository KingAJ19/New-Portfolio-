import Vue from 'vue'
import App from './App.vue'
import VueTyperPlugin from 'vue-typer'
import vuetify from './plugins/vuetify';
import router from './router'
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
Vue.use(SuiVue);
Vue.use(VueTyperPlugin)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
