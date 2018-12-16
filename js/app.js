// Imports
import { Feed } from './feed.js';
import { Grid } from './grid.js';
import { UploadModel } from './modal.js';
import { NavTop, NavBottom } from './nav.js'
import { BikeUpload } from './bike-upload.js'
import { Home } from './home.js'
import { User } from './user.js'
import { SignUp, Welcome } from './login.js'

const db_url = "https://data-bicyclegallery.wedeploy.io";
var bike_data = [];


var user = {
  username: "chillbro9",
  firstname: "Brett",
  lastname: "Kobold",
  avatar: "https://media.licdn.com/dms/image/C5603AQHSUTky4gaEQw/profile-displayphoto-shrink_200_200/0?e=1550102400&v=beta&t=AofwoMUNgrh-XyyUo7_xPrnto63HpD3tmVDgGRscWb4",
  email: "brett@brett.com",
  createddate: "Dec 12th, 2018",
  userid: 8695830
}

WeDeploy
 .data(db_url)
 .get('bikes')
 .then(function(bikes) {
    bikes.forEach(function(bike){
	    bike_data.push(bike);
	});
});
   


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
  { path: '/signup',
    name: 'sign-up',
    component: SignUp
  },
  { path: '/welcome',
    name: 'welcome',
    component: Welcome
  }
]

const router = new VueRouter({
  routes
})


var app = new Vue({
  el: '#app',
  data: {
    items: bike_data,
    user: user,
    showModal: false
  },
  router,
  components: {
    'feed': Feed,
    'modal': UploadModel,
    'nav-top': NavTop,
    'nav-bottom': NavBottom,
    'bike-upload': BikeUpload,
    'grid': Grid
  }
}).$mount('#app');

