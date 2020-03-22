import axios from 'axios';

const baseUrl = "http://localhost:64813/api/";


export default {
    usuarios(url = baseUrl + 'Usuarios/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            login: (id, password) => axios.get(url + id + '/' + password),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
}