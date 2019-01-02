import { UserTemplate } from './templates/user-template.js'
import { Grid } from './grid.js';

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
    created: function() {
        var temp = this.getUser(this.$route.params.id.toString());
        //console.log(temp.result_);
        this.user = temp;
        
        WeDeploy
         .data("https://data-bicyclegallery.wedeploy.io/")
         .where('user.userid', "=", this.$route.params.id.toString())
         .get('bikes')
         .then((data) => {
             console.log('user bikes loaded');
             console.log(data);
            this.results = data;
        });
    },
    data: function() {
        return {
            user: '',
            results: []
        }
    },
    
    components: {
    'grid': Grid
    }
}

export { User };