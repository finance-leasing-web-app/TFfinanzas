import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CrearUsuario = () => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const nombre = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [nombre]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:80/apiTF/usuario/crear', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });   
    }
    return (  
        <div>
            <h1>Crear nuevo usuario</h1>
            <form onSubmit={handleSubmit}>
            <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th align ="left">
                                <label>Nombre: </label>
                            </th>
                            <td>
                                <input type="text" name="nombre" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th align ="left">
                                <label>contraseña :</label>
                            </th>
                            <td> 
                                <input type="password" name="contrasegna" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th align ="left">
                                <label>Repita contraseña :</label>
                            </th>
                            <td>
                                <input type="password" nombre="contrasegna_" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align ="right">
                                <button>Crear</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <div class="container">
                <div class="screen">
                    <div class="screen__content">
                        <form class="login">
                            <div class="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input type="text" class="login__input" placeholder="Nombre" name="nombre" onChange={handleChange}></input>
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-lock"></i>
                                <input type="password" class="login__input" placeholder="Contraseña" name="contrasegna" onChange={handleChange}></input>
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-lock"></i>
                                <input type="password" class="login__input" placeholder="Repetita Contraseña" nombre="contrasegna_" onChange={handleChange}></input>
                            </div>
                            <button class="button login__submit">
                                
                                <span class="button__text">Crear Usuario</span>
                                
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
        </div>
    );
}
 
export default CrearUsuario;