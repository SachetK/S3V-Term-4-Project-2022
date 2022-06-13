import axios from 'axios';

const PERSON_API_BASE_URL = "https://event-check-in-backend.herokuapp.com/api/v1/people"

class PersonService {
    getPeople(){
        return axios.get(PERSON_API_BASE_URL);
    }

    deletePeople() {
        return axios.delete(PERSON_API_BASE_URL);
    }

    uploadPeople(file) {
        return axios.post(PERSON_API_BASE_URL + "/uploads", file);
    }

    checkInPerson(person) {
        return axios.put(PERSON_API_BASE_URL + "/" + person.id);
    }
}

export default new PersonService()