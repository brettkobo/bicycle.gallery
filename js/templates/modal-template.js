const UploadModalTemplate = `
        <transition name="modal">
            <div class="modal-mask modal">
                <div class="modal-wrapper">
                    <div class="modal-container">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Upload a Bicycle!</h5>
                            <button type="button" class="close" @click="$emit('close')" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
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
                </div>
            </div>
        </transition>
`;

export { UploadModalTemplate };