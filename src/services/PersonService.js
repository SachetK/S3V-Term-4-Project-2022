import axios from 'axios';

const PERSON_API_BASE_URL = "https://event-check-in-backend.herokuapp.com/api/v1"

class PersonService {
    getPeople(){
        return axios.get(PERSON_API_BASE_URL + "/people");
    }

    deletePeople() {
        return axios.delete(PERSON_API_BASE_URL + "/people");
    }

    uploadPeople(file) {
        return axios.post(PERSON_API_BASE_URL + "/uploads", file);
    }
}

export default new PersonService()