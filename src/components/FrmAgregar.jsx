import React from "react";

const FrmAgregar = ({ datos, setDatos }) => {
  const salvarLocal = (datos) => {
    //leemos la info del localStorage
    let elementos = JSON.parse(localStorage.getItem("pelicula"));
    //Agregamos al localstorage
    if (Array.isArray(elementos)) {
      elementos.push(datos);
    } else {
      elementos = [datos];
    }
    setDatos(elementos);
    localStorage.setItem("pelicula", JSON.stringify(elementos));
  };

  const getDatosFrm = (e) => {
    e.preventDefault(); //Para evitar la recarga automatica
    let titulo = e.target.titulo.value; //el e.target es el objetivo que dispara el evento y se llaman por los ID
    let descripcion = e.target.descripcion.value;
    let datos = {
      id: new Date().getTime(),
      titulo: titulo,
      descripcion: descripcion,
    };
    setDatos(datos);
    salvarLocal(datos);
  };
  return (
    <>
      <div
        className="card bg-dark"
        style={{ width: "18rem", textAlign: "center" }}
      >
        <div className="card-body">
          <h5 className="card-title" style={{ color: "white" }}>
            Agregar Pelicula
          </h5>
          <form onSubmit={getDatosFrm}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="titulo"
                placeholder="Titulo..."
              />
              <label htmlFor="floatingInput">Titulo...</label>
            </div>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="descripcion"
                style={{ height: "120px", resize: "none" }}
              ></textarea>
              <label htmlFor="floatingTextarea2">Descripcion</label>
            </div>
            <input
              type="submit"
              style={{
                backgroundColor: "#a8acaf",
                width: "100px",
                color: "white",
                border: "0",
                outline: "0",
                padding: "15px",
                borderRadius: "3px",
                marginTop: "15px",
                textTransform: "capitalize",
                fontSize: "16px",
                fontWeight: "500",
                marginLeft: "4px",
                cursor: "pointer",
                transition: "all 300ms",
              }}
              id="save"
              value="Guardar"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default FrmAgregar;
