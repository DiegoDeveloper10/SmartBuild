import axios from "axios";

export async function ObterClasse() {
    var response = await axios.get('api/usuarios/index');
    return response.data;    
}

export async function ListarUsuario() {
    var response = await axios.get('api/usuarios/ListarUsuario');
    return response.data;
}