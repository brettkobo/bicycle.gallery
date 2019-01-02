// JavaScript File
const BikeViewTemplate = `
<div>
        <div class="card mb-3 mt-3">
        
                    <div class="card-header title">
                        <div class="row">
                            <div class="col-lg-9 align-self-center">
                                <h3> {{ item.title }} </h3> <span> {{ item.bikeid }} </span>
                            </div>
                            <div class="col-lg-3">
                                <div class="float-right">
                                    <div class="bike-icon" v-bind:class=""></div>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div class="card-body">
                        <div class="card-text text-muted">
                            <small>
                                <span>Upload by
                                <router-link :to="'/user/' + item.user.userid">{{ item.user.username }}</router-link>
                                
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
                            <span class="badge badge-pill badge-info mr-1 float-right" v-for="tag in item.tags">{{ tag }}</span>
                        </div>
        
                    </div>
        

                        <div class="bottom-buttons">
                            <like v-bind:item="item"></like>
                            <button class="btn btn-primary rounded-circle int-buttons"> 
                                <a href="#" class="" ><i class="far fa-comment text-white""></i></a>
                            </button>
                            <button class="btn btn-primary rounded-circle int-buttons"> 
                                <a href="#" class="" ><i class="fas fa-share-alt text-white""></i></a>
                            </button>
                        </div>    

                    
                    
                </div>
        
                <comments v-bind:item="item"></comments>
                
</div>                
`;
        
export { BikeViewTemplate }