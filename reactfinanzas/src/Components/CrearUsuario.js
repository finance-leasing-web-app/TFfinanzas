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
                                {/* <input type="password" nombre="contrasegna_" onChange={handleChange} /> */}
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
        </div>
    );
}
 
export default CrearUsuario;