import { CommentTemplate } from './templates/comment-template.js'

const Comments = {
    name: 'comments',
    template: CommentTemplate,
    props: ['item'],
    created: function() {
        
        WeDeploy
         .data('https://data-bicyclegallery.wedeploy.io')
         .where('bikeId', '=', this.item.id.toString())
         .get('comments')
         .then((data) => {
        	 this.comments = data;
        });
        
        console.log("Previous Comment have been loaded.");
    },
    methods: {
        submitComment: function(){
           
           var commentData = {
                text: this.text,
                username: this.$root.$data.user.username,
                dateAdded: new Date().toDateString(),
                avatar: "https://www.weact.org/wp-content/uploads/2016/10/Blank-profile.png",
                bikeId: this.item.id
           };
           
            this.comments.push(commentData);
            
            WeDeploy
                .data('https://data-bicyclegallery.wedeploy.io')
                .create('comments', commentData)
                .then(function() {
                  console.log("Comment Uploaded Successfully");
                });
        }
    },
    // This contains the JSON object that the component will render.
    data: function() {
        return {
            text: '',
            comments: [],
        }
    }
}

export { Comments }