// Definiu l'URL de processament i l'element del formulari
const url = "uploadFile.php";
const form = document.querySelector("#form");
// form-addExperience

// Listen form submit
form.addEventListener("submit", (e) => {
    // evitar que es desencadeni l'acció predeterminada
    e.preventDefault();

    // Gather files and begin FormData
    let file = document.querySelector("#file");
    let formData = new FormData();

    formData.append("file", file.files[0]);
    // formData.append("id_experience", 1);
    // asincro
    axios({
        method: "post",
        url: url,
        data: formData,
        header: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
        },
        params: {
            id_experience: 1,
        },
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (response) {
            console.log(response);
        });
});
