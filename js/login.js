import { SignUpTemplate, WelcomeTemplate } from './templates/login-template.js'




// Start by defining a constant, rather than using Vue.component()
const SignUp = {
    template: SignUpTemplate,
    methods: {
        signIn() {
              auth.signInWithEmailAndPassword(user.email.value, user.password.value)
              .then(function() {
                router.push({ path: '/welcome' });
              })
              .catch(function() {
                alert('Sign-in failed. Try another email/password.');
              });
            },
        submitForm() {

            var auth = WeDeploy.auth('auth-bicyclegallery.wedeploy.io');
            
              auth.createUser({
                email: this.email,
                name: this.name,
                password: this.password
              })
              .then(function() {
                    auth.signInWithEmailAndPassword(this.email, this.password)
                      .then(function() {
                        router.push({ path: '/welcome' });
                      })
                      .catch(function() {
                        alert('Sign-in failed. Try another email/password.');
                      });
                user.reset();
              })
              .catch(function() {
                alert('Sign-up failed. Try another email.');
                user.reset();
              });
              console.log(this.email + this.name + this.password + "worked");
                },
        },            
    data: function() {
        return {
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

