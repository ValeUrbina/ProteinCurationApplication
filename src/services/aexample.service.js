import axios from "axios";

const API_URL = "http://bonoperubackend-env.eba-gtzdnmjw.us-east-1.elasticbeanstalk.com/api/preguntasfrecuentes/";
// const API_URL = "http://localhost:8084/api/preguntasfrecuentes/";

const pregunta = {
    "idpreguntasfrecuentes": null,
    "pregunta": "",
    "respuesta": "",
    "estado": "",
    "usuariocreacion": "",
    "usuarioactualizacion": "",
}

const listarPreguntas = () => {
    return axios
        .post(API_URL + 'listar')
};

const modificarPreguntas = (preguntas) => {
    return axios
        .post(API_URL + 'modificar', preguntas)
};

//paso un objeto
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