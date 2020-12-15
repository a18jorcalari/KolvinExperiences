//Hay que hacerlo de esta forma para poder crear eventos con elementos dinamicos
$("#nav-options").on("click", "#logout", function () {
    console.log("entra");
    let nav_optionsElement = document.getElementById("nav-options");
    nav_optionsElement.innerHTML = `
        <li class="nav-item">
            <a class="nav-link" data-toggle="modal" data-target="#login" href="#">Log In</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="modal" data-target="#register" href="#">Register</span></a>
        </li>
        `;

    let cards_tabs_experiencesElement = document.getElementById(
        "cards-tabs-experiences"
    );

    axios
        .get("models/expApi.php", {
            params: {
                query: 1,
            },
        })
        .then(function (res) {
            let htmlText = `
                    <div class="content-row">
                        <div class="row">`;
            for (let i = 0; i < res.data.length; i++) {
                let timeStampJson = res.data[i].created;
                var d = new Date(Date.parse(timeStampJson));
                htmlText += `
                        <div class="col-sm-12 col-lg-4 card-container">
                            <div class="card h-100">
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

            cards_tabs_experiencesElement.innerHTML = htmlText;
        });
});
