/*const BikeUploadTemplate = `
<div class="upload-bike">
    <button class="btn btn-primary rounded-circle upload-bike-btn" id="show-modal" @click="$emit('show-modal')"">
        <i class="fas fa-plus"></i>
    </button>
</div>
`
*/
const BikeUploadTemplate = `
<div class="upload-bike">
   <router-link to="/upload" class="btn btn-primary rounded-circle upload-bike-btn"  tag="button">
        <i class="fas fa-plus"></i>
    </router-link>
</div>
`

export { BikeUploadTemplate }