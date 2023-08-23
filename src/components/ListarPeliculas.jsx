import React, { useState, useEffect } from "react";
import Editar from "./editar";

const ListarPeliculas = ({ datos, setDatos }) => {
  const [editar, setEditar] = useState(0);
  const LeerLS = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelicula"));
    setDatos(peliculas);
    return peliculas;
  };

  const borrarPelicula = (id) => {
    //Leer localstorage y la transformamos en un arreglo
    let bdatos = LeerLS();
    //creamos un nuevo array filtrandoo por el id
    let bdNueva = bdatos.filter((peliculas) => peliculas.id !== parseInt(id));
    //actualizamos el estado del componente principal en APP
    setDatos(bdNueva);
    localStorage.setItem("pelicula", JSON.stringify(bdNueva));
  };

  useEffect(() => {
    LeerLS();
  }, []);
  console.log(editar);
  return (
    <>
      <div className="row">
        <section id="content" className="content">
          {datos === null || datos.length === 0 ? (
            <>
              <h2>No hay peliculas en la base de datos</h2>
            </>
          ) : (
            <>
              {datos.map((pelicula) => {
                return (
                  <div
                    className="col-3 mt-2"
                    key={pelicula.id}
                    style={{ color: "white" }}
                  >
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-dark">
                      <div className="col p-4 d-flex flex-column position-static">
                        <h3 className="mb-0">{pelicula.titulo}</h3>
                        <p className="card-text mb-auto">
                          {pelicula.descripcion}
                        </p>
                        <div style={{ textAlign: "center" }}>
                          <button
                            className="edit"
                            onClick={() => {
                              setEditar(pelicula.id);
                            }}
                          >
                            Editar
                          </button>
                          <button
                            className="delete"
                            onClick={() => {
                              borrarPelicula(pelicula.id);
                            }}
                          >
                            Borrar
                          </button>
                          {editar === pelicula.id && (
                            <Editar
                              pelicula={pelicula}
                              datos={datos}
                              setDatos={setDatos}
                              LeerLS={LeerLS}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default ListarPeliculas;
