import axios from 'axios';

const PERSON_API_BASE_URL = "https://event-check-in-backend.herokuapp.com/api/v1/people"

class PersonService {
    getPeople(){
        return axios.get(PERSON_API_BASE_URL);
    }

    deletePeople() {
        return axios.delete(PERSON_API_BASE_URL);
    }
}

export default new PersonService()