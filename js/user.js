import { UserTemplate } from './templates/user-template.js'
import { Grid } from './grid.js';

/*
let bikeAuth = {
    loggedIn: function () {
      return !!localStorage.currentUser;
    },
    userData: function() {
      if(!!localStorage.currentUser) {
        return localStorage.currentUser;
      } else {
        return '';
      }
    },
    getUser: function(userId) {
        var data = WeDeploy.auth('auth-bicyclegallery.wedeploy.io').getUser(userId);
        var user_data = data.result_.data_;
        return user_data;
    }
};


function getUser(userId) {
        var user_d = WeDeploy.auth('auth-bicyclegallery.wedeploy.io').getUser(userId);
        return user_d.result_;
}
*/

// Start by defining a constant, rather than using Vue.component()
const User = {
    name: 'user',
    template: UserTemplate,
    methods: {
        getUser: function(userId) {
            var data = WeDeploy.auth('auth-bicyclegallery.wedeploy.io').getUser(userId);
            return data;
     }
    },
    props: ['item'],
    created: function() {
        var temp = this.getUser(this.$route.params.id.toString());
        //console.log(temp.result_);
        this.user = temp;
    },
    data: function() {
        return {
            user: ''
        }
    },
    
    components: {
    'grid': Grid
    }
}

export { User };

//328221880997945865