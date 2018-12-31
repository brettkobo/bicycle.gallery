import { LikeTemplate } from './templates/like-template.js'

const Like = {
    name: 'like',
    template: LikeTemplate,
    props: ['item'],
    created: function() {
        
        
        WeDeploy
         .data('https://data-bicyclegallery.wedeploy.io')
         .where('bikeId', '=', this.item.id.toString())
         .count()
         .get('likes')
         .then((data) => {
        	 this.likes = data;
        });
        
        console.log("# of likes have been loaded.");
    },
    methods: {
        submitLike: function(){
           
           var likeData = {
                username: this.$root.$data.user.username,
                userId: this.$root.$data.user.id,
                dateAdded: new Date().toDateString(),
                bikeId: this.item.id
           };
           
            this.likes += 1
            
            WeDeploy
                .data('https://data-bicyclegallery.wedeploy.io')
                .create('likes', likeData)
                .then(function() {
                  console.log("Like Uploaded Successfully");
                });
        }
    },
    // This contains the JSON object that the component will render.
    data: function() {
        return {
            likes: '',
        }
    }
}

export { Like }