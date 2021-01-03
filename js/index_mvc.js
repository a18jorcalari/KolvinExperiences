$(function () {
    var model = {
        // init: function () {},

        userIsLogged: function () {
            axios.get("models/isloggedApi.php").then(function (res) {
                return res;
            });
        },

        selectOneUser: function () {
            axios
                .get("models/usersApi.php", {
                    params: {
                        query: 0,
                    },
                })
                .then(function (res) {
                    return res;
                });
        },

        selectAllExperiences: function () {
            axios
                .get("models/ExperienceApi.php", {
                    params: {
                        query: 0,
                    },
                })
                .then(function (result) {
                    return result;
                });
        },

        selectAllExperiencesByUser: function (userResult) {
            axios
                .get("models/ExperienceApi.php", {
                    params: {
                        user: userResult.data[0].id_user,
                        query: 1,
                    },
                })
                .then(function (result) {
                    return result;
                });
        },
    };

    var controller = {
        init: function () {
            // model.init();
            view.init();
        },

        userIsLogged: function () {
            if (model.userIsLogged().data) {
                view.userLogged();
            } else {
                view.userNoLogged();
            }
        },

        getAllExperiences: function () {
            return model.selectAllExperiences();
        },

        getAllExperiencesByUser: function (userResult) {
            return model.selectAllExperiencesByUser(userResult);
        },
    };

    var view = {
        init: function () {
            controller.userIsLogged();

            // login();
            // register();
            // editAccount();
            // addExperience();
            // logout();
        },

        userNoLogged: function () {
            let getAllExperiencesResult = controller.getAllExperiences();
            console.log(getAllExperiencesResult.data);
            this.headerNoLogged();

            let cards_tabs_experiencesElement = document.getElementById(
                "cards-tabs-experiences"
            );
            let htmlString = `
                <div class="content-row experiencies">
                    <div class="row">`;
            for (let i = 0; i < getAllExperiencesResult.data.length; i++) {
                let timeStampJson = getAllExperiencesResult.data[i].created;
                var d = new Date(Date.parse(timeStampJson));
                htmlString += `
                        <div class="col-sm-12 col-lg-4 card-container">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">${
                                        getAllExperiencesResult.data[i].title
                                    }</h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Created ${d.getDate()}-${d.getMonth()}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}</small>
                                </div>
                            </div>
                        </div>   
                        `;
            }

            htmlString += `
                    </div> 
                </div>`;

            cards_tabs_experiencesElement.innerHTML = htmlString;
        },

        userLogged: function () {
            let getUserLoggedResult = controller.getUserLogged();
            console.log(getUserLoggedResult);
            this.userLoggedRender(getUserLoggedResult);
            this.add_addExperiences_button();
        },

        userLoggedRender: function (res) {
            /************ NORMAL USER VIEW ******************/

            this.headerLogged(res);

            this.addTabExperiences();

            //CARDS USER EXPERIENCES

            //My experiences
            this.myExperiences(res);

            //All experiences
            this.allExperiences();
        },

        headerLogged: function (res) {
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
        },

        headerNoLogged: function () {
            let nav_optionsElement = document.getElementById("nav-options");
            nav_optionsElement.innerHTML = `
                <li class="nav-item">
                    <a class="nav-link" data-toggle="modal" data-target="#login_modal" href="#">Log In</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="modal" data-target="#register_modal" href="#">Register</span></a>
                </li>
                `;
        },

        addTabExperiences: function () {
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
        },

        myExperiences: function (userResult) {
            let myexperiences_boxElement = document.getElementById(
                "myexperiences-box"
            );

            let getAllExperiencesByUserResult = controller.getAllExperiencesByUser(
                userResult
            );

            console.log(getAllExperiencesByUserResult);
            let htmlText = `
                        <div class="content-row experiencies">
                            <div class="row">`;
            for (
                let i = 0;
                i < getAllExperiencesByUserResult.data.length;
                i++
            ) {
                let timeStampJson =
                    getAllExperiencesByUserResult.data[i].created;
                var d = new Date(Date.parse(timeStampJson));
                htmlText += `
                                <div class="col-sm-12 col-lg-4 card-container">
                                    <div class="card h-100">
                                        <div style="width: 100%; height: 200px; background-color: grey;"></div>
                                        <div class="card-body">
                                            <h5 class="card-title">${
                                                getAllExperiencesByUserResult
                                                    .data[i].title
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
        },

        allExperiences: function () {
            let allexperiences_boxElement = document.getElementById(
                "allexperiences-box"
            );

            let getAllExperiencesResult = controller.getAllExperiences();

            let htmlString = `
                <div class="content-row experiencies">
                    <div class="row">`;
            for (let i = 0; i < getAllExperiencesResult.data.length; i++) {
                let timeStampJson = getAllExperiencesResult.data[i].created;
                var d = new Date(Date.parse(timeStampJson));

                htmlString += `
                        <div class="col-sm-12 col-lg-4 card-container">
                            <div class="card h-100">
                                <div style="width: 100%; height: 200px; background-color: grey;"></div>
                                <div class="card-body">
                                    <h5 class="card-title">${
                                        getAllExperiencesResult.data[i].title
                                    }</h5>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Created ${d.getDate()}-${d.getMonth()}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}</small>
                                </div>
                            </div>
                        </div>   
                        `;
            }

            htmlString += `      
                    </div> 
                </div>`;

            allexperiences_boxElement.innerHTML = htmlString;
        },

        // login: function () {
        //     document
        //         .getElementById("button_login")
        //         .addEventListener("click", function () {
        //             let user_id = document.getElementById(
        //                 "validation_username_login"
        //             ).value;
        //             let password = document.getElementById(
        //                 "validation_password_login"
        //             ).value;
        //             console.log(user_id);
        //             console.log(password);
        //             axios
        //                 .get("models/usersApi.php", {
        //                     params: {
        //                         user: user_id,
        //                         password: password,
        //                         query: 1,
        //                     },
        //                 })
        //                 .then(function (res) {
        //                     console.log(res);

        //                     // Si las credenciales son correctas
        //                     if (res.data != false) {
        //                         //Funcion que sirve para esconder el modal con la id login.
        //                         $("#login_modal").modal("hide");
        //                         //LoggedRender

        //                         loggedExperiencesRender(res);
        //                         add_button_addExperience_function();

        //                         //Alert
        //                         swal({
        //                             title: "¡Bien hecho!",
        //                             text: "Te has loguedo correctamente",
        //                             icon: "success",
        //                         });
        //                     } else {
        //                         alert("Error login1");
        //                     }
        //                 })
        //                 .catch(function (error) {
        //                     alert("Error login2");
        //                 });
        //         });
        // },
        // register: function () {
        //     document
        //         .getElementById("button_register")
        //         .addEventListener("click", function () {
        //             //Si el usuario se ha creado correctamente hacer esto:
        //             $("#register").modal("hide"); //Funcion que sirve para esconder el modal con la id Register.

        //             let id_user = document.getElementById(
        //                 "validation_username_register"
        //             ).value;
        //             let name = document.getElementById(
        //                 "validation_name_register"
        //             ).value;
        //             let password = document.getElementById(
        //                 "validation_password_register"
        //             ).value;
        //             let email = document.getElementById(
        //                 "validation_email_register"
        //             ).value;

        //             console.log(id_user);
        //             console.log(name);
        //             console.log(password);
        //             console.log(email);

        //             axios
        //                 .get("models/usersApi.php", {
        //                     params: {
        //                         query: 3,
        //                         idUser: id_user,
        //                         name: name,
        //                         password: password,
        //                         type: 1,
        //                         email: email,
        //                     },
        //                 })
        //                 .then(function (res) {
        //                     if (
        //                         res.data == "Usuario registrado correctamente"
        //                     ) {
        //                         $("#register_modal").modal("hide");

        //                         //Alert
        //                         swal({
        //                             title: "¡Bien hecho!",
        //                             text:
        //                                 "Usuario creado satisfactoriamente. Ahora inicia sesión.",
        //                             icon: "success",
        //                         });
        //                     } else {
        //                         alert(res.data);
        //                     }
        //                 });
        //         });
        // },
        // editAccount: function () {
        //     document
        //         .getElementById("button_update")
        //         .addEventListener("click", function () {
        //             let newIdUser = document.getElementById(
        //                 "validation_username_account"
        //             ).value;
        //             let newName = document.getElementById(
        //                 "validation_name_account"
        //             ).value;
        //             let newPassword = document.getElementById(
        //                 "validation_password_account"
        //             ).value;
        //             let newEmail = document.getElementById(
        //                 "validation_email_account"
        //             ).value;

        //             console.log(newIdUser);
        //             console.log(newName);
        //             console.log(newPassword);
        //             console.log(newEmail);

        //             axios
        //                 .get("models/usersApi.php", {
        //                     params: {
        //                         newIdUser: newIdUser,
        //                         newName: newName,
        //                         newPassword: newPassword,
        //                         newType: 1,
        //                         newEmail: newEmail,
        //                         query: 2,
        //                     },
        //                 })
        //                 .then(function (result) {
        //                     console.log(result);
        //                     if (result.data == "ok") {
        //                         $("#useraccount_modal").modal("hide");

        //                         axios
        //                             .get("models/usersApi.php", {
        //                                 params: {
        //                                     query: 5,
        //                                     user: newIdUser,
        //                                 },
        //                             })
        //                             .then(function (res) {
        //                                 console.log(res);
        //                                 loggedExperiencesRender(res);
        //                             });

        //                         swal({
        //                             title: "¡Bien hecho!",
        //                             text:
        //                                 "Has actualizado tu información correctamente.",
        //                             icon: "success",
        //                         });
        //                     } else {
        //                         alert(result.data);
        //                     }
        //                 });
        //         });
        // },
        // addExperience: function () {
        //     // $("#nav-showModal_addExperience_button_box").on(
        //     //     "click",
        //     //     "#showModal_addExperience_button",
        //     //     function () {
        //     //         console.log("click");
        //     //     }
        //     // );
        // },
        // logout: function () {
        //     $("#nav-options").on("click", "#logout", function () {
        //         +console.log("Boton logout");

        //         axios.get("models/logoutApi.php");

        //         console.log("Usuario logout");
        //         //Alert
        //         swal({
        //             title: "¡Bien hecho!",
        //             text: "Has guardado cerrado tu sesión correctamente.",
        //             icon: "success",
        //         });
        //         noLoggedExperiencesRender();
        //         remove_button_addExperience_function();
        //     });
        // },

        add_addExperiences_button: function () {
            document.getElementById(
                "showModal_addExperience_button_box"
            ).innerHTML = `
                <button
                    id="showModal_addExperience_button"
                    data-toggle="modal"
                    data-target="#add_experience_modal"
                >
                    <i class="fa fa-plus" aria-hidden="true"></i>
                </button>
                `;
        },
        remove_addExperience_button: function () {
            document.getElementById(
                "showModal_addExperience_button_box"
            ).innerHTML = "";
        },
    };

    controller.init();
});
