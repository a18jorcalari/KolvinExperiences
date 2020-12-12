// window.onload = function () {
let buttonRegister = document.getElementById("button_register");
buttonRegister.addEventListener("click", function () {
    //Usuario creado correctamente
    $("#register").modal("hide"); //Funcion que sirve para esconder el modal con la id Register.
    swal({
        title: "¡Bien hecho!",
        text: "Usuario creado satisfactoriamente. Ahora inicia sesión.",
        icon: "success",
    });
});
// };
