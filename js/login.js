import { SignUpTemplate, WelcomeTemplate } from './templates/login-template.js'


const SignUp = {
    template: SignUpTemplate,
    methods: {
        submitForm() {
            var auth = WeDeploy.auth('auth-bicyclegallery.wedeploy.io');
            
              var email = this.email;
              var password = this.password;
            
              auth.createUser({
                email: this.email,
                name: this.name,
                age: 23,
                password: this.password
              })
              .then(function(){
                auth.signInWithEmailAndPassword(email, password);
              });
              
              var currentUser = auth.currentUser
              
              if(currentUser) {
                this.$root.$data.user = currentUser;  
                this.$router.replace({ path: '/welcome' });
              }
              
              console.log("User accounted created " + this.email + " " + this.password)
              
            
              
              console.log("Signed in with" + this.email);
            },
        },            
    data: function() {
        return {
          email: '',
          name: '',
          password: '',
          age: ''
        }
    },
}

const Welcome = {
    template: WelcomeTemplate,
    methods: {},
    data: function() {
        return {
        }
    },
}


export { SignUp, Welcome };

