import axios from "axios";

const BASE_URL = "http://localhost:8080/api/addressbook";

class AddressBookService {
    getAll() {
        return axios.get(BASE_URL);
    }

    getById(id) {
        return axios.get(`${BASE_URL}/${id}`);
    }

    create(data) {
        return axios.post(BASE_URL, data);
    }

    update(id, data) {
        return axios.put(`${BASE_URL}/${id}`, data);
    }

    delete(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new AddressBookService();
