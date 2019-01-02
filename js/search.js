import { SearchTemplate } from './templates/search-template.js'
import { Grid } from './grid.js'

const Search = {
    name: 'search',
    template: SearchTemplate,
    methods: {
        searchResults: function() {
        
        var searchValue = '*' + this.searchValue + '*'
        
        WeDeploy
         .data("https://data-bicyclegallery.wedeploy.io/")
         .wildcard('*', searchValue)
         .get('bikes')
         .then((data) => {
             console.log('search happened.');
             console.log(data);
            this.results = data;
        });
        
//        if(Object.keys(this.results).length === 0) {
//            return this.hasResults = false
//        } else
//            return this.hasResults = true
        
        
        }
    },
    data: function() {
        return {
            searchValue: '',
            results: [],
        }
    },
    components: {
    'grid': Grid
    }
}

export { Search }