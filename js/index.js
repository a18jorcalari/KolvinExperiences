function noLoggedExperiencesRender() {
    //Ningun usuario logged:

    axios
        .get("models/expApi.php", {
            params: {
                query: 0,
            },
        })
        .then(function (res) {
            let nav_optionsElement = document.getElementById("nav-options");
            nav_optionsElement.innerHTML = `
                <li class="nav-item">
                    <a class="nav-link" data-toggle="modal" data-target="#login" href="#">Log In</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="modal" data-target="#register" href="#">Register</span></a>
                </li>
                `;

            let cards_tabs_experiencesElement = document.getElementById(
                "cards-tabs-experiences"
            );
            let htmlText = `
                <div class="content-row experiencies">
                    <div class="row">`;
            for (let i = 0; i < res.data.length; i++) {
                let timeStampJson = res.data[i].created;
                var d = new Date(Date.parse(timeStampJson));
                htmlText += `
                    <div class="col-sm-12 col-lg-4 card-container">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">${res.data[i].title}</h5>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Created ${d.getDate()}-${d.getMonth()}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}</small>
                            </div>
                        </div>
                    </div>   
                    `;
            }

            htmlText += `      
            </div> 
        </div>`;

            cards_tabs_experiencesElement.innerHTML = htmlText;
        });
}

function loggedExperiencesRender(res) {
    /************ NORMAL USER VIEW ******************/

    //Sustituye en navbar a modo user logged
    //Eliminar li de admin para normal user
    let nav_optionsElement = document.getElementById("nav-options");
    nav_optionsElement.innerHTML = `
        <li class="nav-item">
            <a class="nav-link" data-toggle="modal" data-target="#adminpanel" href="#">Panel de administrador</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="modal" data-target="#useraccount" href="#">Bienvenido, ${res.data[0].id_user}</span></a>
        </li>
        <li class="nav-item">
            <a id="logout" class="nav-link" href="#">Logout</span></a>
        </li>
        `;

    //Añade los tabs de mis experiencias o todas las experiencias.
    let tabs_experiencesElement = document.getElementById(
        "cards-tabs-experiences"
    );
    tabs_experiencesElement.innerHTML = `
        <div class="d-flex">
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdown1">
                    <button class="dropdown-item" type="button">Action</button>
                    <button class="dropdown-item" type="button">Another action</button>
                    <button class="dropdown-item" type="button">Something else here</button>
                </div>
            </div>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdown2">
                    <button class="dropdown-item" type="button">Action</button>
                    <button class="dropdown-item" type="button">Another action</button>
                    <button class="dropdown-item" type="button">Something else here</button>
                </div>
            </div>
        </div>
        
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a href="#myexperiences" class="nav-link active" data-toggle="tab">Mis experiencias</a>
            </li>
            <li class="nav-item">
                <a href="#allexperiences" class="nav-link" data-toggle="tab">Todas las experiencias</a>
            </li>
        </ul>

        <div class="tab-content">
            <div class="tab-pane fade show active" id="myexperiences">
                <div id="myexperiences-box">
                </div>
            </div>
            <div class="tab-pane fade" id="allexperiences">
                <div id="allexperiences-box">
                </div>
            </div>
        </div>
        `;

    //CARDS USER EXPERIENCES

    //My experiences
    let myexperiences_boxElement = document.getElementById("myexperiences-box");

    axios
        .get("models/expApi.php", {
            params: {
                user: res.data[0].id_user,
                query: 1,
            },
        })
        .then(function (result) {
            let htmlText = `
            <div class="content-row experiencies">
                <div class="row">`;
            for (let i = 0; i < result.data.length; i++) {
                let timeStampJson = result.data[i].created;
                var d = new Date(Date.parse(timeStampJson));
                htmlText += `
                        <div class="col-sm-12 col-lg-4 card-container">
                            <div class="card h-100">
                                <div style="width: 100%; height: 200px; background-color: grey;"></div>
                                <div class="card-body">
                                    <h5 class="card-title">${
                                        result.data[i].title
                                    }</h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Created ${d.getDate()}-${d.getMonth()}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}</small>
                                </div>
                            </div>
                        </div>   
                        `;
            }

            htmlText += `      
                </div> 
            </div>`;

            myexperiences_boxElement.innerHTML = htmlText;
        });

    //All experiences
    let allexperiences_boxElement = document.getElementById(
        "allexperiences-box"
    );
    axios
        .get("models/expApi.php", {
            params: {
                query: 0,
            },
        })
        .then(function (result2) {
            let htmlText2 = `
                <div class="content-row experiencies">
                    <div class="row">`;
            for (let i = 0; i < result2.data.length; i++) {
                let timeStampJson = result2.data[i].created;
                var d = new Date(Date.parse(timeStampJson));

                htmlText2 += `
                        <div class="col-sm-12 col-lg-4 card-container">
                            <div class="card h-100">
                                <div style="width: 100%; height: 200px; background-color: grey;"></div>
                                <div class="card-body">
                                    <h5 class="card-title">${
                                        result2.data[i].title
                                    }</h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Created ${d.getDate()}-${d.getMonth()}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}</small>
                                </div>
                            </div>
                        </div>   
                        `;
            }

            htmlText2 += `      
                    </div> 
                </div>`;

            allexperiences_boxElement.innerHTML = htmlText2;
        });
}

// Comprueba si existe o no usuario logged. Dependiendo mostrará una vista u otra
axios.get("models/isloggedApi.php").then(function (res) {
    if (res.data == false) {
        console.log("no existe usuario logged");
        noLoggedExperiencesRender();
    } else {
        console.log("existe usuario logged");

        console.log(res);
        loggedExperiencesRender(res);
    }
});

//Al hacer click a button login comprabar en api si es correcta, entonces si es cierta que renderice la vista del user logged.
document.getElementById("button_login").addEventListener("click", function () {
    axios
        .get("models/loginApi.php", {
            params: {
                user: document.getElementById("validation_username_login")
                    .value,
                password: document.getElementById("validation_password_login")
                    .value,
                query: 0,
            },
        })
        .then(function (res) {
            //Si las credenciales son correctas
            if (res.data != false) {
                //Funcion que sirve para esconder el modal con la id login.
                $("#login").modal("hide");
                //LoggedRender
                console.log(res);

                loggedExperiencesRender(res);
                //Alert
                swal({
                    title: "¡Bien hecho!",
                    text: "Te has loguedo correctamente",
                    icon: "success",
                });
            } else {
                alert("Error login");
            }
        })
        .catch(function (error) {
            console.log("ERROR");
        });
});

//Register function
document
    .getElementById("button_register")
    .addEventListener("click", function () {
        //Si el usuario se ha creado correctamente hacer esto:
        $("#register").modal("hide"); //Funcion que sirve para esconder el modal con la id Register.

        let id_user = document.getElementById("validation_username_register")
            .value;
        let name = document.getElementById("validation_name_register").value;
        let password = document.getElementById("validation_password_register")
            .value;
        let email = document.getElementById("validation_email_register").value;

        console.log(id_user);
        console.log(name);
        console.log(password);
        console.log(email);

        axios
            .get("models/registerUserApi.php", {
                params: {
                    query: 3,
                    id_user: id_user,
                    name: name,
                    password: password,
                    type: 2,
                    email: email,
                },
            })
            .then(function (res) {
                if (res.data == "ok") {
                    //Alert
                    swal({
                        title: "¡Bien hecho!",
                        text:
                            "Usuario creado satisfactoriamente. Ahora inicia sesión.",
                        icon: "success",
                    });
                } else {
                    alert("ERROR");
                }
            });
    });

//Update account function
document.getElementById("button_update").addEventListener("click", function () {
    $("#useraccount").modal("hide");
    let newIdUser = document.getElementById("validation_username_account")
        .value;
    let newName = document.getElementById("validation_name_account").value;
    let newPassword = document.getElementById("validation_password_account")
        .value;
    let newEmail = document.getElementById("validation_email_account").value;

    console.log(newIdUser);
    console.log(newName);
    console.log(newPassword);
    console.log(newEmail);

    axios
        .get("models/updateAccountApi.php", {
            params: {
                newIdUser: newIdUser,
                newName: newName,
                newPassword: newPassword,
                newType: 2,
                newEmail: newEmail,
                query: 1,
            },
        })
        .then(function (result) {
            if (result.data == "ok") {
                //Alert
                swal({
                    title: "¡Bien hecho!",
                    text: "Has guardado tu información correctamente.",
                    icon: "success",
                });
            } else {
                alert("ERROR");
            }
        });
});

//Logout function
//Hay que hacerlo de esta forma para poder crear eventos con elementos dinamicos
$("#nav-options").on("click", "#logout", function () {
    console.log("Boton logout");
    axios.get("models/logoutApi.php");
    console.log("Usuario deslogged");
    //Alert
    swal({
        title: "¡Bien hecho!",
        text: "Has guardado cerrado tu sesión correctamente.",
        icon: "success",
    });
    noLoggedExperiencesRender();
});
