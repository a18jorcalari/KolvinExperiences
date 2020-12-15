// Aqui comprobar si existe usuario logueado con api php.

//Ningun usuario logged:
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
            <div class="content-row experiencies">
                <div class="row">`;
        for (let i = 0; i < res.data.length; i++) {
            console.log(res.data[i]);
            htmlText += `
                <div class="col-sm-12 col-lg-4 card-container">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">${res.data[i].title}</h5>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
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

// Si existe usuario logueado:
