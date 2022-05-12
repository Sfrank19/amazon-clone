import axios from 'axios';

const instance = axios.create({
    baseURL:'http://localhost:5001/clone-7096e/us-central1/api', // the API (cloud function) URL
    /*headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"
      }*/
});

export default instance;