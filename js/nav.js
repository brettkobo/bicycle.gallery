// This is the main feed for rendering bicycles.
import { NavTopTemplate, NavBottomTemplate } from './templates/nav-template.js'


// Start by defining a constant, rather than using Vue.component()
const NavTop = {
    template: NavTopTemplate,
    methods: {},
    // This contains the JSON object that the component will render.
    data: function() {
        return {
            
        }
    }
}

const NavBottom = {
    template: NavBottomTemplate,
    methods: {},
    // This contains the JSON object that the component will render.
    data: function() {
        return {
            
        }
    }
}

export { NavTop, NavBottom }