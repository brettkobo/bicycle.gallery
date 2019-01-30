// Imports
import { Feed } from './feed.js';
import { Grid } from './grid.js';
import { UploadModel } from './modal.js';
import { NavTop, NavBottom } from './nav.js';
import { BikeUpload } from './bike-upload.js';
import { Home } from './home.js';
import { User } from './user.js';
import { SignUp, Welcome } from './sign-up.js';
import { BikeView } from './bike-view.js';
import { Upload, UploadType, UploadTab, UploadAttributes, UploadPicture } from './upload-new.js';
import { Search } from './search.js';


const routes = [
  { path: '/',
    name: 'home',
    component: Home
  },
  { path: '/feed',
    name: 'feed',
    component: Feed, 
    props: { default: true }
  },
  { path: '/grid',
    name: 'grid',
    component: Grid 
  },
  { path: '/user/:id',
    name: 'user',
    component: User 
  },
   { path: '/bike/:bikeid',
    name: 'bike',
    component: BikeView 
  },
  { path: '/signup',
    name: 'sign-up',
    component: SignUp
  },
  { path: '/welcome',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/upload/',
    name: 'upload',
    component: Upload,
    children: [
      { path: 'type', 
      component: UploadType },
      { path: 'attributes', 
        name: 'upload-attributes', 
        component: UploadAttributes },
      { path: 'photo',
        name: 'upload-photo', 
        component: UploadPicture },
      { path: 'tabs',
        name: 'upload-tabs',
        component: UploadTab
      }
      ]
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  }
]

// define a mixin object
const datMixin = {
  methods: {
        unCamelCase(text) {
         var temp = text
         .replace(/([A-Z])/g, ' $1')
         .replace(/^./, function(str){ return str.toUpperCase(); })
         return(temp)
        }
  }
}

const router = new VueRouter({
  routes
})

let bikeAuth = {
    loggedIn: function () {
      return !!localStorage.currentUser;
    },
    userData: function() {
      if(!!localStorage.currentUser) {
        return JSON.parse(localStorage.currentUser);
      } else {
        return '';
      }
    },
    getUser: function(userId) {
        var data = WeDeploy.auth('auth-bicyclegallery.wedeploy.io').getUser(userId);
        var user_data = data.result_.getData();
        return JSON.parse(user_data);
    }
};


Vue.use(VueFormWizard)
var app = new Vue({
  el: '#app',
  methods: {},
  data: {
//    items: bike_data,
    auth: {
      loggedIn: bikeAuth.loggedIn(),  
    },
    user: bikeAuth.userData(),
    showModal: false,
    item: ''
  },
  router,
  components: {
    'nav-top': NavTop,
    'nav-bottom': NavBottom,
    'bike-upload': BikeUpload,
  }
}).$mount('#app');

export { datMixin };
