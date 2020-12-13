//Hay que hacerlo de esta forma para poder crear eventos con elementos dinamicos
$("#nav-options").on("click", "#logout", function () {
    console.log("entra");
    let nav_optionsElement = document.getElementById("nav-options");
    nav_optionsElement.innerHTML = `
        <li class="nav-item">
            <a class="nav-link" data-toggle="modal" data-target="#login" href="#">Log In</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="modal" data-target="#register" href="#">Register</span></a>
        </li>
        `;

    let experiences_boxElement = document.getElementById(
        "cards-tabs-experiences"
    );
    experiences_boxElement.innerHTML = `
        <div class="container experiencies">
            <div class="card-deck">
                <div class="row row-cols-1 row-cols-md-3">
                    <div div class="col">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                            </div>
                        </div>
                    </div>
                    <div div class="col">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                            </div>
                        </div>
                    </div>
                    <div div class="col">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                            </div>
                        </div>
                    </div>
                    <div div class="col">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                            </div>
                        </div>
                    </div>
                    <div div class="col">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                            </div>
                        </div>
                    </div>
                    <div div class="col">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
});
