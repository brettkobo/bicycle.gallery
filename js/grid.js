// This is the main feed for rendering bicycles.
import { GridTemplate } from './templates/grid-template.js'


// Start by defining a constant, rather than using Vue.component()
const Grid = {
    template: GridTemplate,
    methods: {},
    // This contains the JSON object that the component will render.
    props: ['item'],
    data: function() {
        return {
            
        }
    }
}

export { Grid }