function noLoggedExperiencesRender() {
    //Ningun usuario logged:

    axios
        .get("models/ExperienceApi.php", {
            params: {
                query: 0,
            },
        })
        .then(function (res) {
            console.log(res.data);
            let nav_optionsElement = document.getElementById("nav-options");
            nav_optionsElement.innerHTML = `
                <li class="nav-item">
                    <a class="nav-link" data-toggle="modal" data-target="#login_modal" href="#">Log In</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="modal" data-target="#register_modal" href="#">Register</span></a>
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
    navOptionHtml = "";

    //Aqui cambiarlo por type de bd
    if (res.data[0].type == 2) {
        navOptionHtml += `
        <li class="nav-item">
            <a class="nav-link" data-toggle="modal" data-target="#adminpanel_modal" href="#">Panel de administrador</span></a>
        </li>`;
    }

    navOptionHtml += `
    <li class="nav-item">
        <a class="nav-link" data-toggle="modal" data-target="#useraccount_modal" href="#">Bienvenido, ${res.data[0].id_user}</span></a>
    </li>
    <li class="nav-item">
        <a id="logout" class="nav-link" href="#">Logout</span></a>
    </li>`;

    nav_optionsElement.innerHTML = navOptionHtml;

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
        .get("models/ExperienceApi.php", {
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
        .get("models/ExperienceApi.php", {
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

function add_button_addExperience_function() {
    document.getElementById("showModal_addExperience_button_box").innerHTML = `
        <button
            id="showModal_addExperience_button"
            data-toggle="modal"
            data-target="#add_experience_modal"
        >
            <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
        `;
}

function remove_button_addExperience_function() {
    document.getElementById("showModal_addExperience_button_box").innerHTML =
        "";
}

// Comprueba si existe o no usuario logged. Dependiendo mostrará una vista u otra
axios.get("models/isloggedApi.php").then(function (res) {
    console.log(res.data);
    if (res.data == false) {
        console.log("no existe usuario logged");
        noLoggedExperiencesRender();
    } else {
        console.log("existe usuario logged");
        console.log(res);
        loggedExperiencesRender(res);
        add_button_addExperience_function();
    }
});

//LOGIN FUNCTION
document.getElementById("button_login").addEventListener("click", function () {
    let user_id = document.getElementById("validation_username_login").value;
    let password = document.getElementById("validation_password_login").value;
    console.log(user_id);
    console.log(password);
    axios
        .get("models/usersApi.php", {
            params: {
                user: user_id,
                password: password,
                query: 1,
            },
        })
        .then(function (res) {
            console.log(res);

            //Si las credenciales son correctas
            if (res.data != false) {
                //Funcion que sirve para esconder el modal con la id login.
                $("#login_modal").modal("hide");
                //LoggedRender

                loggedExperiencesRender(res);
                add_button_addExperience_function();

                //Alert
                swal({
                    title: "¡Bien hecho!",
                    text: "Te has loguedo correctamente",
                    icon: "success",
                });
            } else {
                alert("Error login1");
            }
        })
        .catch(function (error) {
            alert("Error login2");
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
            .get("models/usersApi.php", {
                params: {
                    query: 3,
                    idUser: id_user,
                    name: name,
                    password: password,
                    type: 1,
                    email: email,
                },
            })
            .then(function (res) {
                if (res.data == "Usuario registrado correctamente") {
                    $("#register_modal").modal("hide");

                    //Alert
                    swal({
                        title: "¡Bien hecho!",
                        text:
                            "Usuario creado satisfactoriamente. Ahora inicia sesión.",
                        icon: "success",
                    });
                } else {
                    alert(res.data);
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
        .get("models/usersApi.php", {
            params: {
                newIdUser: newIdUser,
                newName: newName,
                newPassword: newPassword,
                newType: 1,
                newEmail: newEmail,
                query: 2,
            },
        })
        .then(function (result) {
            console.log(result);
            if (result.data == "ok") {
                $("#useraccount_modal").modal("hide");

                //Alert
                loggedExperiencesRender(result);

                swal({
                    title: "¡Bien hecho!",
                    text: "Has actualizado tu información correctamente.",
                    icon: "success",
                });
            } else {
                alert(result.data);
            }
        });
});

//Add experience function
// $("#nav-showModal_addExperience_button_box").on(
//     "click",
//     "#showModal_addExperience_button",
//     function () {
//         console.log("click");
//     }
// );

//Logout function
//Hay que hacerlo de esta forma para poder crear eventos con elementos dinamicos
$("#nav-options").on("click", "#logout", function () {
    console.log("Boton logout");
    axios.get("models/logoutApi.php");
    console.log("Usuario logout");
    //Alert
    swal({
        title: "¡Bien hecho!",
        text: "Has guardado cerrado tu sesión correctamente.",
        icon: "success",
    });
    noLoggedExperiencesRender();
    remove_button_addExperience_function();
});
