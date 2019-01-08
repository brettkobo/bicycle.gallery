import { SocialButtonTemplate } from './templates/social-buttons-template.js'
import { Like } from './like.js'

const SocialButtons = {
    name: 'social-buttons',
    template: SocialButtonTemplate,
    props: ['item'],
    created: function() {

        WeDeploy
         .data('https://data-bicyclegallery.wedeploy.io')
         .where('bikeId', '=', this.item.id.toString())
         .count()
         .get('likes')
         .then((data) => {
        	 this.likeCount = data;
        });
        
        WeDeploy
         .data('https://data-bicyclegallery.wedeploy.io')
         .where('bikeId', '=', this.item.id.toString())
         .count()
         .get('comments')
         .then((data) => {
        	 this.commentCount = data;
        });
    },
    components:{
        'like': Like
    },
   methods: {
        submitLike: function(){
           
           var likeData = {
                username: this.$root.$data.user.username,
                userId: this.$root.$data.user.id,
                dateAdded: new Date().toDateString(),
                bikeId: this.item.id
           };
           
            this.likeCount += 1
            
            WeDeploy
                .data('https://data-bicyclegallery.wedeploy.io')
                .create('likes', likeData)
                .then(function() {
                  console.log("Like Uploaded Successfully");
                });
            }
        },
        data: function() {
        return {
            likeCount: '',
            commentCount: '',
            pageviewCount: Math.round(Math.random()*1000)
            }
    }
}    

export { SocialButtons }