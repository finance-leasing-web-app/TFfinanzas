import { Link } from "react-router-dom";
import './LogIn.css';

const LogIn = () => {
    return (  
        <nav>
          <ul>
            usuario:<input type={"text"}></input>
            <br />
            contraseña:<input type={"password"}></input>
            <br />
            <button class='button'>Iniciar Sesión</button>
            <Link to="usuario/crear">Registrarse</Link>
          </ul>
      </nav>
    );
}
 
export default LogIn;