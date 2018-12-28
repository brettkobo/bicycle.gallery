const UserTemplate = `
<div class="row mt-3">

    <div class="col-md-3">
        <div class="card">
            <div class="card-body">
                <div class="card-text">
                    <img class=" mx-auto d-block img-fluid rounded-circle mb-3 mx-aut" height="160" width="160" src="http://yatheatre.com/wp-content/uploads/2018/09/Unknown-Profile-Picture-Instagram-facebookanon-appadvice-.jpg" alt="">
                    <h3 class="text-center"> Username: {{ user.result_.username }} </h3>
                    <p class="text-center">User ID: {{ $route.params.id }} </p>
                    <p class="text-center">Email: {{ user.result_.email }} </p>
                    <p class="text-center">Age: {{ user.result_.age }} </p>
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
        <grid></grid>
    </div>
</div>
`



export { UserTemplate };