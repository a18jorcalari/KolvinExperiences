let buttonRegister = document.getElementById("button_register");
buttonRegister.addEventListener("click", function () {
    //Si el usuario se ha creado correctamente hacer esto:
    $("#register").modal("hide"); //Funcion que sirve para esconder el modal con la id Register.

    //Alert
    swal({
        title: "¡Bien hecho!",
        text: "Usuario creado satisfactoriamente. Ahora inicia sesión.",
        icon: "success",
    });
});
