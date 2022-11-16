import { Link } from "react-router-dom";
import './LogIn.css';

const LogIn = () => {
    return (  
        <nav>
          {/* <ul>
            usuario:<input type={"text"}></input>
            <br />
            contraseña:<input type={"password"}></input>
            <br />
            <button class='button'>Iniciar Sesión</button>
            <Link to="usuario/crear">Registrarse</Link>
          </ul> */}
        
        <div class="container">
            <div class="screen">
                <div class="screen__content">
                    <form class="login">
                        <div class="login__field">
                            <i class="login__icon fas fa-user"></i>
                            <input type="text" class="login__input" placeholder="Usuario"></input>
                        </div>
                        <div class="login__field">
                            <i class="login__icon fas fa-lock"></i>
                            <input type="password" class="login__input" placeholder="Contraseña"></input>
                        </div>
                        <button class="button login__submit">
                            <Link to="usuario/listar">
                            <span class="button__text">Iniciar Sesión</span>
                            </Link>
                            <i class="button__icon fas fa-chevron-right"></i>
                        </button>	
                        <button class="button register">
                            <Link to="usuario/crear">
                            <span class="button__text">Registrarse</span>
                            </Link>
                            <i class="button__icon fas fa-chevron-right"></i>
                        </button>			
                    </form>
                    
                </div>
                <div class="screen__background">
                    <span class="screen__background__shape screen__background__shape4"></span>
                    <span class="screen__background__shape screen__background__shape3"></span>		
                    <span class="screen__background__shape screen__background__shape2"></span>
                    <span class="screen__background__shape screen__background__shape1"></span>
                </div>		
            </div>
        </div>
        </nav>
        
    );
}
 
export default LogIn;