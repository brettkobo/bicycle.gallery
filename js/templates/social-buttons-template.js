const SocialButtonTemplate = `
<div>
    <div class='pl-4 mb-5'>
        <i class="far fa-heart fa-xs text-muted"></i> <span class='text-muted fa-xs'> {{ likeCount }} </span>
        <i class="far fa-comment fa-xs text-muted""></i> <span class='text-muted fa-xs'> {{ commentCount }} </span>
        <i class="fas fa-eye fa-xs text-muted""></i> <span class='text-muted fa-xs'> {{ pageviewCount }} </span>
    </div>    
    <div class="bottom-buttons pl-4 mt-3">
        <button class="btn btn-danger rounded-circle int-buttons" @click="submitLike"><i class="far fa-heart text-white"></i></button>
        <button class="btn btn-primary rounded-circle int-buttons"> 
            <a href="#" class="" ><i class="far fa-comment text-white""></i></a>
        </button>
        <button class="btn btn-primary rounded-circle int-buttons"> 
            <a href="#" class="" ><i class="fas fa-share-alt text-white""></i></a>
        </button>
    </div>
</div>    
`

export { SocialButtonTemplate }