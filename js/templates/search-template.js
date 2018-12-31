const SearchTemplate = `
<div>
    <div class="row">
      <div class="input-group mx-auto">
        <input type="text" v-model='searchValue' class="form-control" placeholder="Search this blog">
        <div class="input-group-append">
          <button class="btn btn-secondary" @click='searchResults' type="button">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
    
    <div>
        <grid :results="results"></grid>
    </div>    
    
</div>
`
export { SearchTemplate };