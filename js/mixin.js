// define a mixin object
export const datMixin = {
  methods: {
        unCamelCase(text) {
         var temp = text
         .replace(/([A-Z])/g, ' $1')
         .replace(/^./, function(str){ return str.toUpperCase(); })
         return(temp)
        }
  }
}