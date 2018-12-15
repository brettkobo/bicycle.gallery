// This is the main feed for rendering bicycles.
import { HomeTemplate } from './templates/home-template.js'


// Start by defining a constant, rather than using Vue.component()
const Home = {
    template: HomeTemplate,
    methods: {},
    // This contains the JSON object that the component will render.
    data: function() {
        return {
            
        }
    }
}

export { Home }