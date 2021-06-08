export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img width="30" height="24" src="./imagenes/logo.png" alt="" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
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