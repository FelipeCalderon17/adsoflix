import React, { useState } from "react";

const Navbar = ({ datos, setDatos }) => {
  const [busqueda, setBusqueda] = useState("");
  const buscarPelicula = (e) => {
    let busqueda = e.target.value;
    let resultado = datos.filter((pelicula) => {
      return pelicula.titulo.includes(busqueda);
    });
    //leemos el localstorage para verificar la aplicacion del filtro
    if (busqueda.length <= 1 || busqueda.length <= 0) {
      resultado = JSON.parse(localStorage.getItem("pelicula"));
    }
    setDatos(resultado);
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="www.test.com">
            <img src="./images/logo.png" alt="" srcSet="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="www.test.com"
                >
                  Home
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar..."
                aria-label="Search"
                onChange={buscarPelicula}
              />
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
