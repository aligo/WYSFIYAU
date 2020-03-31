import Vue from 'vue'
import App from './App.vue'

let params = {};
let urlParts = (window.location.href + '?').split('?');
urlParts[1].split('&').forEach((pair) => {
  pair = (pair + '=').split('=').map(decodeURIComponent);
  if (pair[0].length) {
    params[pair[0]] = pair[1];
  }
});

if (!params.t || (params.t < (Date.now() - 600000))) {
  params.t = Date.now();
  let newUrl = urlParts[0] + '?';
  for (const k in params) {
    newUrl = newUrl + encodeURIComponent(k) + '=' + encodeURIComponent(params[k]) + '&';
  }
  window.location.href = newUrl.slice(0, -1);
} else {
  Vue.config.productionTip = false;
  
  new Vue({
    render: h => h(App),
  }).$mount('#app')
}