// JavaScript File
const FeedTemplate = `
<div class="card mt-3">

            <div class="card-header title">
                <div class="row">
                    <div class="col-lg-9 align-self-center">
                        <h3> {{ item.title }} </h3>
                    </div>
                    <div class="col-lg-3">
                        <div class="float-right">
                            <div class="bike-icon" v-bind:class="item.attributes.category"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-body">
                <div class="card-text text-muted">
                    <small>
                        <span>Upload by
                        <a href="#">{{ item.user }}</a>
                        on {{ item.added }}</span>
                    </small>
                </div>      
                <div class="row">

                    <div class="col-lg-6 card-text mb-1 mx-auto align-self-center">
                        <img class="rounded mx-auto d-block img-fluid" v-bind:src="item.image"></img>
                    </div>

                    <div class="col-lg-6 card-text mb-1">

                        <h3>Description</h3>
                        <p>{{ item.description }}</p>

                        <h3>Components</h3>
                        <table class="table">
                            <tr v-for="(value, key) in item.parts">
                                <td class="font-weight-bold">{{ key }}:</td>
                                <td>{{ value }}</td>
                            </tr>
                        </table>
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
`
        
export { FeedTemplate }