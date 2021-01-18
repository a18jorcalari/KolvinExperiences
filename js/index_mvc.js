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

        selectLastExperienceInserted: function () {
            return axios.get("models/ExperienceApi.php", {
                params: {
                    query: 19,
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
        selectAllExperiencesByUserByCategory: function (id_user, id_category) {
            return axios.get("models/ExperienceApi.php", {
                params: {
                    query: 9,
                    user: id_user,
                    category: id_category,
                },
            });
        },
        selectAllExperiencesOrderedByDateAsc: function () {
            return axios.get("models/ExperienceApi.php", {
                params: {
                    query: 10,
                },
            });
        },
        selectAllExperiencesOrderedByVoteAsc: function () {
            return axios.get("models/ExperienceApi.php", {
                params: {
                    query: 11,
                },
            });
        },
        selectAllExperiencesByUserOrderedByDateAsc: function (id_user) {
            return axios.get("models/ExperienceApi.php", {
                params: {
                    query: 12,
                    user: id_user,
                },
            });
        },
        selectAllExperiencesByUserOrderedByVoteAsc: function (id_user) {
            return axios.get("models/ExperienceApi.php", {
                params: {
                    query: 13,
                    user: id_user,
                },
            });
        },

        selectAllExperiencesByCategory: function (id_category) {
            return axios.get("models/ExperienceApi.php", {
                params: {
                    query: 14,
                    category: id_category,
                },
            });
        },
        selectAllExperiencesOrderedByDateDesc: function () {
            return axios.get("models/ExperienceApi.php", {
                params: {
                    query: 15,
                },
            });
        },
        selectAllExperiencesOrderedByVoteDesc: function () {
            return axios.get("models/ExperienceApi.php", {
                params: {
                    query: 16,
                },
            });
        },
        selectAllExperiencesByUserOrderedByDateDesc: function (id_user) {
            return axios.get("models/ExperienceApi.php", {
                params: {
                    query: 17,
                    user: id_user,
                },
            });
        },
        selectAllExperiencesByUserOrderedByVoteDesc: function (id_user) {
            return axios.get("models/ExperienceApi.php", {
                params: {
                    query: 18,
                    user: id_user,
                },
            });
        },

        insertExperience: function (
            title,
            description,
            category,
            latitud,
            longitud,
            state
        ) {
            return axios.get("models/ExperienceApi.php", {
                params: {
                    query: 2,
                    title: title,
                    description: description,
                    state: state,
                    id_category: category,
                    latitud: latitud,
                    longitud: longitud,
                },
            });
        },

        updateState: function (id_experience, state) {
            console.log(`${id_experience} ${state}`);
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

        updateImage: function (id_experience, url_image) {
            return axios.get("models/ExperienceApi.php", {
                params: {
                    query: 20,
                    id_experience: id_experience,
                    image: url_image,
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
            // state,
            id_category,
            longitud,
            latitud
            // image
        ) {
            return axios.get("models/ExperienceApi.php", {
                params: {
                    query: 3,
                    id_experience: id_experience,
                    title: title,
                    description: description,
                    // state: state,
                    id_category: id_category,
                    latitud: latitud,
                    longitud: longitud,
                    // image: image,
                },
            });
        },

        updateCategory: function (id_category, name) {
            return axios.get("models/CategoryApi.php", {
                params: {
                    query: 1,
                    name: name,
                    id_category: id_category,
                },
            });
        },

        //CATEGORIES
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
                    name: name,
                },
            });
        },

        selectCategoryById: function (id_category) {
            return axios.get("models/CategoryApi.php", {
                params: {
                    query: 3,
                    id_category: id_category,
                },
            });
        },

        uploadImage: function (formData, id_experience) {
            return axios({
                method: "post",
                url:
                    "http://labs.iam.cat/~a18jorcalari/ProyectoViajes/uploadFile.php",
                data: formData,
                header: {
                    Accept: "application/json",
                    "Content-Type": "multipart/form-data",
                },
                params: {
                    id_experience: id_experience,
                },
            });
        },

        logout: function () {
            return axios.get("models/logoutApi.php");
        },
    };

    var controller = {
        init: function () {
            view.init();
        },

        decideUserView: function () {
            model.userIsLogged().then((result) => {
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
                .getElementById("modal-register-button")
                .addEventListener("click", function () {
                    view.register();
                });
        },

        openModalModifyAccount: function () {
            $("#nav-options").on("click", "#showModalUseraccount", function () {
                view.setValuesInModifyAccountModal();
            });
        },

        modifyAccount: function () {
            document
                .getElementById("modal-useraccount-button")
                .addEventListener("click", function () {
                    view.modifyAccount();
                });
        },

        modifyImage: function () {
            $("#form-modifyImage-container").on(
                "submit",
                "#form-modifyImage-form",
                function (e) {
                    console.log($(this).attr("expid"));
                    e.preventDefault();
                    //Para el file
                    let file = document.querySelector("#file-modifyImage");
                    let formData = new FormData();
                    formData.append("file", file.files[0]);
                    view.uploadImage(formData, $(this).attr("expid"));
                }
            );
        },

        openModalAddExperience: function () {
            $("#container-button-addExperience").on(
                "click",
                "#button-addExperience-showModal",
                function () {
                    view.setCategoriesOptionInAddExperience();
                }
            );
        },

        addExperience: function () {
            // document
            //     .getElementById("modal-addExperience-button")
            //     .addEventListener("click", function () {
            //         e.preventDefault();
            //         view.addExperience();
            //     });
            document
                .getElementById("form-addExperience")
                .addEventListener("submit", function (e) {
                    e.preventDefault();
                    view.addExperience();
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
                        let idCatClick = $(this).attr("catid");

                        controller.setAttributesButtonsValuesInExperienceDetail(
                            idUserClick,
                            idExpClick,
                            idCatClick,
                            userLoggedResult
                        );

                        $("#modal-detail").modal("show");
                    }
                );
            });
        },

        setAttributesButtonsValuesInExperienceDetail: function (
            idUserClick,
            idExpClick,
            idCatClick,
            userLoggedResult
        ) {
            if (idUserClick == userLoggedResult.data[0].id_user) {
                view.setEditExperienceButton(idExpClick);
                view.setDeleteExperienceButton(idExpClick);
                controller.getExperienceById(idExpClick).then((result) => {
                    if (result.data.state == "esbozo")
                        view.setUpdateStateButton(idExpClick);
                    else view.removeUpdateStateButton();
                });
            } else {
                view.removeEditExperienceButton();
                view.removeDeleteExperienceButton();
                view.removeUpdateStateButton();
            }
            view.setValuesInExperienceDetailModal(idExpClick);
            view.setReportExperienceButton(idExpClick);
            view.setAttributeVote(idExpClick);
            view.setButtonCategory(idCatClick);
            view.setButtonMaps(idExpClick);
            view.removeSaveEditExperienceButton();

            // let descContainer = document.getElementById(
            //     "modal-detail-description-container"
            // );

            // descContainer.innerHTML = `<textarea
            //                                 name="editor-editExp"
            //                                 id="modal-detail-description"
            //                             >
            //                             </textarea>`;
            // CKEDITOR.replace("editor-editExp");

            let locationContainer = document.getElementById(
                "modal-detail-location-container"
            );
            locationContainer.innerHTML = ``;

            let modifyContainer = document.getElementById(
                "form-modifyImage-container"
            );
            modifyContainer.innerHTML = ``;
        },

        updateStateExperience: function () {
            $("#modal-detail-button-update-state-container").on(
                "click",
                "#modal-detail-button-update-state",
                function () {
                    console.log($(this).attr("expid"));
                    view.experienceStateUpdated($(this).attr("expid"));
                }
            );
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

        showMaps: function () {
            $("#modal-detail-button-maps-container").on(
                "click",
                "#modal-detail-button-maps",
                function () {
                    view.setIframeMaps($(this).attr("expid"));
                }
            );
        },

        reportExperience: function () {
            $("#modal-detail-button-report-container").on(
                "click",
                "#modal-detail-button-report",
                function () {
                    view.experienceReported($(this).attr("expid"));
                }
            );
        },

        enableEditExperience: function () {
            $("#modal-detail-button-edit-container").on(
                "click",
                "#modal-detail-button-edit",
                function () {
                    console.log($(this).attr("expid"));

                    view.experienceModifying($(this).attr("expid"));
                }
            );
        },

        modifyExperience: function () {
            $("#modal-detail-button-saveEdited-container").on(
                "click",
                "#modal-detail-button-saveEdited",
                function () {
                    view.experienceModified($(this).attr("expid"));
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

        filterCategory: function () {
            $("#dropdowns-experiences").on(
                "click",
                "button[idcat]",
                function () {
                    view.allExperiencesFilterCategory($(this).attr("idcat"));
                    view.myExperiencesFilterCategory($(this).attr("idcat"));
                }
            );
        },

        orderExperiences: function () {
            $("#dropdowns-experiences").on(
                "click",
                "#orderDateAsc",
                function () {
                    view.allExperiencesOrderByDateAsc();
                    view.myExperiencesOrderByDateAsc();
                }
            );

            $("#dropdowns-experiences").on(
                "click",
                "#orderVoteAsc",
                function () {
                    view.allExperiencesOrderByVoteAsc();
                    view.myExperiencesOrderByVoteAsc();
                }
            );

            $("#dropdowns-experiences").on(
                "click",
                "#orderDateDesc",
                function () {
                    view.setAllExperiencesOrderByDateDesc();
                    view.myExperiencesOrderByDateDesc();
                }
            );

            $("#dropdowns-experiences").on(
                "click",
                "#orderVoteDesc",
                function () {
                    view.setAllExperiencesOrderByVoteDesc();
                    view.setMyExperiencesOrderByVoteDesc();
                }
            );
        },

        //GETS

        getUserLogged: function () {
            return model.selectUserLogged();
        },

        getLastExperienceInserted: function () {
            return model.selectLastExperienceInserted();
        },

        getAllExperiences: function () {
            return model.selectAllExperiences();
        },

        getAllExperiencesByUser: function (userResult) {
            return model.selectAllExperiencesByUser(userResult);
        },

        getAllExperiencesByUserByCategory: function (id_user, id_category) {
            return model.selectAllExperiencesByUserByCategory(
                id_user,
                id_category
            );
        },
        getAllExperiencesByCategory: function (id_category) {
            return model.selectAllExperiencesByCategory(id_category);
        },

        getAllExperiencesByUserOrderedByDateAsc: function (id_user) {
            return model.selectAllExperiencesByUserOrderedByDateAsc(id_user);
        },

        getAllExperiencesByUserOrderedByVoteAsc: function (id_user) {
            return model.selectAllExperiencesByUserOrderedByVoteAsc(id_user);
        },

        getAllExperiencesOrderedByDateAsc: function () {
            return model.selectAllExperiencesOrderedByDateAsc();
        },

        getAllExperiencesOrderedByVoteAsc: function () {
            return model.selectAllExperiencesOrderedByVoteAsc();
        },
        getAllExperiencesByUserOrderedByDateDesc: function (id_user) {
            return model.selectAllExperiencesByUserOrderedByDateDesc(id_user);
        },

        getAllExperiencesByUserOrderedByVoteDesc: function (id_user) {
            return model.selectAllExperiencesByUserOrderedByVoteDesc(id_user);
        },

        getAllExperiencesOrderedByDateDesc: function () {
            return model.selectAllExperiencesOrderedByDateDesc();
        },

        getAllExperiencesOrderedByVoteDesc: function () {
            return model.selectAllExperiencesOrderedByVoteDesc();
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

        getCategoryById: function (id_category) {
            return model.selectCategoryById(id_category);
        },

        getAllCategories: function () {
            return model.selectAllCategories();
        },

        getAllUsers: function () {
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
            return model.logout();
        },

        setNewExperience: function (
            title,
            description,
            category,
            latitud,
            longitud,
            state
        ) {
            return model.insertExperience(
                title,
                description,
                category,
                latitud,
                longitud,
                state
            );
        },

        setDeleteExperience: function (id_experience) {
            return model.deleteExperience(id_experience);
        },

        setUpdateExperience: function (
            id_experience,
            title,
            description,
            id_category,
            longitud,
            latitud
        ) {
            return model.updateExperience(
                id_experience,
                title,
                description,
                id_category,
                longitud,
                latitud
            );
        },

        updateImageUrl: function (id_experience, url_image) {
            return model.updateImage(id_experience, url_image);
        },

        setUpdateReport: function (id_experience, reported) {
            return model.updateReport(id_experience, reported);
        },

        setUpdateRate: function (id_experience, rate_p, rate_n) {
            return model.updateRate(id_experience, rate_p, rate_n);
        },

        setUpdateState: function (id_category, state) {
            return model.updateState(id_category, state);
        },

        setNewCategory: function (name) {
            return model.insertCategory(name);
        },

        setUpdateCategory: function (id_category, name) {
            return model.updateCategory(id_category, name);
        },

        uploadImage: function (formData, id_experience) {
            return model.uploadImage(formData, id_experience);
        },
    };

    var view = {
        init: function () {
            controller.decideUserView();

            controller.login();

            controller.register();

            controller.filterCategory();
            controller.orderExperiences();

            controller.openModalModifyAccount();
            controller.modifyAccount();

            controller.addExperience();
            controller.openModalAddExperience();

            controller.showExperienceDetail();
            controller.deleteAnExperience();
            controller.updateStateExperience();

            controller.showMaps();
            controller.reportExperience();
            controller.voteExperience();

            controller.enableEditExperience();
            controller.modifyExperience();
            controller.modifyImage();

            controller.logout();
        },

        userNoLogged: function () {
            controller.getAllExperiences().then((getAllExperiencesResult) => {
                this.headerUserNoLogged();
                this.removeDropdownsFilterOrder();
                this.setCardsTabsExperiencesUserNoLogged(
                    getAllExperiencesResult
                );
                this.removeAddExperienceButton();
            });
        },

        setCardsTabsExperiencesUserNoLogged: function (
            getAllExperiencesResult
        ) {
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
            controller.getUserLogged().then((getUserLoggedResult) => {
                this.userLoggedRender(getUserLoggedResult);
            });
        },

        userLoggedRender: function (result) {
            this.headerLogged(result);
            this.setDropdownsFilterOrder();
            this.setCardsTabsExperiencesUserLogged(result);
            this.setAddExperiencesButton();
        },

        setCardsTabsExperiencesUserLogged: function (result) {
            this.setTabExperiences();
            this.myExperiencesDefault(result);
            this.allExperiencesDefault();
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
                navCategory +=
                    "<label>Crear Categoria</label><div class='input-group mb-3'><input type='text' class='form-control' placeholder='' id='newCategory'>" +
                    "<button class='btn btn-secondary' type='button' id='createCategory'>Crear</button></div><div id='categorias'><ul class='list-group'>";

                //aqui se crea la lista de experiencias con el boton de eliminar(no es funcional) y se añade el event listener del boton de crear
                controller.getAllCategories().then((getAllCategoriesResult) => {
                    for (i = 0; i < getAllCategoriesResult.data.length; i++) {
                        navCategory +=
                            "<li class='list-group-item'><p id=" +
                            getAllCategoriesResult.data[i].id_category +
                            "Text>" +
                            getAllCategoriesResult.data[i].id_category +
                            " " +
                            getAllCategoriesResult.data[i].name +
                            "</p><div class='input-group mb-3'><input type='text' class='form-control' placeholder='' id='" +
                            getAllCategoriesResult.data[i].id_category +
                            "Input'>" +
                            "<button class='btn btn-secondary updateCategory ' type='button' id='" +
                            getAllCategoriesResult.data[i].id_category +
                            "'>Actualizar</button></div>";
                        ("</li>");
                    }
                    document.getElementById("categories").innerHTML =
                        "</ul></div>" + navCategory;

                    let botones = document.getElementsByClassName(
                        "updateCategory"
                    );
                    for (i = 0; i < botones.length; i++) {
                        botones[i].addEventListener("click", function (e) {
                            id = e.target.id;
                            newName = document.getElementById(`${id}Input`)
                                .value;
                            document.getElementById(`${id}Input`).value = "";
                            if (newName != "") {
                                controller
                                    .setUpdateCategory(id, newName)
                                    .then((setUpdateCategoryResult) => {
                                        alert(setUpdateCategoryResult.data);
                                        if (setUpdateCategoryResult.data == 1) {
                                            alert(
                                                "Categoria modificada correctamente"
                                            );
                                            document.getElementById(
                                                `${id}Text`
                                            ).textContent = id + " " + newName;
                                        } else console.log("xd");
                                    });
                            } else {
                                alert("Introduce un nuevo nombre");
                            }
                        });
                    }

                    document
                        .getElementById("createCategory")
                        .addEventListener("click", function () {
                            controller
                                .setNewCategory(
                                    document.getElementById("newCategory").value
                                )
                                .then(() => {
                                    controller
                                        .getAllCategories()
                                        .then((getAllCategoriesResult2) => {
                                            navCategory =
                                                "<ul class='list-group'>";
                                            for (
                                                i = 0;
                                                i <
                                                getAllCategoriesResult2.data
                                                    .length;
                                                i++
                                            ) {
                                                navCategory +=
                                                    "<li class='list-group-item'>" +
                                                    getAllCategoriesResult2
                                                        .data[i].id_category +
                                                    " " +
                                                    getAllCategoriesResult2
                                                        .data[i].name +
                                                    "</li>";
                                            }
                                            document.getElementById(
                                                "categorias"
                                            ).innerHTML = navCategory + "</ul>";
                                        });
                                });
                        });
                });
            }

            /*view.experienceDetailModal(idExpClick);
                        $("#modal-detail").modal("show");*/
            //////REPORTES//////
            controller.getAllExperiences().then((getAllExperiencesResult) => {
                data = getAllExperiencesResult.data;
                modalReportsContent =
                    "<table class='table'><thead><tr><th scope='col'>ID</th><th scope='col'>Título</th><th scope='col'>Reportes</th><th scope='col'> </th></tr></thead><tbody>";
                for (i = 0; i < data.length; i++) {
                    if (data[i].reported > 0)
                        modalReportsContent +=
                            "<tr id='" +
                            data[i].id_experience +
                            "'><th scope='row'>" +
                            data[i].id_experience +
                            "</th><td> " +
                            data[i].title +
                            "</td><td> reports: " +
                            data[i].reported +
                            "</td><td><button  class ='deleteExperienceReport btn btn-secondary'>Eliminar</button>" +
                            " <button  class ='cleanExperienceReport btn btn-secondary'>Limpiar</button></td></tr>";
                }
                modalReportsContent += "</tbody></table>";
                document.getElementById(
                    "reports"
                ).innerHTML = modalReportsContent;
                botonesEliminar = document.getElementsByClassName(
                    "deleteExperienceReport"
                );
                botonesLimpiar = document.getElementsByClassName(
                    "cleanExperienceReport"
                );
                for (i = 0; i < botonesEliminar.length; i++) {
                    botonesEliminar[i].addEventListener("click", function () {
                        controller
                            .setDeleteExperience(
                                this.parentElement.parentElement.id
                            )
                            .then((setDeleteCategoryResult) => {
                                alert(setDeleteCategoryResult.data);
                                if (
                                    setDeleteCategoryResult.data ==
                                    "Se ha eliminado correctamente"
                                )
                                    this.parentElement.parentElement.parentNode.removeChild(
                                        this.parentElement.parentElement
                                    );
                            });
                    });
                }
                for (i = 0; i < botonesLimpiar.length; i++) {
                    botonesLimpiar[i].addEventListener("click", function () {
                        controller
                            .setUpdateReport(
                                this.parentElement.parentElement.id,
                                0
                            )
                            .then((setUpdateReportResult) => {
                                alert(setUpdateReportResult.data);
                                //if (setCleanCategoryResult.data =="Se ha eliminado correctamente")
                                this.parentElement.parentElement.parentNode.removeChild(
                                    this.parentElement.parentElement
                                );
                            });
                    });
                }
            });

            ////USUARIOS/////
            controller.getAllUsers().then((getAllUsersResult) => {
                data = getAllUsersResult.data;
                console.log(getAllUsersResult);
                modalUsersContent =
                    "<table class='table'><thead><tr><th scope='col'>ID</th><th scope='col'>Nombre</th><th scope='col'></th></tr></thead><tbody>";

                for (i = 0; i < data.length; i++)
                    modalUsersContent +=
                        "<tr id='" +
                        data[i].id_user +
                        "'><th scope='row'>" +
                        data[i].id_user +
                        "</th><td>" +
                        data[i].name +
                        "</td><td><button class ='deleteUser btn btn-secondary'>Dar de baja</button></td><tr>";

                document.getElementById("users").innerHTML =
                    modalUsersContent + "</tbody></table>";
                botonesEliminar = document.getElementsByClassName("deleteUser");

                for (i = 0; i < botonesEliminar.length; i++) {
                    botonesEliminar[i].addEventListener("click", function (e) {
                        controller
                            .setDeleteUser(this.parentElement.parentElement.id)
                            .then((setDeleteUserResult) => {
                                alert(setDeleteUserResult.data);
                                //if(setDeleteUserResult.data=="Usuario eliminado correctamente")
                                this.parentElement.parentElement.parentNode.removeChild(
                                    this.parentElement.parentElement
                                );
                            });
                    });
                }
            });

            navOptionHtml += `
            <li class="nav-item">
                <a id="showModalUseraccount" class="nav-link" data-toggle="modal" data-target="#modal-useraccount" href="#">Bienvenido, ${result.data[0].id_user}</span></a>
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

        setDropdownsFilterOrder: function () {
            //Añade los tabs de mis experiencias o todas las experiencias.
            let dropdownContainerElement = document.getElementById(
                "dropdowns-experiences"
            );

            dropdownContainerElement.innerHTML = `<span class="spinner-border"></span>`;

            controller.getAllCategories().then((categoriesResult) => {
                console.log(categoriesResult);

                let htmlString = `
                                <div class="d-flex">
                
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownCategories" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Categorias
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownCategories">
                                        `;
                for (
                    let index = 0;
                    index < categoriesResult.data.length;
                    index++
                ) {
                    htmlString += `<button class="dropdown-item" type="button" idcat="${categoriesResult.data[index].id_category}">${categoriesResult.data[index].name}</button>`;
                }

                htmlString += `
                                        </div>
                                    </div>
                
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Ordenar por:
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdown2">
                                            <button id="orderDateAsc" class="dropdown-item" type="button">Fecha ascendente</button>
                                            <button id="orderDateDesc" class="dropdown-item" type="button">Fecha descendente</button>
                                            <button id="orderVoteAsc" class="dropdown-item" type="button">Puntuación ascendente</button>
                                            <button  id="orderVoteDesc"class="dropdown-item" type="button">Puntuacion descendente</button>
                                        </div>
                                    </div>
                                </div>`;

                dropdownContainerElement.innerHTML = htmlString;
            });
        },

        setTabExperiences: function () {
            let dropdownContainerElement = document.getElementById(
                "cards-tabs-experiences"
            );
            let htmlString = `
                    
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
                                <span class="spinner-border"></span>

                            </div>
                        </div>
                        <div class="tab-pane fade" id="allexperiences">
                            <div id="allexperiences-box">
                                <span class="spinner-border"></span>

                            </div>
                        </div>
                    </div>
                `;
            dropdownContainerElement.innerHTML = htmlString;
        },

        myExperiencesDefault: function (userResult) {
            let myexperiences_boxElement = document.getElementById(
                "myexperiences-box"
            );

            controller
                .getAllExperiencesByUser(userResult)
                .then((getAllExperiencesByUserResult) => {
                    if (getAllExperiencesByUserResult.data.length == 0) {
                        myexperiences_boxElement.innerHTML = this.noResultsMessageHtml(
                            "Vaya... Parece que no existen experiencias. ¿Por que no pruebas a crear una?"
                        );
                    } else {
                        myexperiences_boxElement.innerHTML = this.setExperiencesGrid(
                            getAllExperiencesByUserResult
                        );
                    }
                });
        },

        allExperiencesDefault: function () {
            let allexperiences_boxElement = document.getElementById(
                "allexperiences-box"
            );

            controller.getAllExperiences().then((getAllExperiencesResult) => {
                console.log(
                    getAllExperiencesResult,
                    this.allExperiencesDefault.name
                );
                if (getAllExperiencesResult.data.length == 0) {
                    allexperiences_boxElement.innerHTML = this.noResultsMessageHtml(
                        "Vaya... Parece que no existen experiencias. ¿Por que no pruebas a crear una?"
                    );
                } else {
                    for (
                        let i = 0;
                        i < getAllExperiencesResult.data.length;
                        i++
                    ) {
                        if (getAllExperiencesResult.data[i].state == "esbozo") {
                            getAllExperiencesResult.data.splice(i, 1);
                            i--;
                        }
                        console.log(i);
                    }
                    allexperiences_boxElement.innerHTML = this.setExperiencesGrid(
                        getAllExperiencesResult
                    );
                }
            });
        },

        myExperiencesFilterCategory: function (idCategory) {
            let myexperiences_boxElement = document.getElementById(
                "myexperiences-box"
            );
            controller.getUserLogged().then((userResult) => {
                console.log(userResult);
                console.log(idCategory);
                controller
                    .getAllExperiencesByUserByCategory(
                        userResult.data[0].id_user,
                        idCategory
                    )
                    .then((experiencesResult) => {
                        if (experiencesResult.data.length == 0) {
                            myexperiences_boxElement.innerHTML = this.noResultsMessageHtml(
                                "Vaya... Parece que no existen experiencias. ¿Por que no pruebas a crear una?"
                            );
                        } else {
                            myexperiences_boxElement.innerHTML = this.setExperiencesGrid(
                                experiencesResult
                            );
                        }
                    });
            });
        },

        allExperiencesFilterCategory: function (idCategory) {
            let allexperiences_boxElement = document.getElementById(
                "allexperiences-box"
            );

            controller
                .getAllExperiencesByCategory(idCategory)
                .then((experiencesResult) => {
                    console.log(experiencesResult);

                    if (experiencesResult.data.length == 0) {
                        allexperiences_boxElement.innerHTML = this.noResultsMessageHtml(
                            "Vaya... Parece que no existen experiencias. ¿Por que no pruebas a crear una?"
                        );
                    } else {
                        allexperiences_boxElement.innerHTML = this.setExperiencesGrid(
                            experiencesResult
                        );
                    }
                });
        },

        myExperiencesOrderByDateAsc: function () {
            let myexperiences_boxElement = document.getElementById(
                "myexperiences-box"
            );
            controller.getUserLogged().then((userResult) => {
                controller
                    .getAllExperiencesByUserOrderedByDateAsc(
                        userResult.data[0].id_user
                    )
                    .then((experiencesResult) => {
                        if (experiencesResult.data.length == 0) {
                            myexperiences_boxElement.innerHTML = this.noResultsMessageHtml(
                                "Vaya... Parece que no existen experiencias. ¿Por que no pruebas a crear una?"
                            );
                        } else {
                            myexperiences_boxElement.innerHTML = this.setExperiencesGrid(
                                experiencesResult
                            );
                        }
                    });
            });
        },

        allExperiencesOrderByDateAsc: function () {
            let allexperiences_boxElement = document.getElementById(
                "allexperiences-box"
            );
            controller
                .getAllExperiencesOrderedByDateAsc()
                .then((experiencesResult) => {
                    if (experiencesResult.data.length == 0) {
                        allexperiences_boxElement.innerHTML = this.noResultsMessageHtml(
                            "Vaya... Parece que no existen experiencias. ¿Por que no pruebas a crear una?"
                        );
                    } else {
                        allexperiences_boxElement.innerHTML = this.setExperiencesGrid(
                            experiencesResult
                        );
                    }
                });
        },

        myExperiencesOrderByVoteAsc: function () {
            let myexperiences_boxElement = document.getElementById(
                "myexperiences-box"
            );
            controller.getUserLogged().then((userResult) => {
                controller
                    .getAllExperiencesByUserOrderedByVoteAsc(
                        userResult.data[0].id_user
                    )
                    .then((experiencesResult) => {
                        if (experiencesResult.data.length == 0) {
                            myexperiences_boxElement.innerHTML = this.noResultsMessageHtml(
                                "Vaya... Parece que no tienes experiencias creadas. ¿Por que no pruebas a crear una?"
                            );
                        } else {
                            myexperiences_boxElement.innerHTML = this.setExperiencesGrid(
                                experiencesResult
                            );
                        }
                    });
            });
        },

        allExperiencesOrderByVoteAsc: function () {
            let allexperiences_boxElement = document.getElementById(
                "allexperiences-box"
            );
            controller
                .getAllExperiencesOrderedByVoteAsc()
                .then((experiencesResult) => {
                    if (experiencesResult.data.length == 0) {
                        allexperiences_boxElement.innerHTML = this.noResultsMessageHtml(
                            "Vaya... Parece que no existen experiencias. ¿Por que no pruebas a crear una?"
                        );
                    } else {
                        allexperiences_boxElement.innerHTML = this.setExperiencesGrid(
                            experiencesResult
                        );
                    }
                });
        },
        myExperiencesOrderByDateDesc: function () {
            let myexperiences_boxElement = document.getElementById(
                "myexperiences-box"
            );
            controller.getUserLogged().then((userResult) => {
                controller
                    .getAllExperiencesByUserOrderedByDateDesc(
                        userResult.data[0].id_user
                    )
                    .then((experiencesResult) => {
                        if (experiencesResult.data.length == 0) {
                            myexperiences_boxElement.innerHTML = this.noResultsMessageHtml(
                                "Vaya... Parece que no tienes experiencias creadas. ¿Por que no pruebas a crear una?"
                            );
                        } else {
                            myexperiences_boxElement.innerHTML = this.setExperiencesGrid(
                                experiencesResult
                            );
                        }
                    });
            });
        },

        setAllExperiencesOrderByDateDesc: function () {
            let allexperiences_boxElement = document.getElementById(
                "allexperiences-box"
            );
            controller
                .getAllExperiencesOrderedByDateDesc()
                .then((experiencesResult) => {
                    if (experiencesResult.data.length == 0) {
                        allexperiences_boxElement.innerHTML = this.noResultsMessageHtml(
                            "Vaya... Parece que no existen experiencias. ¿Por que no pruebas a crear una?"
                        );
                    } else {
                        allexperiences_boxElement.innerHTML = this.setExperiencesGrid(
                            experiencesResult
                        );
                    }
                });
        },

        setMyExperiencesOrderByVoteDesc: function () {
            let myexperiences_boxElement = document.getElementById(
                "myexperiences-box"
            );
            controller.getUserLogged().then((userResult) => {
                controller
                    .getAllExperiencesByUserOrderedByVoteDesc(
                        userResult.data[0].id_user
                    )
                    .then((experiencesResult) => {
                        if (experiencesResult.data.length == 0) {
                            myexperiences_boxElement.innerHTML = this.noResultsMessageHtml(
                                "Vaya... Parece que no tienes experiencias creadas. ¿Por que no pruebas a crear una?"
                            );
                        } else {
                            myexperiences_boxElement.innerHTML = this.setExperiencesGrid(
                                experiencesResult
                            );
                        }
                    });
            });
        },

        setAllExperiencesOrderByVoteDesc: function () {
            let allexperiences_boxElement = document.getElementById(
                "allexperiences-box"
            );
            controller
                .getAllExperiencesOrderedByVoteDesc()
                .then((experiencesResult) => {
                    if (experiencesResult.data.length == 0) {
                        allexperiences_boxElement.innerHTML = this.noResultsMessageHtml(
                            "Vaya... Parece que no existen experiencias. ¿Por que no pruebas a crear una?"
                        );
                    } else {
                        allexperiences_boxElement.innerHTML = this.setExperiencesGrid(
                            experiencesResult
                        );
                    }
                });
        },

        noResultsMessageHtml: function (message) {
            return `
                <div class="content-row experiencies">
                    <div class="row">
                        <div class="col-12">
                            <p>
                                ${message}
                            </p>
                        </div>
                    </div>
                </div>`;
        },

        setExperiencesGrid: function (experiencesResult) {
            let htmlString = `
            <div class="content-row experiencies">
                <div class="row">`;
            for (let i = 0; i < experiencesResult.data.length; i++) {
                htmlString += `
                    <div class="col-xs-12 col-sm-6 col-md-4 card-container">
                        <div class="card h-100" expid="${experiencesResult.data[i].id_experience}" userid="${experiencesResult.data[i].id_user}" catid="${experiencesResult.data[i].id_category}">

                            <img src="${experiencesResult.data[i].image}" alt="Paris" style="width: 100%; height: 200px;">
                            <div class="card-body">
                                <h5 class="card-title">${experiencesResult.data[i].title}</h5>
                            </div>
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col container-fluid">
                                        <small class="text-muted">${experiencesResult.data[i].created}</small>
                                    </div>
                                    <div class="col text-right">
                                        <small class="text-muted">PP:${experiencesResult.data[i].rate_p}</small>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <small catid="${experiencesResult.data[i].id_category}" class="text-muted">Categoría: ${experiencesResult.data[i].id_category}</small>
                                    </div>
                                    <div class="col text-right">
                                        <small class="text-muted">PN:${experiencesResult.data[i].rate_n}</small>
                                    </div>
                                </div>

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

        login: function () {
            let user_id = document.getElementById("modal-login-username").value;
            let password = document.getElementById("modal-login-password")
                .value;

            controller.getUserLogin(user_id, password).then((loginResult) => {
                if (loginResult.data != false) {
                    $("#modal-login").modal("hide");
                    //LoggedRender

                    // this.userLoggedRender(loginResult);
                    // this.setAddExperiencesButton();
                    controller.decideUserView();
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
            let id_user = document.getElementById("modal-register-username")
                .value;
            let name = document.getElementById("modal-register-name").value;
            let password = document.getElementById("modal-register-password")
                .value;
            let email = document.getElementById("modal-register-email").value;

            controller
                .setNewUser(id_user, name, password, email)
                .then((newUserResult) => {
                    console.log(newUserResult, this.register.name);

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
                        alert("Usuario no creado");
                    }
                });
        },

        modifyAccount: function () {
            let idUserInput = document.getElementById(
                "modal-useraccount-username"
            );
            let nameInput = document.getElementById("modal-useraccount-name");
            let passwordInput = document.getElementById(
                "modal-useraccount-password"
            );
            let emailInput = document.getElementById("modal-useraccount-email");

            let newIdUser = idUserInput.value;
            let newName = nameInput.value;
            let newPassword = passwordInput.value;
            let newEmail = emailInput.value;

            controller
                .setUpdateAccount(newIdUser, newName, newPassword, newEmail)
                .then((updateUserResult) => {
                    if (updateUserResult.data == "ok") {
                        $("#modal-useraccount").modal("hide");
                        // controller.getUserById(newIdUser).then((userResult) => {
                        // view.userLoggedRender(userResult);
                        controller.decideUserView();
                        swal({
                            title: "¡Bien hecho!",
                            text:
                                "Has actualizado tu información correctamente.",
                            icon: "success",
                        });
                        // });
                    } else {
                        alert(updateUserResult.data);
                    }
                });
        },

        addExperience: function () {
            let title = document.getElementById("modal-addExperience-title")
                .value;
            // let description = document.getElementById(
            //     "modal-addExperience-desc"
            // ).value;
            let description = CKEDITOR.instances.modaladdExperiencedesc.getData();
            let category = document.getElementById("selCategory").value;
            let latitud = document.getElementById("latitud").value;
            let longitud = document.getElementById("longitud").value;

            if (document.getElementById("checkEsbozo").checked)
                state = "esbozo";
            else state = "publicada";

            controller
                .setNewExperience(
                    title,
                    description,
                    category,
                    latitud,
                    longitud,
                    state
                )
                .then((result) => {
                    console.log(result);
                    if (result.data == "Experiencia subida correctamente") {
                        swal({
                            title: "¡Bien hecho!",
                            text: "Has añadido correctamente una experiencia.",
                            icon: "success",
                        });
                        $("#modal-addExperience").modal("hide");
                        //Para obtener ultima experiencia
                        controller
                            .getLastExperienceInserted()
                            .then((experienceResult) => {
                                console.log(experienceResult);

                                //Para el file
                                let file = document.querySelector("#file");
                                let formData = new FormData();
                                formData.append("file", file.files[0]);

                                view.uploadImage(
                                    formData,
                                    experienceResult.data[0].id_experience
                                );
                            });
                    } else {
                        alert("No añadido");
                    }
                });
        },

        uploadImage: function (formData, id_experience) {
            //AQUI EMPIEZA LA MOVIDA

            //Para subir imagen
            controller
                .uploadImage(formData, id_experience)
                .then(function (response) {
                    console.log(response);
                    if (response.data != false) {
                        controller
                            .updateImageUrl(id_experience, response.data)
                            .then((result) => {
                                console.log(result);
                                swal({
                                    title: "¡Bien hecho!",
                                    text: "Imagen subida correctamente.",
                                    icon: "success",
                                });

                                $("#modal-detail").modal("hide");

                                document.getElementById("modal-detail").click();

                                controller.decideUserView();
                            });
                    } else {
                        alert(response);
                    }
                })
                .catch(function (response) {
                    console.log(response);
                });
        },

        setCategoriesOptionInAddExperience: function () {
            let selCategoryElement = document.getElementById("selCategory");
            let htmlString = "";
            controller.getAllCategories().then((categoriesResult) => {
                console.log(categoriesResult);
                for (let i = 0; i < categoriesResult.data.length; i++) {
                    htmlString += `<option value="${categoriesResult.data[i].id_category}">${categoriesResult.data[i].name}</option>`;
                }
                selCategoryElement.innerHTML = htmlString;
            });
        },

        setValuesInExperienceDetailModal: function (expId) {
            controller.getExperienceById(expId).then((experienceResult) => {
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
                image.innerHTML = `<img src="${experienceResult.data.image}" style="
                    width: 100%;
                    height: 300px;
                ">`;
            });
        },

        experienceModifying: function (expid) {
            //Esta parte para se cambiará a editor enriquecido
            let titulo = document.getElementById("modal-detail-title");
            titulo.setAttribute("contenteditable", true);

            let description = document.getElementById(
                "modal-detail-description"
            );
            description.setAttribute("contenteditable", true);

            view.setSelectCategoriesInDetailModal();
            view.setLatitudLongitudInputs();
            view.setLatitudLongitudValues(expid);
            view.setSaveExperienceModifiedButton(expid);
            view.setFormModifyImageButton(expid);
        },

        setSelectCategoriesInDetailModal: function () {
            controller.getAllCategories().then((categoriesResult) => {
                console.log(categoriesResult);
                let selCategoryElement = document.getElementById(
                    "modal-detail-category-container"
                );
                let htmlString = `
                <select
                    class="form-control"
                    id="modal-detail-category"
                >`;

                for (let i = 0; i < categoriesResult.data.length; i++) {
                    htmlString += `<option value="${categoriesResult.data[i].id_category}">${categoriesResult.data[i].name}</option>`;
                }
                htmlString += `</select>`;
                selCategoryElement.innerHTML = htmlString;
            });
        },

        setLatitudLongitudInputs: function () {
            let locationContainer = document.getElementById(
                "modal-detail-location-container"
            );
            locationContainer.innerHTML = `<div class="row">
                <div class="col-6">
                    <div>
                        <label for="modal-detail-latitud"
                            >Latitud:</label
                        >
                        <input
                            id="modal-detail-latitud"
                            class="form-control"
                            type="text"
                        />
                    </div>
                </div>
                <div class="col-6">
                    <label for="modal-detail-longitud"
                        >Longitud:</label
                    >
                    <input
                        id="modal-detail-longitud"
                        class="form-control"
                        type="text"
                    />
                </div>
            </div>`;
        },

        setLatitudLongitudValues: function (expid) {
            controller.getExperienceById(expid).then((experienceResult) => {
                let latitudElement = document.getElementById(
                    "modal-detail-latitud"
                );
                let longitudElement = document.getElementById(
                    "modal-detail-longitud"
                );

                latitudElement.value = `${experienceResult.data.latitud}`;
                longitudElement.value = `${experienceResult.data.longitud}`;
            });
        },

        experienceModified: function (expId) {
            let titulo = document.getElementById("modal-detail-title")
                .innerHTML;
            let description = document.getElementById(
                "modal-detail-description"
            ).innerHTML;
            let latitud = document.getElementById("modal-detail-latitud").value;
            let longitud = document.getElementById("modal-detail-longitud")
                .value;
            let id_categoria = document.getElementById("modal-detail-category")
                .value;

            controller
                .setUpdateExperience(
                    expId,
                    titulo,
                    description,
                    id_categoria,
                    longitud,
                    latitud
                )
                .then((updateResult) => {
                    console.log(updateResult);
                    if (
                        updateResult.data ==
                        "Experiencia modificada correctamente"
                    ) {
                        swal({
                            title: "¡Bien hecho!",
                            text:
                                "Has modifacado correctamente una experiencia.",
                            icon: "success",
                        });

                        //Esto se modificara
                        let titulo = document.getElementById(
                            "modal-detail-title"
                        );
                        let description = document.getElementById(
                            "modal-detail-description"
                        );
                        titulo.setAttribute("contenteditable", false);
                        description.setAttribute("contenteditable", false);
                        //

                        $("#modal-detail").modal("hide");

                        controller.decideUserView();
                    } else {
                        alert("ERROR");
                    }
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

        experienceStateUpdated: function (expId) {
            controller.setUpdateState(expId, "publicada").then((result) => {
                console.log(result.data);
                if (result.data == 1) {
                    view.userLogged();
                    $("#modal-detail").modal("hide");
                    swal({
                        title: "¡Bien hecho!",
                        text: "Estado modificado correctamente.",
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

        setIframeMaps: function (idExp) {
            controller.getExperienceById(idExp).then((experienceResult) => {
                console.log(experienceResult);
                document.getElementById("maps-container").innerHTML = `
                <iframe
                    width="100%"
                    height="600"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=${experienceResult.data.latitud},%20${experienceResult.data.longitud}+(Ubicaci%C3%B3n)&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>`;
            });
        },

        upvote: function (id_experience) {
            controller
                .getExperienceById(id_experience)
                .then((experienceResult) => {
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

        setValuesInModifyAccountModal: function () {
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
                idUserInput.value = userResult.data[0].id_user;
                nameInput.value = userResult.data[0].name;
                emailInput.value = userResult.data[0].email;
            });
        },

        logout: function () {
            controller.setLogout().then(() => {
                swal({
                    title: "¡Bien hecho!",
                    text: "Has guardado cerrado tu sesión correctamente.",
                    icon: "success",
                });

                //Actualizar vista
                controller.decideUserView();
            });
            //Alert
        },

        removeDropdownsFilterOrder: function () {
            document.getElementById("dropdowns-experiences").innerHTML = "";
        },

        setAddExperiencesButton: function () {
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

        removeAddExperienceButton: function () {
            document.getElementById(
                "container-button-addExperience"
            ).innerHTML = "";
        },

        setUpdateStateButton: function (idExp) {
            document.getElementById(
                "modal-detail-button-update-state-container"
            ).innerHTML = `<button
                                id="modal-detail-button-update-state"
                                type="button"
                                class="btn"
                                expid="${idExp}"
                            >
                                Publicar
                            </button>`;
        },

        setDeleteExperienceButton: function (idExp) {
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
        removeUpdateStateButton: function () {
            document.getElementById(
                "modal-detail-button-update-state-container"
            ).innerHTML = "";
        },

        setEditExperienceButton: function (idExp) {
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

        setSaveExperienceModifiedButton: function (expid) {
            document.getElementById(
                "modal-detail-button-saveEdited-container"
            ).innerHTML = `<button
                                type="button"
                                class="btn"
                                id="modal-detail-button-saveEdited"
                                expid="${expid}"
                            >
                                Guardar
                            </button>`;
        },

        removeSaveEditExperienceButton: function () {
            document.getElementById(
                "modal-detail-button-saveEdited-container"
            ).innerHTML = "";
        },

        setFormModifyImageButton: function (expid) {
            document.getElementById(
                "form-modifyImage-container"
            ).innerHTML = `<form
                                id="form-modifyImage-form"
                                enctype="multipart/form-data"
                                expid="${expid}"
                            >
                                <input
                                    type="file"
                                    name="file"
                                    id="file-modifyImage"
                                />
                                <input
                                    id="modal-addExperience-button"
                                    type="submit"
                                    value="SUBMIT"
                                    name="submit"
                                    
                                />
                            </form>`;
        },

        removeModifyImageButton: function () {
            document.getElementById("form-modifyImage-container").innerHTML =
                "";
        },

        setReportExperienceButton: function (idExp) {
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

        setButtonCategory: function (id_category) {
            controller.getCategoryById(id_category).then((categoryResult) => {
                let categoryElement = document.getElementById(
                    "modal-detail-category-container"
                );
                categoryElement.innerHTML = `<button
                                                    type="button"
                                                    class="btn">Categoría: 
                                                    ${categoryResult.data[0].name}
                                            </button>`;
            });
        },

        setButtonMaps: function (idExp) {
            let mapsElement = document.getElementById(
                "modal-detail-button-maps-container"
            );
            mapsElement.innerHTML = `<button
            id="modal-detail-button-maps"
            type="button"
            class="btn"
            data-toggle="modal"
            data-target="#modelMaps"
            expid="${idExp}"
            >
            Maps
            </button>`;
        },
        //Attributes
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
