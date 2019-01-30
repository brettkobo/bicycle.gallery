
const UploadBikeViewTemplate = `
<div>
        <div class="card mb-3 mt-3">
        
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
                            <img v-bind:src="item.user.userAvatar" class="rounded-circle" height='50px' width='50px'></img>
                            <small>
                                <span>Upload by
                                <router-link :to="'/user/' + item.user.userId">{{ item.user.userName }}</router-link>
                                
                                on {{ item.dateAdded }}</span>
                            </small>
                        </div>      
                        <div class="row">
        
                            <div class="col-lg-6 card-text mb-1 mx-auto align-self-center">
                                <img class="rounded mx-auto d-block img-fluid" v-bind:src="item.images"></img>
                            </div>
        
                            <div class="col-lg-6 card-text mb-1">
        
                                <h3>Description:</h3>
                                <p>{{ item.description }}</p>
        
                                <h3>Components:</h3>
                                <table class="table">
                                    <tr v-for="(value, key) in item.attributes" v-if="value !== null">
                                        <td class="font-weight-bold">{{ unCamelCase(key) }}:</td>
                                        <td>{{ value }}</td>
                                    </tr>
                                </table>
                                <h3>Tags:</h3> 
                                    <span class="badge badge-pill badge-info mr-1" v-for="tag in item.tags">{{ tag }}</span>
                            </div>
                        </div>
        
                        <div class="card-text">
                            <b-btn class="float-right"
                              @click="showCollapse = !showCollapse" 
                              :class="showCollapse ? 'collapsed' : null"
                              variant="outline-secondary">
                                Display All Parts
                             </b-btn>
                        
                            
                        </div>
                        
                    </div>    
                    
                          
                        
                          <!-- elements to collapse -->
                          <div role="tablist">
                          
                                <bike-part-dropdown 
                                partID="frame" 
                                :parts="item.parts.frame"
                                :show='showCollapse'>
                                </bike-part-dropdown>
                                
                                <bike-part-dropdown 
                                partID="wheels" 
                                :parts="item.parts.wheels"
                                :show='showCollapse'>
                                </bike-part-dropdown>
                                                          
                            
                                <bike-part-dropdown 
                                partID="drivetrain" 
                                :parts="item.parts.drivetrain"
                                :show='showCollapse'>
                                </bike-part-dropdown>
                                
                                <bike-part-dropdown 
                                partID="cockpit" 
                                :parts="item.parts.cockpit"
                                :show='showCollapse'>
                                </bike-part-dropdown>
                                
                                <bike-part-dropdown 
                                partID="accessories" 
                                :parts="item.parts.accessories"
                                :show='showCollapse'>
                                </bike-part-dropdown>
                            
                            
                          </div>
                    
                      <div class="mb-2"> </div>
                    
                      <social-buttons v-bind:item="item"></social-buttons>
                      
                </div>
        
                <comments v-bind:item="item"></comments>
                
</div>                
`;

const BikePartDropdownTemplate = `
 <b-card no-body class='rounded-0 border-0'>
    <b-card-header header-tag="header" class="toggle-hover rounded-0 border-0 px-2" v-b-toggle="partID" role="tab">
        <span class='font-weight-bold py-3 px-1'> <i class="fas fa-plus fa-xs fa-fw"></i><span class="ml-2"> {{ unCamelCase(partID) }}</span></span>
<!--      <b-btn block href="#" v-b-toggle="partID" variant="outline-secondary">+ {{ unCamelCase(partID) }}</b-btn> -->
    </b-card-header>
    <b-collapse :id="partID" role="tabpanel" v-model="show">
      <b-card-body>
        <p class="card-text">
          
          <table class="table">
              <tr v-for="(value, key) in parts" v-if="value !== null">
                  <td class="font-weight-bold">{{ unCamelCase(key) }}:</td>
                  <td>{{ value }}</td>
              </tr>
          </table>
        </p>
      </b-card-body>
    </b-collapse>
  </b-card>
`


        
export { BikeViewTemplate, BikePartDropdownTemplate }