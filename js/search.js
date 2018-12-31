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
        
        }
    },
    data: function() {
        return {
            searchValue: '',
            results: ''
        }
    },
    components: {
    'grid': Grid
    }
}

export { Search }