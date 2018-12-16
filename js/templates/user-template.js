const UserTemplate = `
<div class="row mt-3">

    <div class="col-md-3">
        <div class="card">
            <div class="card-body">
                <div class="card-text">
                    <img class=" mx-auto d-block img-fluid rounded-circle mb-3 mx-aut" height="160" width="160" v-bind:src="user.avatar" alt="">
                    <h3 class="text-center"> {{user.firstname}} {{user.lastname}} </h3>
                    <p class="text-center"> {{ $route.params.id }} </p>
                    <div class="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                      <a class="nav-link">Home</a>
                      <a class="nav-link">Profile</a>
                      <a class="nav-link">Messages</a>
                      <a class="nav-link">Settings</a>
                    </div>
                </div>
            </div>    
        </div>    
    </div>
    
    <div class="col-md-9">
        <grid v-bind:item="item"></grid>
    </div>
</div>
`



export { UserTemplate };