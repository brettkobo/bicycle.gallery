import { SignUpTemplate, WelcomeTemplate } from './templates/sign-up-template.js'


const SignUp = {
    name: 'sign-up',
    template: SignUpTemplate,
    methods: {
        submitForm: async function() {
              var auth = WeDeploy.auth('auth-bicyclegallery.wedeploy.io');
            
              await auth.createUser({
                email: this.email,
                username: this.username,
                age: Math.round(Math.random()*100),
                password: this.password
              })
      
              await auth.signInWithEmailAndPassword(this.email, this.password);
              console.log("Authentication Worked");
              
              var user = await WeDeploy.auth('auth-bicyclegallery.wedeploy.io').currentUser.data_;
              this.$root.$data.user = user;
              this.$root.$data.auth.loggedIn = true;
              this.$router.replace({ path: '/welcome' });
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

