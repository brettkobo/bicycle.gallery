var db_url = "https://data-bicyclegallery.wedeploy.io";
var bike_data = [];

WeDeploy
 .data(db_url)
 .get('bikes')
 .then(function(bikes) {
    bikes.forEach(function(bike){
	    bike_data.push(bike);
	});
});
   

 

Vue.component('modal', {
  data: function () {
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
  },
  template: '#modal-template',
  methods: {
      printdat() {
        console.log("dat works"); 
    },
    
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
          console.log("Upload Successful")
        });
        
        app._data.items.push(upload_bike_data);
        
      this.$emit('close');
        
    }
  }
  
})

var app = new Vue({
  el: '#app',
  data: {
    items: bike_data,
    showModal: false
  }
})

