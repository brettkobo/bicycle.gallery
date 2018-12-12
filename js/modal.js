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
                        <form>
                             <div class="form-group">
                                <label class="col-form-label">Title:</label>
                                <input v-model="title" type="text" class="form-control" placeholder="">
                              </div>
                             <div class="form-group">
                                <label class="col-form-label">Description:</label>
                                <input v-model="description" type="text" class="form-control" placeholder="">
                              </div>
                             <div class="form-group">
                                <label class="col-form-label">Image URL:</label>
                                <input v-model="image" type="text" class="form-control" placeholder="">
                              </div>
                              <div class="form-group">
                                <label class="col-form-label">Tags:</label>
                                <input v-model="tags" type="text" class="form-control" placeholder="">
                              </div>
                              <button type="button" class="btn btn-primary" @click="addBike">Submit</button>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary">Close</button>
                      </div>
                </div>
              </div>
            </div>
          </transition>