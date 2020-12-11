<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Viajes</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- <link rel="stylesheet" href="css/style.css"> -->
    <link rel="stylesheet" type="text/css" media="screen" href="css/index.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="css/header.css">

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="js/index.js"></script>
    <script src="js/login_modal.js"></script>
</head>

<body>
    <header>
        <nav class="navbar fixed-top navbar-expand-md navbar-dark">
            <div class="container">
                <a class="navbar-brand" href="#">LOGO</a>
                <!-- Boton que aparece cuando se hace más pequeño que -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="modal" data-target="#login" href="#">Log In</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="modal" data-target="#register" href="#">Register</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <div id="login" class="modal fade">
        <div id="login-modal" class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Login</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="validation_username" class="col-form-label">Username:</label>
                            <input id="validation_username" type="text" class="form-control" placeholder="Username" required="required">
                        </div>
                        <div class="form-group">
                            <label for="validation_password" class="col-form-label">Password:</label>
                            <input id="validation_password" type="password" class="form-control" placeholder="Password" required="required">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button id="button_login" type="button" class="btn btn-primary btn-block btn-lg">Login</button>
                </div>
            </div>
        </div>
    </div>

    <div id="register-modal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Register</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="validation_username" class="col-form-label">Username:</label>
                            <input id="validation_username" type="text" class="form-control" placeholder="Username" required="required">
                        </div>
                        <div class="form-group">
                            <label for="validation_password" class="col-form-label">Password:</label>
                            <input id="validation_password" type="password" class="form-control" placeholder="Password" required="required">
                        </div>
                        <div class="form-group">
                            <label for="validation_password" class="col-form-label">Repeat password:</label>
                            <input id="validation_password" type="password" class="form-control" placeholder="Password" required="required">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary btn-block btn-lg">Register</button>
                </div>
            </div>
        </div>
    </div>

    <div class="jumbotron jumbotron-fluid hero">
        <!-- <div class="container">
        </div> -->
    </div>

    <div class="container experiencies no-logged">
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


    <div class="container experiencies logged">
        <div class="card-deck">
            <div class="row row-cols-1 row-cols-md-3">
                <div div class="col">
                    <div class="card h-100">
                        <!-- <img src="..." class="card-img-top" alt="..."> -->
                        <div style="width: 100%; height: 200px; background-color: grey;"></div>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <!-- <img src="" class="card-img-top" alt="..."> -->
                        <div style="width: 100%; height: 200px; background-color: grey;"></div>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <!-- <img src="..." class="card-img-top" alt="..."> -->
                        <div style="width: 100%; height: 200px; background-color: grey;"></div>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <!-- <img src="..." class="card-img-top" alt="..."> -->
                        <div style="width: 100%; height: 200px; background-color: grey;"></div>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                        <!-- <img src="..." class="card-img-top" alt="..."> -->
                        <div style="width: 100%; height: 200px; background-color: grey;"></div>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <!-- <img src="..." class="card-img-top" alt="..."> -->
                        <div style="width: 100%; height: 200px; background-color: grey;"></div>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer></footer>
    <script src="js/header.js" type="text/javascript"></script>

</body>

</html>