import {BrowserRouter, Routes , Route ,Link} from 'react-router-dom';
import './App.css';
import './Components/TBDatos';
import './Components/CrearUsuario'
import TBDatos from './Components/TBDatos';
import TBResultados from './Components/TBResultados';
import TBDetalles from './Components/TBDetalles';
import CrearUsuario from './Components/CrearUsuario';
import EditarUsuario from './Components/EditarUsuario';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
          <ul>
            usuario:<input type={"text"}></input>contraseña:<input type={"password"}></input><button>Ingresar</button><Link to="usuario/crear">Registrarse</Link>
            {/* <li><link>pagina principal</link></li> */}
          </ul>
      </nav>
      <Routes>
        <Route path='usuario/crear' element={<CrearUsuario />}/>
        <Route path='usuario/editar' element={<EditarUsuario />}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
