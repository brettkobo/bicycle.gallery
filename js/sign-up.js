import { SignUpTemplate, WelcomeTemplate } from './templates/sign-up-template.js'


const SignUp = {
    template: SignUpTemplate,
    methods: {
        submitForm() {
            var auth = WeDeploy.auth('auth-bicyclegallery.wedeploy.io');
            
              auth.createUser({
                email: this.email,
                username: this.username,
                age: Math.round(Math.random()*100),
                password: this.password
              })
              .then(() => {
                auth.signInWithEmailAndPassword(this.email, this.password);
                console.log("Authentication Worked");
//                var isAuth = true;
//                return(isAuth);
              })
              .then(() => {
                  setTimeout(() => {
                    var user = WeDeploy.auth('auth-bicyclegallery.wedeploy.io').currentUser.data_;
                    this.$root.$data.user = user;
                    this.$root.$data.auth.loggedIn = true;
                    this.$router.replace({ path: '/welcome' });
                }, 1000);
              });
          
/*            var user_data = WeDeploy.auth('auth-bicyclegallery.wedeploy.io').currentUser;
            console.log(user_data);
              
              //console.log(currentUser)
              auth.onSignIn(() => {
                this.$root.$data.user = user;
                this.$root.$data.auth.loggedIn = true;
              })
              
              
              var currentUser = localStorage.currentUser
              
              if(isAuth) {
                this.$root.$data.user = currentUser;
                this.$root.$data.auth.loggedIn = true;
                console.log("Current user set to Root");
                this.$router.replace({ path: '/welcome' });
              }
*/
              //console.log("User accounted created " + this.email + " " + this.password)
              //console.log("Signed in with" + this.email);
            },
        },            
    data: function() {
        return {
          email: '',
          username: '',
          password: '',
          age: ''
        }
    },
}

const Welcome = {
    template: WelcomeTemplate,
    methods: {
        getCurrentUser: function() {
            //var data =  WeDeploy.auth('auth-bicyclegallery.wedeploy.io').currentUser.data_;
            var data =  JSON.parse(localStorage.currentUser);
            return data;
        }
     },
/*    created: function() {
      console.log('This welcome pages has been created.')  
      console.log(this.getCurrentUser());
      this.$root.$data.user = this.getCurrentUser();
      
    },
*/    
    data: function() {
        return {
        }
    },
}


export { SignUp, Welcome };

