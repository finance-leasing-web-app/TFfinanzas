import {BrowserRouter, Routes , Route ,Link} from 'react-router-dom';
import './App.css';
import './Components/TBDatos';
import './Components/CrearUsuario'
import TBDatos from './Components/TBDatos';
import TBResultados from './Components/TBResultados';
import TBDetalles from './Components/TBDetalles';
import CrearUsuario from './Components/CrearUsuario';
import EditarUsuario from './Components/EditarUsuario';
import ListarUsuario from './Components/ListarUsuario';
import IndexMA from './Components/IndexMA';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
          <ul>
            usuario:<input type={"text"}></input>contraseña:<input type={"password"}></input><button>Ingresar</button><Link to="usuario/crear">Registrarse</Link>
          </ul>
      </nav>
      <Routes>
        <Route index element={<IndexMA />}/>
        <Route path='usuario/listar' element={<ListarUsuario />}/>
        <Route path='usuario/crear' element={<CrearUsuario />}/>
        <Route path='usuario/editar' element={<EditarUsuario />}/>
        <Route path='tabla/datos' element={<TBDatos />}/>
        <Route path='tabla/resultados' element={<TBResultados />}/>
        <Route path='tabla/detalles' element={<TBDetalles />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
