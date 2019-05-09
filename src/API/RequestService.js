import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}});

const RequestService = {

    getService: request => {
        instance.get()
        //fill in the data required to make a GET request to the STEAM API
       console.log(instance);
        console.log(request);
    },
    postService: request => {
        //Fill in the data required to make a POST Request to the STEAM API. 
        let sean = request;
        console.log(sean);
    },
};

export default RequestService;