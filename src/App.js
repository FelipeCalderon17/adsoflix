import Navbar from "./components/navbar";
/* import Section from "./components/section"; */
import FrmAgregar from "./components/FrmAgregar";
import ListarPeliculas from "./components/ListarPeliculas";
import React, { useState } from "react";

function App() {
  const [datos, setDatos] = useState([]);
  return (
    <>
      <Navbar datos={datos} setDatos={setDatos} />
      <div className="row">
        <div className="col-10">
          <ListarPeliculas datos={datos} setDatos={setDatos} />
        </div>
        <div className="col-2 mt-2">
          <FrmAgregar datos={datos} setDatos={setDatos} />
        </div>
      </div>
    </>
  );
}

export default App;
