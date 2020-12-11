window.onload = function () {
    var loginButton = document.getElementById("login");
    var modalButton = document.getElementById("modal");

    var api;
    var users = {
        "usuarios": [
            { userName: "Manolo", password: "12345", tipo: "1" },
            { userName: "Pepe", password: "12345", tipo: "2" },
            { userName: "Ermengol", password: "12345", tipo: "2" },
        ]
    }

    modalButton.addEventListener('click', function () {
    
        loginButton.addEventListener('click', function () {
            api = login();
        })
    })

    function login() {
        //loginButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><p>Iniciar Sesion</p>'
               axios.get("usersApi.php", {
                params: {
                    user: document.getElementById("user").value,
                    password: document.getElementById("password").value,
                    query: 1
                }})
                   .then(function (res) {
                       console.log(res);
                        if (res.data.length>1) {
                            alert("username: "+ res.data[0].id_user+ ", name: " +res.data[0].name+ ", type: " + res.data[0].type );
                        }else{
                            alert("el usuario o la contraseña son incorrectos");
                        }
                   }).catch(function (error) {
                       loginButton.innerHTML = '<p>Iniciar Sesion</p>';
       
                       console.log(error)
                   }).then(function () {
                       loginButton.innerHTML = '<p>Iniciar Sesion</p>';
       
                   });

    }
}