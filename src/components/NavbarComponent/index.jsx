export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid px-5">
                <img class="display-2" width="40" height="30" src="./imagenes/logo.png" alt="logo" />

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        <a className="nav-link" href="#">Categorias</a>
                        <a className="nav-link" href="#">Ofertas</a>
                        <a className="nav-link" href="#">Historial</a>
                        <a className="nav-link" href="#">Ayuda</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}