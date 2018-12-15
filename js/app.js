// Imports
import { Feed } from './feed.js';
import { UploadModel } from './modal.js';
import { NavTop, NavBottom } from './nav.js'
import { BikeUpload } from './bike-upload.js'
import { Home } from './home.js'

const db_url = "https://data-bicyclegallery.wedeploy.io";
var bike_data = [];

WeDeploy
 .data(db_url)
 .get('bikes')
 .then(function(bikes) {
    bikes.forEach(function(bike){
	    bike_data.push(bike);
	});
});
   

/*
const HomeView = { template: '<div>Blank</div>' }
const FeedView = { template: `<div>
                                <div v-for="item in items">
                                  <feed v-bind:item="item"></feed>
                                </div>
                              </div>`
                }*/
const GridView = { template: '<div>Foo Var Rah</div>' }


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', 
  component: Home },
  { path: '/feed', 
    component: Feed, 
    props: { default: true }
  },
  { path: '/grid', 
  component: GridView }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes
})


var app = new Vue({
  el: '#app',
  data: {
    items: bike_data,
    showModal: false
  },
  router,
  components: {
    'feed': Feed,
    'modal': UploadModel,
    'nav-top': NavTop,
    'nav-bottom': NavBottom,
    'bike-upload': BikeUpload
  }
}).$mount('#app');

