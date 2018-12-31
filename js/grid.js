// This is the main feed for rendering bicycles.
import { GridTemplate } from './templates/grid-template.js'


// Start by defining a constant, rather than using Vue.component()
const Grid = {
    template: GridTemplate,
    props: ['results'],
    methods: {},
    created: function() {
        console.log(this.results)
    },
    // This contains the JSON object that the component will render.
    // props: ['items'],
    
/*    created: function() {
        
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
        
        
        // bad code! refactor this to use vuex evenutally... Probably before production.
        this.$root.$data.item = bike_data;
        this.item = this.$root.$data.item 
    },
*/    
    data: function() {
        return {
            items: this.results
        }
    }
}

export { Grid }