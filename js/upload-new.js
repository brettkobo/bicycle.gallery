// This is the main feed for rendering bicycles.
import { UploadTemplate, UploadTypeTemplate, UploadTabTemplate, UploadAttributesTemplate, UploadPictureTemplate } from './templates/upload-new-template.js'

const db_url = "https://data-bicyclegallery.wedeploy.io";

// Start by defining a constant, rather than using Vue.component()
const Upload = {
    name: 'upload',
    template: UploadTemplate,
    props: ['items'],
    methods: {
      uuid() {
              var seed = Date.now();
              if (window.performance && typeof window.performance.now === "function") {
                  seed += performance.now();
              }
          
              var uuid = 'xxxxxxxx'.replace(/[xy]/g, function (c) {
                  var r = (seed + Math.random() * 16) % 16 | 0;
                  seed = Math.floor(seed/16);
          
                  return (c === 'x' ? r : r & (0x3|0x8)).toString(16).toUpperCase();
              });
          	
              return uuid;
          },
        addBike() {
         var upload_bike_data = {
                  bikeid: this.uuid(),
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
                  user: {
                    username: this.$root.$data.user.username,
                    userid: this.$root.$data.user.id
                  },
                  added: new Date().toDateString()
                };
                
            WeDeploy
            .data(db_url)
            .create('bikes', upload_bike_data)
            .then(function() {
              console.log("Upload Successful");
            });
            
            // NOT GOOD! Refactor this using vuex because you shouldn't access the root data...
            // this.$root.$data.item.push(upload_bike_data);
            
            this.$router.replace({ path: '/feed' });
            
          //this.$emit('close');
        
        },
        formChange(position) {
          this.formPosition = position
        }
    },
    // This contains the JSON object that the component will render.
    data: function() {
        return {
          formPosition: 'start',
              bikeid: '',
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
              user: {
                username: '',
                userid: ''
              },
              added: ''    
        }
    }
}

const UploadType = { template: UploadTypeTemplate }
const UploadTab = { 
  template: UploadTabTemplate,
  methods: {
    onComplete: function(){
        alert('Yay. Done!');
   }
  }};
const UploadAttributes = { template: UploadAttributesTemplate, name:"upload-attributes"};
const UploadPicture = { 
  template: UploadPictureTemplate, 
  name:"upload-photo",
  components: {
            FilePond: vueFilePond.default(FilePondPluginImagePreview)
  }
};

export { Upload, UploadType, UploadTab, UploadAttributes, UploadPicture};