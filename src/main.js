import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faMobileAlt,
  faEnvelope,
  faMapMarkerAlt,
  faHome,
  faTasks,
  faIdCard,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";
import {
  faJs,
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin,
  faGitSquare,
  faGithubSquare,
  faHtml5,
  faCss3,
  faJsSquare,
  faPhp,
  faYoutubeSquare,
  faTwitch,
  faInstagram,
  faAngular,
  faBootstrap,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faUserSecret,
  faJs,
  faFacebookSquare,
  faMobileAlt,
  faEnvelope,
  faMapMarkerAlt,
  faTwitterSquare,
  faLinkedin,
  faGitSquare,
  faGithubSquare,
  faHome,
  faTasks,
  faIdCard,
  faGraduationCap,
  faHtml5,
  faCss3,
  faJsSquare,
  faPhp,
  faYoutubeSquare,
  faTwitch,
  faInstagram,
  faAngular,
  faBootstrap,
  faGoogle
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
