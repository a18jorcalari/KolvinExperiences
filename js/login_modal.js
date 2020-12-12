// window.onload = function () {
let buttonLogin = document.getElementById("button_login");
buttonLogin.addEventListener("click", function () {
    //Si las credenciales son correctas hacer esto:

    //Funcion que sirve para esconder el modal con la id login.
    $("#login").modal("hide");

    //Sustituye en navbar a modo logged
    let nav_optionsElement = document.getElementById("nav-options");
    nav_optionsElement.innerHTML = `
        <li class="nav-item">
        <a class="nav-link">Bienvenido, usuario</span></a>
        </li>
        <li class="nav-item">
            <a id="logout" class="nav-link" href="#">Logout</span></a>
        </li>
        `;

    //Sustituye en experiences-box a modo logged
    let experiences_boxElement = document.getElementById("experiences-box");
    experiences_boxElement.innerHTML = `
        <div class="container experiencies">
            <div class="card-deck">
                <div class="row row-cols-1 row-cols-md-3">
                    <div div class="col">
                        <div class="card h-100">
                            <div style="width: 100%; height: 200px; background-color: grey;"></div>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <div style="width: 100%; height: 200px; background-color: grey;"></div>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <div style="width: 100%; height: 200px; background-color: grey;"></div>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <div style="width: 100%; height: 200px; background-color: grey;"></div>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <div style="width: 100%; height: 200px; background-color: grey;"></div>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <div style="width: 100%; height: 200px; background-color: grey;"></div>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

    //Alert
    swal({
        title: "¡Bien hecho!",
        text: "Te has loguedo correctamente",
        icon: "success",
    });

    //Si no son correctos hace esto:
    // swal({
    //     title: "Error",
    //     text: "Ha habido un error",
    //     icon: "error",
    // });
});
// };
