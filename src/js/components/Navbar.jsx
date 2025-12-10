export const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid ">
                    <i className="fa-solid fa-crown mx-2" style={{color: "#af9f37ff"}}></i>
                    <a className="navbar-brand" href="#">Trono de Hierro</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Casas</a>
                            <a className="nav-link" href="#">Alianzas</a>
                            <a className="nav-link" href="#">Enemigos</a>
                            <a className="nav-link disabled" aria-disabled="true">Usurpadores</a>
                        </div>
                    </div>
                </div>
            </nav>
    )
}


