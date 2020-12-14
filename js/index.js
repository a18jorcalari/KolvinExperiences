// Aqui comprobar si existe usuario logueado con api php.

//Ningun usuario logged:

let cards_tabs_experiencesElement = document.getElementById(
    "cards-tabs-experiences"
);
cards_tabs_experiencesElement.innerHTML = `
    <div class="experiencies">
        <div class="card-deck">
            <div class="row row-cols-1 row-cols-md-3">
                <div div class="col">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                        </div>
                    </div>
                </div>
                <div div class="col">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                        </div>
                    </div>
                </div>
                <div div class="col">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                        </div>
                    </div>
                </div>
                <div div class="col">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                        </div>
                    </div>
                </div>
                <div div class="col">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                        </div>
                    </div>
                </div>
                <div div class="col">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

// Si existe usuario logueado:

//Sustituye en navbar a modo user logged
// let nav_optionsElement = document.getElementById("nav-options");
// nav_optionsElement.innerHTML = `
//     <li class="nav-item">
//     <a class="nav-link">Bienvenido, usuario</span></a>
//     </li>
//     <li class="nav-item">
//         <a id="logout" class="nav-link" href="#">Logout</span></a>
//     </li>
//     `;

// //Añade los tabs de mis experiencias o todas las experiencias.
// let tabs_experiencesElement = document.getElementById(
//     "cards-tabs-experiences"
// );
// tabs_experiencesElement.innerHTML = `
//     <ul class="nav nav-tabs">
//         <li class="nav-item">
//             <a href="#myexperiences" class="nav-link active" data-toggle="tab">Mis experiencias</a>
//         </li>
//         <li class="nav-item">
//             <a href="#allexperiences" class="nav-link" data-toggle="tab">Todas las experiencias</a>
//         </li>
//     </ul>
//     <div class="tab-content">
//         <div class="tab-pane fade show active" id="myexperiences">
//             <div id="myexperiences-box">
//             </div>
//         </div>
//         <div class="tab-pane fade" id="allexperiences">
//             <div id="allexperiences-box">
//             </div>
//         </div>
//     </div>
//     `;

// //CARDS USER EXPERIENCES

// //My experiences
// let myexperiences_boxElement = document.getElementById("myexperiences-box");
// myexperiences_boxElement.innerHTML = `
//     <div class="experiencies">
//         <div class="card-deck">
//             <div class="row row-cols-1 row-cols-md-3">
//                 <div class="col">
//                     <div class="card h-100">
//                         <div style="width: 100%; height: 200px; background-color: grey;"></div>
//                         <div class="card-body">
//                             <h5 class="card-title">Card title</h5>
//                             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
//                         </div>
//                         <div class="card-footer">
//                             <small class="text-muted">Last updated 3 mins ago</small>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col">
//                     <div class="card h-100">
//                         <div style="width: 100%; height: 200px; background-color: grey;"></div>
//                         <div class="card-body">
//                             <h5 class="card-title">Card title</h5>
//                             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
//                         </div>
//                         <div class="card-footer">
//                             <small class="text-muted">Last updated 3 mins ago</small>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `;

// //All experiences
// let allexperiences_boxElement = document.getElementById(
//     "allexperiences-box"
// );
// allexperiences_boxElement.innerHTML = `
//     <div class="experiencies">
//         <div class="card-deck">
//             <div class="row row-cols-1 row-cols-md-3">
//                 <div div class="col">
//                     <div class="card h-100">
//                         <div style="width: 100%; height: 200px; background-color: grey;"></div>
//                         <div class="card-body">
//                             <h5 class="card-title">Card title</h5>
//                             <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                         </div>
//                         <div class="card-footer">
//                             <small class="text-muted">Last updated 3 mins ago</small>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col">
//                     <div class="card h-100">
//                         <div style="width: 100%; height: 200px; background-color: grey;"></div>
//                         <div class="card-body">
//                             <h5 class="card-title">Card title</h5>
//                             <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
//                         </div>
//                         <div class="card-footer">
//                             <small class="text-muted">Last updated 3 mins ago</small>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col">
//                     <div class="card h-100">
//                         <div style="width: 100%; height: 200px; background-color: grey;"></div>
//                         <div class="card-body">
//                             <h5 class="card-title">Card title</h5>
//                             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
//                         </div>
//                         <div class="card-footer">
//                             <small class="text-muted">Last updated 3 mins ago</small>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col">
//                     <div class="card h-100">
//                         <div style="width: 100%; height: 200px; background-color: grey;"></div>
//                         <div class="card-body">
//                             <h5 class="card-title">Card title</h5>
//                             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
//                         </div>
//                         <div class="card-footer">
//                             <small class="text-muted">Last updated 3 mins ago</small>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col">
//                     <div class="card h-100">
//                         <div style="width: 100%; height: 200px; background-color: grey;"></div>
//                         <div class="card-body">
//                             <h5 class="card-title">Card title</h5>
//                             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
//                         </div>
//                         <div class="card-footer">
//                             <small class="text-muted">Last updated 3 mins ago</small>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col">
//                     <div class="card h-100">
//                         <div style="width: 100%; height: 200px; background-color: grey;"></div>
//                         <div class="card-body">
//                             <h5 class="card-title">Card title</h5>
//                             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
//                         </div>
//                         <div class="card-footer">
//                             <small class="text-muted">Last updated 3 mins ago</small>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `;
