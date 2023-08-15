import Navbar from "./components/navbar";
/* import Section from "./components/section"; */
import FrmAgregar from "./components/FrmAgregar";
import ListarPeliculas from "./components/ListarPeliculas";

function App() {
  return (
    <>
      <Navbar />
      <ListarPeliculas />
      <aside className="lateral">
        <FrmAgregar />
      </aside>
    </>
  );
}

export default App;
