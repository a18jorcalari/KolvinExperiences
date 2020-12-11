window.onload = function () {
    console.log("entro");
    let buttonLogin = document.getElementById("button_login");
    buttonLogin.addEventListener("click", function () {
        $("#login-modal").modal("dispose");
    });
};
