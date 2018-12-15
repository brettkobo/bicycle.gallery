// This is the main feed for rendering bicycles.
import { UploadModalTemplate } from './templates/modal-template.js'

const db_url = "https://data-bicyclegallery.wedeploy.io";

// Start by defining a constant, rather than using Vue.component()
const UploadModel = {
    template: UploadModalTemplate,
    props: ['items'],
    methods: {
        addBike() {
         var upload_bike_data = {
                  title: this.title,
                  image: this.image,
                  description: this.description,
                  tags: this.tags.split(","),
                  attributes: {
                    category: this.attributes.category
                  },
                  parts: {
                    brand: this.parts.brand,
                    frame: this.parts.frame,
                    wheelset: this.parts.wheelset,
                    groupo: this.parts.groupo,
                    brakes: this.parts.brakes
                  },
                  user: "magicmen9",
                  added: new Date().toDateString()
                };
                
            WeDeploy
            .data(db_url)
            .create('bikes', upload_bike_data)
            .then(function() {
              console.log("Upload Successful");
            });
            
            app.__vue__.items.push(upload_bike_data);
            
          this.$emit('close');
        
        }
    },
    // This contains the JSON object that the component will render.
    data: function() {
        return {
              title: '',
              image: '',
              description: '',
              tags: '',
              attributes: {
                category: ''
              },
              parts: {
                brand: '',
                frame: '',
                wheelset: '',
                groupo: '',
                brakes: ''
              },
              user: '',
              added: ''    
        }
    }
}

export { UploadModel }