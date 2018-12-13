// This is the main feed for rendering bicycles.
import { FeedTemplate } from './templates/feed.js'


// Start by defining a constant, rather than using Vue.component()
const Feed = {
    template: FeedTemplate,
    methods: {},
    // This contains the JSON object that the component will render.
    props: ['item'],
    data: function() {
        return {
            
        }
    }
}

export { Feed }