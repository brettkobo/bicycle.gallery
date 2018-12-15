// This is the main feed for rendering bicycles.
import { BikeUploadTemplate } from './templates/bike-upload-template.js'


// Start by defining a constant, rather than using Vue.component()
const BikeUpload = {
    template: BikeUploadTemplate,
//    props: ['showModal'],
    methods: {},
    // This contains the JSON object that the component will render.
    data: function() {
        return {
            
        }
    }
}

export { BikeUpload }