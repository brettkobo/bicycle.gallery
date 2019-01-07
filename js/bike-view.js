// This is the main feed for rendering bicycles.
import { BikeViewTemplate, BikePartDropdownTemplate } from './templates/bike-view-template.js'
import { Comments } from './comments.js'
import { Like } from './like.js'
import { datMixin } from './mixin.js'


const BikePartDropdown = {
    name: 'bike-part-dropdown',
    template: BikePartDropdownTemplate,
    props: ['parts', 'partID', 'show'],
    mixins: [datMixin],
    data: function() {
        return {
//            partID: this.partID
        }
    }
}

// Start by defining a constant, rather than using Vue.component()
const BikeView = {
    name: 'bike-view',
    template: BikeViewTemplate,
    mixins: [datMixin],
    methods: {
    },
    // This contains the JSON object that the component will render.
    // props: ['item'],
    created: function() {
        
        const db_url = "https://data-bicyclegallery.wedeploy.io";
        
        var bikeid = this.$route.params.bikeid.toString();
        
        WeDeploy
         .data(db_url)
         .where('bikeId', '=', bikeid)
         .get('bikes-oth')
         .then((bike) => {
            this.item = bike[0];
        });
        
        console.log("Solo bike");
        
    },
    data: function() {
        return {
            item: '',
            showCollapse: false
            
        }
    },
    components: {
    'comments': Comments,
    'like' : Like,
    'bike-part-dropdown' : BikePartDropdown
    }
}



export { BikeView }