import axios from 'axios';

const baseUrl = "http://localhost:64813/api/";

export default {
    usuarioRutas(url = baseUrl + 'UsuarioRutas/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: (ruta, usuario) => axios.get(url + ruta + "/" + usuario),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
}