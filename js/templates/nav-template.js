const NavTopTemplate = `
<nav class="navbar navbar-expand-lg dark-blue text-white">
    <span class="navbar-brand">
             <img src="./images/bike-gallery-logo-edits.png" height='50px' alt="">
    </span>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse">

      <form class="form-inline mb-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
        <router-link tag="button" to="/search" class="btn btn-outline-light my-2 my-sm-0"> Search </router-link>
      </form>
      
      <ul class="navbar-nav ml-auto text-white">
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/feed">Feed</router-link>
        </li>
        <li class="nav-item dropdown" v-if="auth.loggedIn">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown">Your Garage</a>
              <div class="dropdown-menu purpleish-blue" aria-labelledby="navbarDropdownMenuLink">
                <router-link class="dropdown-item" :to="'/user/' + user.id"> Your Bikes </router-link>
                <router-link class="dropdown-item" :to="'/user/' + user.id + /settings/" data-toggle="dropdown"> Settings </router-link>
                <a class="dropdown-item" v-on:click="signOut()"> Sign Out </a>
              </div>
        </li>      
        <li class="nav-item dropdown" v-else>  
          <router-link class="nav-link" to="/signup" >Sign Up</router-link>
        </li>
      </ul>
    </div>
  </nav>`;
  
const NavBottomTemplate = `
<footer class="footer bg-white">
      <div class="container">
        <span>Made with <3 by Brett</span>
      </div>
</footer>
`
//<router-link to="/">bicycle.gallery</router-link>  
export { NavTopTemplate, NavBottomTemplate };