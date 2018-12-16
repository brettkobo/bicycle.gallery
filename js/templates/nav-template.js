const NavTopTemplate = `
<nav class="navbar navbar-expand-lg navbar-light bg-white">
    <span class="navbar-brand">
            <router-link to="/">bicycle.gallery</router-link>
    </span>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/feed">Feed</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/grid">Grid</router-link>
        </li>
      </ul>
      <form class="form-inline mb-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>`;
  
const NavBottomTemplate = `
<footer class="page-footer font-small bg-white">
  <div class="footer-copyright text-center py-3">
      <p>Made with <3 by Brett</p>
  </div>
</footer>
`
  
export { NavTopTemplate, NavBottomTemplate };