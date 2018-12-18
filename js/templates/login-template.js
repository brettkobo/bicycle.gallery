const SignUpTemplate = `
<div class="row">
  <div class="col d-flex justify-content-center">
    <form class="form-container" name="user" v-on:submit.prevent="submitForm()">
      <h1 class="title">Sign Up</h1>
      <p class="description">Enter your credentials below.</p>
      <div class="form-group">
        <label>Name</label>
        <input name="name" v-model="name" type="text" placeholder="Enter your name" required>
      </div>
      <div class="form-group">
        <label>Email</label>
        <input name="email" v-model="email" type="email" placeholder="Enter your email address" required>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input name="password" v-model="password" type="password" placeholder="Enter your password" required>
      </div>
      <button class="btn submit" type="submit">Sign Up</button>
    </form>

    <div class="signup-container">
      <p>Already have an account?</p><a class="link" href="/">&nbsp;Back to Sign In.</a>
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