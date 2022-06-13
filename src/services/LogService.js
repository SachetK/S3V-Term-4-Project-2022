import axios from "axios";

const PERSON_API_LOGS_BASE_URL = "https://event-check-in-backend.herokuapp.com/api/v1/logs"

class LogService {
    getLogs(){
       return axios.get(PERSON_API_LOGS_BASE_URL); 
    }

    addLog(log) {
        return axios.post(PERSON_API_LOGS_BASE_URL, log);
    }
    
    deleteLogs() {
        return axios.delete(PERSON_API_LOGS_BASE_URL);
    }
}

export default new LogService();