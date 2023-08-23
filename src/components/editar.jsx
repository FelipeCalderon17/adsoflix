import React, { useState } from "react";

const Editar = (pelicula, datos, setDatos, LeerLS) => {
  const actualizarInformacion = (e, id) => {
    e.preventDefault();
    //leer localstorage
    let peliculasActual = LeerLS();
    console.log(peliculasActual);
    //buscar por el id
    //cambiar los datos
    //actualizar la bd
    //cerrar el formulario
  };
  //render del componente
  return (
    <>
      <form
        style={{ textAlign: "center", color: "black" }}
        onSubmit={(e) => {
          actualizarInformacion(e, pelicula.id);
        }}
        className="edit_form"
      >
        <input
          type="text"
          name="titulo"
          id="titulo"
          className="edit_form"
          defaultValue={pelicula.pelicula.titulo}
        />
        <input
          type="text"
          name="descripcion"
          id="descripcion"
          className="edit_form"
          defaultValue={pelicula.pelicula.descripcion}
        />
        <input type="submit" value="Actualizar" />
      </form>
    </>
  );
};

export default Editar;
