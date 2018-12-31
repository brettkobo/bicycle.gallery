// This is the main feed for rendering bicycles.
import { BikeViewTemplate } from './templates/bike-view-template.js'
import { Comments } from './comments.js'
import { Like } from './like.js'


// Start by defining a constant, rather than using Vue.component()
const BikeView = {
    name: 'bike-view',
    template: BikeViewTemplate,
    methods: {},
    // This contains the JSON object that the component will render.
    // props: ['item'],
    created: function() {
        
        const db_url = "https://data-bicyclegallery.wedeploy.io";
        
        var bikeid = this.$route.params.bikeid.toString();
        
        WeDeploy
         .data(db_url)
         .where('bikeid', '=', bikeid)
         .get('bikes')
         .then((bike) => {
            this.item = bike[0];
        });
        
        console.log("Solo bike");
        
    },
    data: function() {
        return {
            item: ''
        }
    },
    components: {
    'comments': Comments,
    'like' : Like
    }
}

export { BikeView }