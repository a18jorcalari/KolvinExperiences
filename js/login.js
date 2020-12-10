window.onload = function () {
    var boton = document.getElementById("boton");
    var api;
    var users = {
        usuarios: [
            { userName: "Manolo", password: "12345", tipo: "1" },
            { userName: "Pepe", password: "12345", tipo: "2" },
            { userName: "Ermengol", password: "12345", tipo: "2" },
        ],
    };

    boton.addEventListener("click", function () {
        api = login();
    });

    function login() {
        //boton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><p>Iniciar Sesion</p>'
        /*       axios.get("http://labs.iam.cat/~aperezh/valida.php", {
                   params: {
                       user: document.getElementById("user").value,
                       pass: document.getElementById("password").value
                   }
               })
                   .then(function (res) {
                       console.log(res);
                       if (res.data.status == "fail") alert("Te has equivocado");
                       else {
                           document.getElementById("usuario").setAttribute("style", "visibility: block");
                       }
       
                   }).catch(function (error) {
                       boton.innerHTML = '<p>Iniciar Sesion</p>';
       
                       console.log(error)
                   }).then(function () {
                       boton.innerHTML = '<p>Iniciar Sesion</p>';
       
                   });*/

        for (let i = 0; i < users["usuarios"].length; i++) {
            if (
                document.getElementById("user").value ==
                users["usuarios"][i]["userName"]
            ) {
                if (
                    document.getElementById("password").value ==
                    users["usuarios"][i]["password"]
                ) {
                    alert("Bienvenido " + users["usuarios"][i]["userName"]);
                    if (users["usuarios"][i]["tipo"] == 1) {
                        alert("Administrador");
                    } else alert("Cliente");
                } else alert("Login incorrecto");
            }
        }
    }
};
