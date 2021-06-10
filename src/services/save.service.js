import axios from "axios";

const API_URL = 'http://ec2-3-218-86-203.compute-1.amazonaws.com:8000/'


const crearNuevoProyecto = () => {
    return axios
        .post(API_URL + 'listar')
};

const obtenerAlineamiento = (preguntas) => {
    return axios
        .post(API_URL + 'modificar', preguntas)
};

const insertarPregunta = (preg) => {
    return axios
        .post(API_URL + 'insertar', preg)
};

//por url
const eliminarPregunta = (id) => {
    return axios
        .post(API_URL + 'eliminar?id=' + id)
};

const exportar = {
    listarPreguntas,
    modificarPreguntas,
    insertarPregunta,
    eliminarPregunta,
}

export default exportar;