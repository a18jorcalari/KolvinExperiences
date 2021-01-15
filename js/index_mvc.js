 $(function () {
    var model = {
        //IS LOGGED
        userIsLogged: function () {
            return axios.get("models/isloggedApi.php");
        },

        //USER

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
        
        removeUser: function (id_user) {
            return axios.get("models/usersApi.php", {
                params: {
                    query: 4,
                    idUser: id_user,
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

        selectUsers: function () {
            return axios.get("models/usersApi.php", {
                params: {
                    query: 6,
                },
            });
        },

        //EXPERIENCES

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

        updateState: function (id_experience, state) {
            return axios.get("models/ExperienceApi.php", {
                params: {
                    query: 4,
                    id_experience: id_experience,
                    state: state,
                },
            });
        },

        updateRate: function (id_experience, rate_p, rate_n) {
            return axios.get("models/ExperienceApi.php", {
                params: {
                    query: 5,
                    id_experience: id_experience,
                    rate_p: rate_p,
                    rate_n: rate_n,
                },
            });
        },

        updateReport: function (id_experience, reported) {
            return axios.get("models/ExperienceApi.php", {
                params: {
                    query: 6,
                    id_experience: id_experience,
                    reported: reported,
                },
            });
        },

        deleteExperience: function (id_experience) {
            return axios.get("models/ExperienceApi.php", {
                params: {
                    query: 7,
                    id_experience: id_experience,
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

        updateExperience: function (
            id_experience,
            title,
            description,
            created,
            state,
            id_category,
            location,
            image
        ) {
            return axios.get("models/ExperienceApi.php", {
                params: {
                    query: 3,
                    id_experience: id_experience,
                    title: title,
                    description: description,
                    created: created,
                    state: state,
                    id_category: id_category,
                    location: location,
                    image: image,
                },
            });
        },

        selectAllCategories: function () {
            return axios.get("models/CategoryApi.php", {
                params: {
                    query: 4,
                },
            });
        },

        insertCategory: function (name) {
            return axios.get("models/CategoryApi.php", {
                params: {
                    query: 0,
                    name: name
                },
            });
        },

        


        //LOGOUT
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
                .getElementById("modal-login-button")
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
                .getElementById("modal-register-button")
                .addEventListener("click", function () {
                    view.registerModal();
                });
        },

        modifyAccount: function () {
            document
                .getElementById("modal-useraccount-button")
                .addEventListener("click", function () {
                    view.modifyAccountModal();
                });
        },


        addExperience: function () {
            document
                .getElementById("modal-addExperience-button")
                .addEventListener("click", function () {
                    view.addExperienceModal();
                });
        },

        showExperienceDetail: function () {
            controller.getUserLogged().then(function (userLoggedResult) {
                $("#cards-tabs-experiences").on(
                    "click",
                    "div[expid]",
                    function () {
                        //Este if sirve para poder mostrar los botones eliminar y editar en la experienciaa
                        //unicamente al usuario que pertenece
                        let idUserClick = $(this).attr("userid");
                        let idExpClick = $(this).attr("expid");

                        controller.setAttributesExperienceDetail(
                            idUserClick,
                            idExpClick,
                            userLoggedResult
                        );

                        view.experienceDetailModal(idExpClick);
                        $("#modal-detail").modal("show");
                    }
                );
            });
        },

        setAttributesExperienceDetail: function (
            idUserClick,
            idExpClick,
            userLoggedResult
        ) {
            if (idUserClick == userLoggedResult.data[0].id_user) {
                view.addEditExperienceButton(idExpClick);
                view.addDeleteExperienceButton(idExpClick);
            } else {
                view.removeEditExperienceButton();
                view.removeDeleteExperienceButton();
            }

            view.addReportExperienceButton(idExpClick);

            view.setAttributeVote(idExpClick);
        },

        deleteAnExperience: function () {
            $("#modal-detail-button-delete-container").on(
                "click",
                "#modal-detail-button-delete",
                function () {
                    console.log($(this).attr("expid"));
                    view.experienceDeleted($(this).attr("expid"));
                }
            );
        },

        reportExperience: function () {
            $("#modal-detail-button-report-container").on(
                "click",
                "#modal-detail-button-report",
                function () {
                    console.log($(this).attr("expid"));
                    view.experienceReported($(this).attr("expid"));
                }
            );
        },
        modifyExperience: function () {
            $("#modal-detail-button-edit-container").on(
                "click",
                "#modal-detail-button-edit",
                function () {
                    console.log($(this).attr("expid"));
                    // view.experienceDeleted($(this).attr("expid"));
                }
            );
        },

        voteExperience: function () {
            document
                .getElementById("modal-detail-upvote")
                .addEventListener("click", function () {
                    let id_experience = $(this).attr("expid");
                    view.upvote(id_experience);
                });
            document
                .getElementById("modal-detail-downvote")
                .addEventListener("click", function () {
                    let id_experience = $(this).attr("expid");
                    view.downvote(id_experience);
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

        getAllCategories:function (){
            return model.selectAllCategories();
        },

        getAllUsers:function (){
            return model.selectUsers();
        },
        //SETS

        setNewUser: function (id_user, name, password, email) {
            return model.insertUser(id_user, name, password, email);
        },

        setDeleteUser: function (id_user) {
            return model.removeUser(id_user);
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

        setDeleteExperience: function (id_experience) {
            return model.deleteExperience(id_experience);
        },

        setUpdateExperience: function () {
            return model.updateExperience();
        },

        setUpdateReport: function (id_experience, reported) {
            return model.updateReport(id_experience, reported);
        },

        setUpdateRate: function (id_experience, rate_p, rate_n) {
            return model.updateRate(id_experience, rate_p, rate_n);
        },

        setUpdateState: function () {
            return model.updateState();
        },
        setNewCategory: function (name) {
            return model.insertCategory(name);
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
            controller.deleteAnExperience();
            controller.reportExperience();
            controller.modifyExperience();
            controller.voteExperience();
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
            navCategory = "";
            navReports = "";
            navOptionHtml = "";

            //Aqui cambiarlo por type de bd
            if (result.data[0].type == 2) {
                //hago esto por que si no, no puedo poner los event listeners, cuando pongamos esto en su sitio lo dejamos como antes :)
                nav_optionsElement.innerHTML = `
                <li class="nav-item">
                    <a id="adminPanel" class="nav-link" data-toggle="modal" data-target="#modal-adminpanel" href="#">Panel de administrador</span></a>
                </li>`;

                //////CATEGORY///////
                //creo el input con el boton de crear para añadir nuevas categorias
                navCategory+="<div class='input-group mb-3'><input type='text' class='form-control' placeholder='' id='newCategory'>"+
                "<button class='btn btn-secondary' type='button' id='createCategory'>Crear</button></div><div id='categorias'><ul class='list-group'>";

                //aqui se crea la lista de experiencias con el boton de eliminar(no es funcional) y se añade el event listener del boton de crear
                controller.getAllCategories().then((getAllCategoriesResult) => {

                    for(i=0; i<getAllCategoriesResult.data.length; i++){
                        navCategory+="<li class='list-group-item'>"+getAllCategoriesResult.data[i].id_category+" "+
                        getAllCategoriesResult.data[i].name+"</li>";   
                    }
                    document.getElementById("categories").innerHTML="</ul></div>"+navCategory;

                    document.getElementById("createCategory")
                    .addEventListener("click", function(){
                        controller.setNewCategory(document.getElementById("newCategory").value).then((setNewCategoryResult) => {
                            controller.getAllCategories().then((getAllCategoriesResult2) => {
                                navCategory="<ul class='list-group'>"
                                for(i=0; i<getAllCategoriesResult2.data.length; i++){
                                    navCategory+="<li class='list-group-item'>"+getAllCategoriesResult2.data[i].id_category+" "+
                                    getAllCategoriesResult2.data[i].name+"</li>";   
                                }
                                document.getElementById("categorias").innerHTML=navCategory+"</ul>";
                            })
                        })
                    });
                });
            }

                        /*view.experienceDetailModal(idExpClick);
                        $("#modal-detail").modal("show");*/
            //////REPORTES//////
            controller.getAllExperiences().then((getAllExperiencesResult) => {
                data=getAllExperiencesResult.data;
                modalReportsContent="<table class='table'><thead><tr><th scope='col'>ID</th><th scope='col'>Título</th><th scope='col'>Reportes</th><th scope='col'> </th></tr></thead><tbody>";
                for(i = 0; i<data.length; i++){
                    modalReportsContent+="<tr id='"+data[i].id_experience+"'><th scope='row'>"+data[i].id_experience+ "</th><td> " + data[i].title + 
                        "</td><td> reports: "+ data[i].reported + "</td><td><button  class ='deleteExperienceReport btn btn-secondary'>Eliminar</button></td></tr>";
                }
                modalReportsContent+="</tbody></table>";
                document.getElementById("reports").innerHTML=modalReportsContent;
                botonesEliminar=document.getElementsByClassName("deleteExperienceReport");
                for(i=0; i<botonesEliminar.length; i++){
                    botonesEliminar[i].addEventListener("click", function(e){
                        controller.setDeleteExperience(this.parentElement.parentElement.id).then((setDeleteCategoryResult) => {
                            alert(setDeleteCategoryResult.data)
                            if(setDeleteCategoryResult.data=="Se ha eliminado correctamente")
                                this.parentElement.parentElement.parentNode.removeChild(this.parentElement.parentElement)
                        })
                    })
                }
            })

            ////USUARIOS/////
            controller.getAllUsers().then((getAllUsersResult) => {
                data=getAllUsersResult.data;
                modalUsersContent="<table class='table'><thead><tr><th scope='col'>ID</th><th scope='col'>Nombre</th><th scope='col'></th></tr></thead><tbody>";

                for(i = 0; i<data.length; i++)
                    modalUsersContent+="<tr id='"+data[i].id_user+"'><th scope='row'>"+data[i].id_user+ "</th><td>" + data[i].name + 
                        "</td><td><button class ='deleteUser btn btn-secondary'>Dar de baja</button></td><tr>";
                
                document.getElementById("users").innerHTML=modalUsersContent+"</tbody></table>"
                botonesEliminar=document.getElementsByClassName("deleteUser");
                
                for(i=0; i<botonesEliminar.length; i++){
                    botonesEliminar[i].addEventListener("click", function(e){
                        controller.setDeleteUser(this.parentElement.parentElement.id).then((setDeleteUserResult) => {
                            alert(setDeleteUserResult.data);
                            //if(setDeleteUserResult.data=="Usuario eliminado correctamente") 
                                this.parentElement.parentElement.parentNode.removeChild(this.parentElement.parentElement)

                        })
                    })
                }
            })


            navOptionHtml += `
            <li class="nav-item">
                <a class="nav-link" data-toggle="modal" data-target="#modal-useraccount" href="#">Bienvenido, ${result.data[0].id_user}</span></a>
            </li>
            <li class="nav-item">
                <a id="logout" class="nav-link" href="#">Logout</span></a>
            </li>`;

            nav_optionsElement.innerHTML += navOptionHtml;
        },

        headerUserNoLogged: function () {
            let nav_optionsElement = document.getElementById("nav-options");
            nav_optionsElement.innerHTML = `
                <li class="nav-item">
                    <a class="nav-link" data-toggle="modal" data-target="#modal-login" href="#">Log In</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="modal" data-target="#modal-register" href="#">Register</span></a>
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
                        getAllExperiencesByUserResult,
                        true
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

        experiences: function (experiencesResult, ownExperience = false) {
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
                        }" userid="${experiencesResult.data[i].id_user}">
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
            let user_id = document.getElementById("modal-login-username").value;
            let password = document.getElementById("modal-login-password")
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
                    $("#modal-login").modal("hide");
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
            let id_user = document.getElementById("modal-register-username")
                .value;
            let name = document.getElementById("modal-register-name").value;
            let password = document.getElementById("modal-register-password")
                .value;
            let email = document.getElementById("modal-register-email").value;

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
                        $("#modal-register").modal("hide");

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
            controller.getUserLogged().then((userResult) => {
                let idUserInput = document.getElementById(
                    "modal-useraccount-username"
                );
                let nameInput = document.getElementById(
                    "modal-useraccount-name"
                );
                let passwordInput = document.getElementById(
                    "modal-useraccount-password"
                );
                let emailInput = document.getElementById(
                    "modal-useraccount-email"
                );
                // idUserInput.value = userResult.data.user_id;
                // nameInput.value = userResult.data.name;
                // emailInput.value = userResult.data.email;

                let newIdUser = idUserInput.value;
                let newName = nameInput.value;
                let newPassword = passwordInput.value;
                let newEmail = emailInput.value;

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
                        console.log(
                            this.modifyAccountModal.name,
                            updateUserResult
                        );

                        if (updateUserResult.data == "ok") {
                            $("#modal-useraccount").modal("hide");

                            // let userResult = controller.getUserById(newIdUser);
                            controller
                                .getUserById(newIdUser)
                                .then((userResult) => {
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
            });
        },

        addExperienceModal: function () {
            let title = document.getElementById("modal-addExperience-title")
                .value;
            let description = document.getElementById(
                "modal-addExperience-desc"
            ).value;
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
                    $("#modal-addExperience").modal("hide");
                    view.userLogged();
                } else {
                    alert("No añadido");
                }
            });
        },

        experienceDetailModal: function (expId) {
            controller.getExperienceById(expId).then((experienceResult) => {
                console.log(this.experienceDetailModal, experienceResult);

                let titulo = document.getElementById("modal-detail-title");
                titulo.innerHTML = experienceResult.data.title;
                let fecha = document.getElementById("modal-detail-date");
                fecha.innerHTML = experienceResult.data.created;
                let upvote = document.getElementById("modal-detail-upvote");
                upvote.innerHTML = experienceResult.data.rate_p;
                let downvote = document.getElementById("modal-detail-downvote");
                downvote.innerHTML = experienceResult.data.rate_n;
                let description = document.getElementById(
                    "modal-detail-description"
                );
                description.innerHTML = experienceResult.data.description;
                let image = document.getElementById("modal-detail-image");
            });
        },

        experienceDeleted: function (expId) {
            controller.setDeleteExperience(expId).then((result) => {
                console.log(result);
                if (result.data == "Se ha eliminado correctamente") {
                    view.userLogged();
                    $("#modal-detail").modal("hide");
                    swal({
                        title: "¡Bien hecho!",
                        text: "Has eliminado correctamente una experiencia.",
                        icon: "success",
                    });
                } else {
                    alert("ERROR");
                }
            });
        },

        experienceReported: function (id_experience) {
            controller
                .getExperienceById(id_experience)
                .then((experienceResult) => {
                    console.log(experienceResult.data.reported);
                    let newReport =
                        parseInt(experienceResult.data.reported) + 1;
                    console.log(newReport);
                    controller
                        .setUpdateReport(id_experience, newReport)
                        .then((updateResult) => {
                            console.log(updateResult);
                            if (
                                updateResult.data ==
                                "Se ha reportado correctamente"
                            ) {
                                swal({
                                    title: "¡Bien hecho!",
                                    text:
                                        "Has reportado la experiencia correctamente.",
                                    icon: "success",
                                });
                            } else {
                                alert("ERROR");
                            }
                        });
                });
        },

        upvote: function (id_experience) {
            controller
                .getExperienceById(id_experience)
                .then((experienceResult) => {
                    console.log(experienceResult);
                    let rateP = parseInt(experienceResult.data.rate_p) + 1;
                    let rateN = parseInt(experienceResult.data.rate_n);

                    controller
                        .setUpdateRate(
                            experienceResult.data.id_experience,
                            rateP,
                            rateN
                        )
                        .then((updateResult) => {
                            if (
                                (updateResult.data =
                                    "Se ha valorado correctamente")
                            ) {
                                document.getElementById(
                                    "modal-detail-upvote"
                                ).innerHTML = rateP;
                                swal({
                                    title: "¡Bien hecho!",
                                    text:
                                        "Has votado la experiencia correctamente.",
                                    icon: "success",
                                });
                            } else {
                                alert("ERROR");
                            }
                        });
                });
        },

        downvote: function (id_experience) {
            controller
                .getExperienceById(id_experience)
                .then((experienceResult) => {
                    console.log(experienceResult);
                    let rateP = parseInt(experienceResult.data.rate_p);
                    let rateN = parseInt(experienceResult.data.rate_n) + 1;

                    controller
                        .setUpdateRate(
                            experienceResult.data.id_experience,
                            rateP,
                            rateN
                        )
                        .then((updateResult) => {
                            if (
                                (updateResult.data =
                                    "Se ha valorado correctamente")
                            ) {
                                document.getElementById(
                                    "modal-detail-downvote"
                                ).innerHTML = rateN;
                                swal({
                                    title: "¡Bien hecho!",
                                    text:
                                        "Has votado la experiencia correctamente.",
                                    icon: "success",
                                });
                            } else {
                                alert("ERROR");
                            }
                        });
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
                "container-button-addExperience"
            ).innerHTML = `
                <button
                    id="button-addExperience-showModal"
                    data-toggle="modal"
                    data-target="#modal-addExperience"
                >
                    <i class="fa fa-plus" aria-hidden="true"></i>
                </button>
                `;
        },
        remove_addExperience_button: function () {
            document.getElementById(
                "container-button-addExperience"
            ).innerHTML = "";
        },

        addDeleteExperienceButton: function (idExp) {
            document.getElementById(
                "modal-detail-button-delete-container"
            ).innerHTML = `<button
                                id="modal-detail-button-delete"
                                type="button"
                                class="btn"
                                expid="${idExp}"
                            >
                                Eliminar
                            </button>`;
        },

        removeDeleteExperienceButton: function () {
            document.getElementById(
                "modal-detail-button-delete-container"
            ).innerHTML = "";
        },

        addEditExperienceButton: function (idExp) {
            document.getElementById(
                "modal-detail-button-edit-container"
            ).innerHTML = `<button
                                id="modal-detail-button-edit"
                                type="button"
                                class="btn"
                                expid="${idExp}"
                            >
                                Editar
                            </button>`;
        },
        removeEditExperienceButton: function () {
            document.getElementById(
                "modal-detail-button-edit-container"
            ).innerHTML = "";
        },

        addReportExperienceButton: function (idExp) {
            document.getElementById(
                "modal-detail-button-report-container"
            ).innerHTML = `<button
                                id="modal-detail-button-report"
                                type="button"
                                class="btn"
                                expid="${idExp}"
                            >
                                Reportar
                            </button>`;
        },

        setAttributeVote: function (idExpClick) {
            let upvoteButton = document.getElementById("modal-detail-upvote");
            upvoteButton.setAttribute("expid", idExpClick);
            let downvoteButton = document.getElementById(
                "modal-detail-downvote"
            );
            downvoteButton.setAttribute("expid", idExpClick);
        },
    };

    controller.init();
});
