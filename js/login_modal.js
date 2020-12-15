let buttonLogin = document.getElementById("button_login");
buttonLogin.addEventListener("click", function () {
    //Si las credenciales son correctas y es normal user hacer esto:

    //Funcion que sirve para esconder el modal con la id login.
    $("#login").modal("hide");

    /************ NORMAL USER VIEW ******************/

    //Sustituye en navbar a modo user logged
    //Eliminar li de admin para normal user
    let nav_optionsElement = document.getElementById("nav-options");
    nav_optionsElement.innerHTML = `
        <li class="nav-item">
            <a class="nav-link" data-toggle="modal" data-target="#adminpanel" href="#">Panel de administrador</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="modal" data-target="#useraccount" href="#">Bienvenido, usuario</span></a>
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
                query: 1,
            },
        })
        .then(function (res) {
            let htmlText = `
            <div class="content-row experiencies">
                <div class="row">`;
            for (let i = 0; i < res.data.length; i++) {
                let timeStampJson = res.data[i].created;
                var d = new Date(Date.parse(timeStampJson));
                htmlText += `
                        <div class="col-sm-12 col-lg-4 card-container">
                            <div class="card h-100">
                                <div style="width: 100%; height: 200px; background-color: grey;"></div>
                                <div class="card-body">
                                    <h5 class="card-title">${
                                        res.data[i].title
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
                query: 1,
            },
        })
        .then(function (res) {
            let htmlText2 = `
                <div class="content-row experiencies">
                    <div class="row">`;
            for (let i = 0; i < res.data.length; i++) {
                let timeStampJson = res.data[i].created;
                var d = new Date(Date.parse(timeStampJson));

                htmlText2 += `
                        <div class="col-sm-12 col-lg-4 card-container">
                            <div class="card h-100">
                                <div style="width: 100%; height: 200px; background-color: grey;"></div>
                                <div class="card-body">
                                    <h5 class="card-title">${
                                        res.data[i].title
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

    //Alert
    swal({
        title: "¡Bien hecho!",
        text: "Te has loguedo correctamente",
        icon: "success",
    });
});
