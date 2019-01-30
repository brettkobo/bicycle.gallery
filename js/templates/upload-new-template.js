const UploadOldTemplate = `
<div>
    <div>
        <h5>Upload a Bicycle!</h5>
    </div>
    <div>
        <form class="form" role="form" autocomplete="off">
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label">Title:</label>
                <div class="col-lg-9">
                    <input id="title" v-model="title" class="form-control" type="text">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label">Description:</label>
                <div class="col-lg-9">
                    <input id="description" v-model="description" class="form-control" type="text">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label">Image URL:</label>
                <div class="col-lg-9">
                    <input id="image" v-model="image" class="form-control" type="text">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label">Tags:</label>
                <div class="col-lg-9">
                    <input id="tags" v-model="tags" class="form-control" type="text">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label">Category</label>
                <div class="col-lg-9">
                    <select v-model="attributes.category" class="form-control" size="0">
                    <option value="touring-bike">Touring Bike</option>
                    <option value="phatbike">Phat Bike</option>
                    <option value="cyclocross">Cyclocross</option>
                </select>
                </div>
            </div>

            <h3>Components</h3>

            <div class="form-group row">
                <label class="col-lg-2 col-form-label form-control-label">Brand:</label>
                <div class="col-lg-4">
                    <input id="brand" v-model="parts.brand" class="form-control component" type="text">
                </div>
                <label class="col-lg-2 col-form-label form-control-label">Frame:</label>
                <div class="col-lg-4">
                    <input id="frame" v-model="parts.frame" class="form-control component" type="text">
                </div>
            </div>

            <div class="form-group row">
                <label class="col-lg-2 col-form-label form-control-label">Wheelset:</label>
                <div class="col-lg-4">
                    <input id="wheelset" v-model="parts.wheelset" class="form-control component" type="text">
                </div>
                <label class="col-lg-2 col-form-label form-control-label">Groupo:</label>
                <div class="col-lg-4">
                    <input id="groupo" v-model="parts.groupo" class="form-control component" type="text">
                </div>
            </div>

            <div class="form-group row">
                <label class="col-lg-2 col-form-label form-control-label">Brakes:</label>
                <div class="col-lg-4">
                    <input id="brakes" v-model="parts.brakes" class="form-control component" type="text">
                </div>
            </div>

            <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label"></label>
                <div class="col-lg-12">
                    <button type="button" class="btn btn-primary" @click="addBike">Submit</button>
                </div>
            </div>
        </form>
    </div>
</div>
`                    

const UploadTemplate = `
<div>
    <h2> This is the {{ $route.params.id }} view.</h2>
    <router-view></router-view>
</div>
`
const UploadTabTemplate = `
<div>
        <form-wizard @on-complete="onComplete" 
                      shape="tab"
                      color="#3498db">
            <tab-content title="Personal details"
                         icon="fas fa-plus">
              My first tab content
            </tab-content>
            <tab-content title="Additional Info"
                         icon="ti-settings">
              My second tab content
            </tab-content>
            <tab-content title="Gold Bird"
                         icon="ti-check">
              Yuhuuu! This seems pretty damn simple
            </tab-content>
            <tab-content title="The Waurst"
                         icon="ti-check">
              Yuhuuu! This seems pretty damn simple
            </tab-content>
            <tab-content title="Exta Check"
                         icon="ti-check">
              Yuhuuu! This seems pretty damn simple
            </tab-content>
            
        </form-wizard>
</div>        
`


const UploadPictureTemplate = `
<div class="card">

    <div class="card-title minty-green">
        <h2>Bicycle Picture Upload</h2>
    </div>
    
    <div class="card-body">
        <div class="row">
            <div class="col-lg-6">
                <img class="img-fluid" src="https://cdn.shopify.com/s/files/1/0116/6732/products/chief_dark_bl_1024x1024.png?v=1479315448"></img>
            </div>
            <div class="col-lg-6">
                 <file-pond
                         name="test"
                        ref="pond"
        label-idle="Drop files here..."
        allow-multiple="true"
        accepted-file-types="image/jpeg, image/png"
        server="/api"
        v-bind:files="myFiles"
        v-on:init="handleFilePondInit"></file-pond>
            </div>
        </div>
    </div>    
</div>
`

const UploadAttributesTemplate = `
<div class="card">

    <div class="card-title minty-green">
        <h2>Bicycle Attributes</h2>
    </div>
    
    <div class="card-body">
        <div class="row">
            <div class="col-lg-6">
                <img class="img-fluid" src="https://cdn.shopify.com/s/files/1/0116/6732/products/chief_dark_bl_1024x1024.png?v=1479315448"></img>
            </div>
            <div class="col-lg-6">
                    <form class="form" role="form" autocomplete="off">
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Title:</label>
                            <div class="col-lg-9">
                                <input id="title" v-model="title" class="form-control" type="text">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Description:</label>
                            <div class="col-lg-9">
                                <input id="description" v-model="description" class="form-control" type="text">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Image URL:</label>
                            <div class="col-lg-9">
                                <input id="image" v-model="image" class="form-control" type="text">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Tags:</label>
                            <div class="col-lg-9">
                                <input id="tags" v-model="tags" class="form-control" type="text">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Category</label>
                            <div class="col-lg-9">
                                <select v-model="attributes.category" class="form-control" size="0">
                                <option value="touring-bike">Touring Bike</option>
                                <option value="phatbike">Phat Bike</option>
                                <option value="cyclocross">Cyclocross</option>
                            </select>
                            </div>
                        </div>
                    </form>
            </div>
        </div>
    </div>    
</div>
`

const UploadTypeTemplate = `
<div>
    <div class="row h-100 justify-content-center ml-auto d-flex align-items-center mt-4 mt-md-0">
        <div class="col-lg-3">
            <div class="card mx-auto">
                <div class="card-title text-center mellow-yellow">
                    Simple Biycle Upload
                </div>
                <div class="card-body text-center">
                    <p> Use this form if you would like to only upload a few attributes about your bike </p>
                    <router-link class="btn btn-danger" :to="{name: 'upload-photo'}" tag="button">Upload</router-link>
                </div>
            </div>    
        </div>
        
        <div class="col-lg-3">
            <div class="card mx-auto">
                <div class="card-title text-center melon-red">
                    Advance Bike Upload
                </div>
                <div class="card-body text-center">
                    <p> Use this form if you would like upload all attributes about your bike like the frame, wheels, and components. </p>
                    <router-link class="btn btn-danger" :to="{name: 'upload-photo'}" tag="button">Upload</router-link>
                </div>
            </div>    
        </div>
    </div>
</div>
`



export { UploadTemplate,
UploadTypeTemplate,
UploadTabTemplate,
UploadAttributesTemplate, 
UploadPictureTemplate };