$(function () {
    var model = {
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

        selectLogin: function (user_id, password) {
            return axios.get("models/usersApi.php", {
                params: {
                    user: user_id,
                    password: password,
                    query: 1,
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

        selectUserById: function (newIdUser) {
            return axios.get("models/usersApi.php", {
                params: {
                    query: 5,
                    user: newIdUser,
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

        insertExperience: function (title, description) {
            return axios.get("models/ExperienceApi.php", {
                params: {
                    query: 2,
                    title: title,
                    description: description,
                },
            });
        },

        selectExperienceById: function (expId) {
            return axios.get("models/ExperienceApi.php", {
                params: {
                    query: 8,
                    id_experience: expId,
                },
            });
        },

        logout: function () {
            axios.get("models/logoutApi.php");
        },
    };

    var controller = {
        init: function () {
            view.init();
        },

        decideUserView: function () {
            model.userIsLogged().then((result) => {
                console.log(result, this.decideUserView.name);
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
                    view.loginModal();
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
                    view.registerModal();
                });
        },

        modifyAccount: function () {
            document
                .getElementById("button_update")
                .addEventListener("click", function () {
                    view.modifyAccountModal();
                });
        },

        addExperience: function () {
            document
                .getElementById("button_add_experience")
                .addEventListener("click", function () {
                    view.addExperienceModal();
                });
        },

        showExperienceDetail: function () {
            $("#cards-tabs-experiences").on("click", "div[expid]", function () {
                console.log("click", $(this).attr("expid"));
                view.experienceDetailModal($(this).attr("expid"));
                $("#detail_modal").modal("show");
            });
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

        getExperienceById: function (expId) {
            return model.selectExperienceById(expId);
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

        setNewExperience: function (title, description) {
            return model.insertExperience(title, description);
        },
    };

    var view = {
        init: function () {
            controller.decideUserView();
            controller.login();
            controller.register();
            controller.modifyAccount();
            controller.addExperience();
            controller.showExperienceDetail();
            controller.logout();
        },

        userNoLogged: function () {
            controller.getAllExperiences().then((getAllExperiencesResult) => {
                console.log(
                    getAllExperiencesResult.data,
                    this.userNoLogged.name
                );

                this.headerUserNoLogged();

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
            controller.getUserLogged().then((getUserLoggedResult) => {
                console.log(getUserLoggedResult, this.userLogged.name);

                this.userLoggedRender(getUserLoggedResult);
            });
        },

        userLoggedRender: function (result) {
            /************ NORMAL USER VIEW ******************/

            this.headerLogged(result);

            this.addTabExperiences();

            //CARDS USER EXPERIENCES

            //My experiences
            this.myExperiences(result);

            //All experiences
            this.allExperiences();

            //Boton de añadir experiencia
            this.add_addExperiences_button();
        },

        headerLogged: function (result) {
            //Sustituye en navbar a modo user logged
            //Eliminar li de admin para normal user
            let nav_optionsElement = document.getElementById("nav-options");
            navOptionHtml = "";

            //Aqui cambiarlo por type de bd
            if (result.data[0].type == 2) {
                navOptionHtml += `
                <li class="nav-item">
                    <a class="nav-link" data-toggle="modal" data-target="#adminpanel_modal" href="#">Panel de administrador</span></a>
                </li>`;
            }

            navOptionHtml += `
            <li class="nav-item">
                <a class="nav-link" data-toggle="modal" data-target="#useraccount_modal" href="#">Bienvenido, ${result.data[0].id_user}</span></a>
            </li>
            <li class="nav-item">
                <a id="logout" class="nav-link" href="#">Logout</span></a>
            </li>`;

            nav_optionsElement.innerHTML = navOptionHtml;
        },

        headerUserNoLogged: function () {
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

            controller
                .getAllExperiencesByUser(userResult)
                .then((getAllExperiencesByUserResult) => {
                    console.log(
                        getAllExperiencesByUserResult,
                        this.myExperiences.name
                    );

                    myexperiences_boxElement.innerHTML = this.experiences(
                        getAllExperiencesByUserResult
                    );
                });
        },

        allExperiences: function () {
            let allexperiences_boxElement = document.getElementById(
                "allexperiences-box"
            );

            controller.getAllExperiences().then((getAllExperiencesResult) => {
                console.log(getAllExperiencesResult, this.allExperiences.name);
                allexperiences_boxElement.innerHTML = this.experiences(
                    getAllExperiencesResult
                );
            });
        },

        experiences: function (experiencesResult) {
            let htmlString = `
            <div class="content-row experiencies">
                <div class="row">`;
            for (let i = 0; i < experiencesResult.data.length; i++) {
                let timeStampJson = experiencesResult.data[i].created;
                var d = new Date(Date.parse(timeStampJson));
                htmlString += `
                    <div class="col-sm-12 col-lg-4 card-container">
                        <div class="card h-100" expid="${
                            experiencesResult.data[i].id_experience
                        }">
                            <div style="width: 100%; height: 200px; background-color: grey;"></div>
                            <div class="card-body">
                                <h5 class="card-title">${
                                    experiencesResult.data[i].title
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

            return htmlString;
        },

        // MODALS

        loginModal: function () {
            let user_id = document.getElementById("validation_username_login")
                .value;
            let password = document.getElementById("validation_password_login")
                .value;

            console.log(
                user_id,
                Object.keys({ user_id })[0],
                this.loginModal.name
            );

            console.log(
                password,
                Object.keys({ password })[0],
                this.loginModal.name
            );

            controller.getUserLogin(user_id, password).then((loginResult) => {
                console.log(loginResult, this.loginModal.name);

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

        registerModal: function () {
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
                this.registerModal.name
            );
            console.log(
                name,
                Object.keys({ name })[0],
                this.registerModal.name
            );
            console.log(
                password,
                Object.keys({ password })[0],
                this.registerModal.name
            );
            console.log(
                email,
                Object.keys({ email })[0],
                this.registerModal.name
            );

            controller
                .setNewUser(id_user, name, password, email)
                .then((newUserResult) => {
                    console.log(newUserResult, this.registerModal.name);

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

        modifyAccountModal: function () {
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
                this.modifyAccountModal.name
            );
            console.log(
                newName,
                Object.keys({ newName })[0],
                this.modifyAccountModal.name
            );
            console.log(
                newPassword,
                Object.keys({ newPassword })[0],
                this.modifyAccountModal.name
            );
            console.log(
                newEmail,
                Object.keys({ newEmail })[0],
                this.modifyAccountModal.name
            );

            controller
                .setUpdateAccount(newIdUser, newName, newPassword, newEmail)
                .then((updateUserResult) => {
                    console.log(this.modifyAccountModal.name, updateUserResult);

                    if (updateUserResult.data == "ok") {
                        $("#useraccount_modal").modal("hide");

                        // let userResult = controller.getUserById(newIdUser);
                        controller.getUserById(newIdUser).then((userResult) => {
                            console.log(
                                view.modifyAccountModal.name,
                                userResult
                            );
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

        addExperienceModal: function () {
            let title = document.getElementById("title_add_experience").value;
            let description = document.getElementById("desc_add_experience")
                .value;
            console.log(title, description);

            controller.setNewExperience(title, description).then((result) => {
                console.log(result);
                if (result.data == "Experiencia subida correctamente") {
                    // alert("Añadido");
                    swal({
                        title: "¡Bien hecho!",
                        text: "Has añadido correctamente una experiencia.",
                        icon: "success",
                    });
                    $("#add_experience_modal").modal("hide");
                    view.userLogged();
                } else {
                    alert("No añadido");
                }
            });
        },

        experienceDetailModal: function (expId) {
            controller.getExperienceById(expId).then((experienceResult) => {
                console.log(this.experienceDetailModal, experienceResult);
                let detail_body = document.getElementById("detail-body");
                detail_body.getElementsByTagName("h4")[0].innerHTML =
                    experienceResult.data.title;
                detail_body.getElementsByTagName("p")[0].innerHTML =
                    experienceResult.data.description;
            });
        },

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

        //BUTTONS

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
