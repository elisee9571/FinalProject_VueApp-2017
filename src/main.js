import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.prototype.$apiurl = "https://api.2017.ovh/";
/* import axios pour liée mon node et vue grace aux requetes*/
/* Axios est une bibliothèque, Elle permet de communiquer avec des API en utilisant des requêtes. */
import axios from "axios";
import Vuesaxios from "vue-axios";
Vue.use(Vuesaxios, axios);

// mode de production
Vue.config.productionTip = false;

new Vue({
    router,
    // h un alias createElement
    render: (h) => h(App),
    // “mount” signifie le moment où votre composant est inséré dans le DOM.
    // Ce code crée une nouvelle instance de Vue et la monte sur l'élément HTML avec l'ID d'application.
}).$mount("#app");