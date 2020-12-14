let button_updateElement = document.getElementById("button_update");
button_updateElement.addEventListener("click", function () {
    $("#useraccount").modal("hide");
    //Alert
    swal({
        title: "¡Bien hecho!",
        text: "Has guardado tu información correctamente.",
        icon: "success",
    });
});
