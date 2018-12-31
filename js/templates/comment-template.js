const CommentTemplate = `
<div class="row">
	<div class="col-lg-10 mx-auto">
		<div class="be-comment-block">
	
			<div class="be-comment" v-for="comment in comments">
					<div class="be-img-comment">	
						<router-link :to="'/user/' + comment.userid"></router-link>
							<img v-bind:src="comment.avatar" alt="" class="be-ava-comment">
						</a>
					</div>
					<div class="be-comment-content">
						
							<span class="be-comment-name">
								<router-link :to="'/user/' + comment.userid">{{ comment.username }}</router-link>
								</span>
							<span class="be-comment-time">
								<i class="fa fa-clock-o"></i>
								{{ comment.dateAdded }} 
							</span>
		
						<p class="be-comment-text">
							{{ comment.text }}
						</p>
					</div>
				</div>
		</div>
		
		<div>
			<form class="form-horizontal" role="form"> 
				<div class="form-group">
					<label for="email" class="col-sm-2 control-label">Comment</label>
						<div class="col-sm-10">
							<textarea class="form-control" v-model="text" name="addComment" id="addComment" rows="5"></textarea>
						</div>
				</div>

				<div class="form-group">
					<div class="col-sm-offset-2 col-sm-10">                    
						<button class="btn btn-success btn-circle text-uppercase" type="button" @click="submitComment">
							<span class="glyphicon glyphicon-send"></span> Summit comment
						</button>
					</div>
				</div>            
			</form>
		</div>
		
	</div>    
</div>
`

export { CommentTemplate };