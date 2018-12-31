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