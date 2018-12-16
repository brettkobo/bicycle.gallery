const GridTemplate = `
<div class="card-columns">
    <div class="card mb-3" v-for="item in item">
    
                        <div class="card-header title">
                            <div class="row">
                                <h5> {{ item.title }} </h5>
                            </div>
                        </div>
            
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-12 card-text mb-1 mx-auto align-self-center">
                                    <img class="rounded mx-auto d-block img-fluid" v-bind:src="item.image"></img>
                                </div>
                            </div>
            
                            <div class="card-text">
                                <span class="badge badge-pill badge-info mr-1" v-for="tag in item.tags">{{ tag }}</span>
                            </div>
            
                        </div>
            
                        <div class="card-footer">
                            <a href="#" class="card-link"><i class="far fa-heart"></i></i> Like</a>
                            <a href="#" class="card-link"><i class="far fa-comment"></i> Comment</a>
                        </div>
                    </div>
</div>
`

export { GridTemplate };