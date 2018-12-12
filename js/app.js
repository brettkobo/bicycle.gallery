
var bike_data = [
            {
              title: '2015 Bombtrack Hook 2',
              image: 'https://files.bikeindex.org/uploads/Pu/42052/Bombtrack_Hook_2a.jpg',
              description: 'My red demon that is roll over the hills of South Bend, IN. I almost fell off the bike a few times because of how bumpy it was.',
              tags: ["cyclrocross", "dirt cruncher", "red", "sram"],
              attributes: {
                category: "cyclocross"
              },
              parts: {
                brand: "Specilized",
                frame: "Allez 100",
                wheelset: "Destroyers 900",
                groupo: "SRAM Rivals",
                brakes: "Disk Brakes"
                },
              added: "12-10-2018",
              user: "coolguy7",
            },
            {
              title: 'Junker 7',
              image: 'https://i2.wp.com/tomsbiketrip.com/wp-content/uploads/2017/01/ridgeback-tour-2018.jpg?resize=750%2C444',
              description: 'The last bike I would want to go on a tour with. The hog sign on day 14 was what inspired me to keep going. My wheel had a broken spoke.',
              tags: ["touring bike", "slow moving"],
              attributes: {
                category: "touring-bike"
              },
              parts: {
                brand: "Cannondale",
                frame: "Lead Time",
                wheelset: "Heavyboy1000",
                groupo: "Shimano 105",
                brakes: "V-Brakes"
                },
              added: "12-19-2018",
              user: "lamedude0"
            },
            {
              title: 'Phatbike Lift',
              image: 'http://lenzsport.com/wp-content/uploads/2015/11/Fat-bike-curiak-2000x1100px.jpg',
              description: 'That phat bike I always wanted. It will roll over everything, sand, children, trees, small lights, the heavens, etc.',
              tags: ["mtb bike", "black", "cool"],
              attributes: {
                category: "phatbike"
              },
              parts: {
                brand: "Phat",
                frame: "Blue",
                wheelset: "Phat Wheels",
                groupo: "Suntour Cylcon",
                brakes: "Your Feet"
                },
              added: "12-10-2018",
              user: "superman6"
            }
    ];  

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
      console.log("at least I clicked");
      
      app._data.items.push(
            {
              title: this.title,
              image: this.image,
              description: this.description,
              tags: this.tags.split(","),
              attributes: {
                category: this.category
              },
              parts: {
                brand: this.brand,
                frame: this.frame,
                wheelset: this.wheelset,
                groupo: this.groupo,
                brakes: this.brakes
              },
              user: "magicmen9",
              added: new Date().toDateString()
            }
        
        )
        
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

