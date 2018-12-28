const SignUpTemplate = `
<div class="row d-flex justify-content-center align-items-center my-9">
<div class="col-4">
  <div class="card">
      <div class="card-body">
        <form class="form-container" v-on:submit.prevent="submitForm()">
          <h1 class="title">Sign Up</h1>
          <p class="description">Enter your credentials below.</p>
          <div class="form-group">
            
            <input name="username" v-model="username" type="text" placeholder="User Name" required>
          </div>
          <div class="form-group">
            <input name="email" v-model="email" type="email" placeholder="Email Address" required>
          </div>
          <div class="form-group">
            <input name="password" v-model="password" type="password" placeholder="Password" required>
          </div>
          <button class="btn btn-primary submit" type="submit">Sign Up</button>
        </form>
    
        <div class="signup-container">
          <p>Already have an account?</p><a class="link" href="/">&nbsp;Back to Sign In.</a>
        </div>
    </div>
  </div>
  </div>
</div>
`
const WelcomeTemplate = ` 
<div>
  <h1 class="text-center"> Welcome to biycle.gallery </h1>
  <button class="btn d-flex justify-content-center"> <router-link to="/feed">Take me to the Feed!</router-link> </button>
</div>
`

export { SignUpTemplate, WelcomeTemplate }