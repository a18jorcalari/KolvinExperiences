$(function () {
    var model = {
        // init: function () {},

        userIsLogged: function () {
            return axios.get("models/isloggedApi.php");
        },

        selectUserLogged: function () {
            return axios.get("models/usersApi.php", {
                params: {
                    query: 0,
                },
            });
        },

        selectAllExperiences: function () {
            return axios.get("models/ExperienceApi.php", {
                params: {
                    query: 0,
                },
            });
        },

        selectAllExperiencesByUser: function (userResult) {
            return axios.get("models/ExperienceApi.php", {
                params: {
                    user: userResult.data[0].id_user,
                    query: 1,
                },
            });
        },

        selectUserById: function (newIdUser) {
            return axios.get("models/usersApi.php", {
                params: {
                    query: 5,
                    user: newIdUser,
                },
            });
        },

        selectLogin: function (user_id, password) {
            return axios.get("models/usersApi.php", {
                params: {
                    user: user_id,
                    password: password,
                    query: 1,
                },
            });
        },

        insertUser: function (id_user, name, password, email) {
            return axios.get("models/usersApi.php", {
                params: {
                    query: 3,
                    idUser: id_user,
                    name: name,
                    password: password,
                    type: 1,
                    email: email,
                },
            });
        },

        updateUser: function (newIdUser, newName, newPassword, newEmail) {
            return axios.get("models/usersApi.php", {
                params: {
                    newIdUser: newIdUser,
                    newName: newName,
                    newPassword: newPassword,
                    newType: 1,
                    newEmail: newEmail,
                    query: 2,
                },
            });
        },

        logout: function () {
            axios.get("models/logoutApi.php");
        },
    };

    var controller = {
        init: function () {
            // model.init();
            view.init();
        },

        userIsLogged: function () {
            model.userIsLogged().then((result) => {
                console.log(result, this.userIsLogged.name);
                if (result.data == true) {
                    view.userLogged();
                } else {
                    view.userNoLogged();
                }
            });
        },

        login: function () {
            document
                .getElementById("button_login")
                .addEventListener("click", function () {
                    view.login();
                });
        },

        logout: function () {
            $("#nav-options").on("click", "#logout", function () {
                view.logout();
            });
        },

        register: function () {
            document
                .getElementById("button_register")
                .addEventListener("click", function () {
                    view.register();
                });
        },

        editAccount: function () {
            document
                .getElementById("button_update")
                .addEventListener("click", function () {
                    view.editAccount();
                });
        },

        addExperience: function () {
            $("#nav-showModal_addExperience_button_box").on(
                "click",
                "#showModal_addExperience_button",
                function () {
                    console.log("click", this.addExperience.name);
                }
            );
        },

        //GETS

        getUserLogged: function () {
            return model.selectUserLogged();
        },

        getAllExperiences: function () {
            return model.selectAllExperiences();
        },

        getAllExperiencesByUser: function (userResult) {
            return model.selectAllExperiencesByUser(userResult);
        },

        getUserLogin: function (user_id, password) {
            return model.selectLogin(user_id, password);
        },

        getUserById: function (newIdUser) {
            return model.selectUserById(newIdUser);
        },

        //SETS

        setNewUser: function (id_user, name, password, email) {
            return model.insertUser(id_user, name, password, email);
        },

        setUpdateAccount: function (newIdUser, newName, newPassword, newEmail) {
            return model.updateUser(newIdUser, newName, newPassword, newEmail);
        },

        setLogout: function () {
            model.logout();
        },
    };

    var view = {
        init: function () {
            controller.userIsLogged();
            controller.login();
            controller.register();
            controller.editAccount();
            controller.addExperience();
            controller.logout();
        },

        userNoLogged: function () {
            // let getAllExperiencesResult = controller.getAllExperiences();

            controller.getAllExperiences().then((getAllExperiencesResult) => {
                console.log(
                    getAllExperiencesResult.data,
                    this.userNoLogged.name
                );

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
                                            getAllExperiencesResult.data[i]
                                                .title
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
            });
        },

        userLogged: function () {
            // let getUserLoggedResult = controller.getUserLogged();
            controller.getUserLogged().then((getUserLoggedResult) => {
                console.log(getUserLoggedResult, this.userLogged.name);

                this.userLoggedRender(getUserLoggedResult);
                this.add_addExperiences_button();
            });
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

            // let getAllExperiencesByUserResult = controller.getAllExperiencesByUser(
            //     userResult
            // );
            controller
                .getAllExperiencesByUser(userResult)
                .then((getAllExperiencesByUserResult) => {
                    console.log(
                        getAllExperiencesByUserResult,
                        this.myExperiences.name
                    );

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
                });
        },

        allExperiences: function () {
            let allexperiences_boxElement = document.getElementById(
                "allexperiences-box"
            );

            // let getAllExperiencesResult = controller.getAllExperiences();
            controller.getAllExperiences().then((getAllExperiencesResult) => {
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
                                                getAllExperiencesResult.data[i]
                                                    .title
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
            });
        },

        login: function () {
            let user_id = document.getElementById("validation_username_login")
                .value;
            let password = document.getElementById("validation_password_login")
                .value;

            console.log(user_id, Object.keys({ user_id })[0], this.login.name);

            console.log(
                password,
                Object.keys({ password })[0],
                this.login.name
            );

            // let loginResult = controller.getUserLogin(user_id, password);
            controller.getUserLogin(user_id, password).then((loginResult) => {
                console.log(loginResult, this.login.name);

                // Si las credenciales son correctas
                if (loginResult.data != false) {
                    //Funcion que sirve para esconder el modal con la id login.
                    $("#login_modal").modal("hide");
                    //LoggedRender

                    this.userLoggedRender(loginResult);
                    this.add_addExperiences_button();

                    //Alert
                    swal({
                        title: "¡Bien hecho!",
                        text: "Te has loguedo correctamente",
                        icon: "success",
                    });
                } else {
                    alert("Error login");
                }
            });
        },

        register: function () {
            //Si el usuario se ha creado correctamente hacer esto:
            $("#register").modal("hide"); //Funcion que sirve para esconder el modal con la id Register.

            let id_user = document.getElementById(
                "validation_username_register"
            ).value;
            let name = document.getElementById("validation_name_register")
                .value;
            let password = document.getElementById(
                "validation_password_register"
            ).value;
            let email = document.getElementById("validation_email_register")
                .value;

            console.log(
                id_user,
                Object.keys({ id_user })[0],
                this.register.name
            );
            console.log(name, Object.keys({ name })[0], this.register.name);
            console.log(
                password,
                Object.keys({ password })[0],
                this.register.name
            );
            console.log(email, Object.keys({ email })[0], this.register.name);

            // let newUserResult = controller.setNewUser(
            //     id_user,
            //     name,
            //     password,
            //     email
            // );

            controller
                .setNewUser(id_user, name, password, email)
                .then((newUserResult) => {
                    console.log(newUserResult, this.register.name);

                    if (
                        newUserResult.data == "Usuario registrado correctamente"
                    ) {
                        $("#register_modal").modal("hide");

                        //Alert
                        swal({
                            title: "¡Bien hecho!",
                            text:
                                "Usuario creado satisfactoriamente. Ahora inicia sesión.",
                            icon: "success",
                        });
                    } else {
                        alert(newUserResult.data);
                    }
                });
        },

        editAccount: function () {
            let newIdUser = document.getElementById(
                "validation_username_account"
            ).value;
            let newName = document.getElementById("validation_name_account")
                .value;
            let newPassword = document.getElementById(
                "validation_password_account"
            ).value;
            let newEmail = document.getElementById("validation_email_account")
                .value;

            console.log(
                newIdUser,
                Object.keys({ newIdUser })[0],
                this.editAccount.name
            );
            console.log(
                newName,
                Object.keys({ newName })[0],
                this.editAccount.name
            );
            console.log(
                newPassword,
                Object.keys({ newPassword })[0],
                this.editAccount.name
            );
            console.log(
                newEmail,
                Object.keys({ newEmail })[0],
                this.editAccount.name
            );

            // let updateUserResult = controller.setUpdateAccount(
            //     newIdUser,
            //     newName,
            //     newPassword,
            //     newEmail
            // );
            controller
                .setUpdateAccount(newIdUser, newName, newPassword, newEmail)
                .then((updateUserResult) => {
                    console.log(this.editAccount.name, updateUserResult);

                    if (updateUserResult.data == "ok") {
                        $("#useraccount_modal").modal("hide");

                        // let userResult = controller.getUserById(newIdUser);
                        controller.getUserById(newIdUser).then((userResult) => {
                            console.log(view.editAccount.name, userResult);
                            view.userLoggedRender(userResult);

                            swal({
                                title: "¡Bien hecho!",
                                text:
                                    "Has actualizado tu información correctamente.",
                                icon: "success",
                            });
                        });
                    } else {
                        alert(updateUserResult.data);
                    }
                });
        },

        addExperience: function () {},

        logout: function () {
            console.log(this.logout.name, "Boton logout");

            controller.setLogout();

            console.log(this.logout.name, "Usuario logout");
            //Alert
            swal({
                title: "¡Bien hecho!",
                text: "Has guardado cerrado tu sesión correctamente.",
                icon: "success",
            });
            this.userNoLogged();
            this.remove_addExperience_button();
        },

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
