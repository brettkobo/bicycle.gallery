// This is the main feed for rendering bicycles.
import { FeedTemplate } from './templates/feed-template.js'


// Start by defining a constant, rather than using Vue.component()
const Feed = {
    name: 'feed',
    template: FeedTemplate,
    methods: {},
    // This contains the JSON object that the component will render.
    // props: ['item'],
    created: function() {
        
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
        console.log("Created from Feed has been run.");
        console.log(bike_data);
        console.log(this.$root.$data)
        this.$root.$data.item = bike_data;
        this.item = this.$root.$data.item 
    },
    data: function() {
        return {
            item: ''
        }
    }
}

export { Feed }