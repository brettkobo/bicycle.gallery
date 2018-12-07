
var bike_data = {
    items: [
            {
              title: '2015 Bombtrack Hook 2',
              image: 'https://files.bikeindex.org/uploads/Pu/42052/Bombtrack_Hook_2a.jpg',
              description: 'My red demon.',
              tags: ["cyclrocross", "dirt cruncher", "red", "sram"]
            },
            {
              title: 'Junker 7',
              image: 'https://i2.wp.com/tomsbiketrip.com/wp-content/uploads/2017/01/ridgeback-tour-2018.jpg?resize=750%2C444',
              description: 'Tour Jam',
              tags: ["touring bike", "slow moving"]
            },
            {
              title: '2015 Bombtrack Hook 2',
              image: 'https://i.pinimg.com/originals/b0/a4/f5/b0a4f5c77ab4dd48b66ab95ccdf581f2.jpg',
              description: 'That phat bike I always wanted',
              tags: ["mtb bike", "black", "cool"]
            }
    ]  
  }

var app = new Vue({
  el: '#app',
  data: bike_data,
  methods:{
    addBike: function (event) {
      var title = this.title;
      var description = this.description;
      var image = this.image;
      var tags = this.tags.split(",");
      
      bike_data.items.push(
            {
              title: title,
              image: image,
              description: description,
              tags: tags
            }
        
        )
        
      this.title = "";
      this.description = "";
      this.image = "";
      this.tags = "";
        
    }
      
    }
})

