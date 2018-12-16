import { UserTemplate } from './templates/user-template.js'
import { Grid } from './grid.js';



// Start by defining a constant, rather than using Vue.component()
const User = {
    template: UserTemplate,
    methods: {},
    props: ['item', 'user'],
    data: function() {
        return {
        }
    },
    components: {
    'grid': Grid
    }
}

export { User };