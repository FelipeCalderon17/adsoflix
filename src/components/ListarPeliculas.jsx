import React, { useState, useEffect } from "react";

const ListarPeliculas = () => {
  const [peliculas, setPeliculas] = useState([]);
  const leerLS = () => {
    let datos = JSON.parse(localStorage.getItem("pelicula"));
    setPeliculas(datos);
  };

  useEffect(() => {
    leerLS();
  }, []);
  return (
    <>
      <section id="content" className="content">
        {peliculas.map((pelicula) => {
          return (
            <div className="col-md-4 mt-2" style={{ color: "white" }}>
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-dark">
                <div className="col p-4 d-flex flex-column position-static">
                  <h3 className="mb-0">{pelicula.titulo}</h3>
                  <p className="card-text mb-auto">{pelicula.descripcion}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ListarPeliculas;
