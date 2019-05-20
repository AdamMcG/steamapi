import axios from 'axios';

const instance = axios.create({
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar',
              'Access-Control-Allow-Origin': '*'
             }});

const RequestService = {

    getService: request => {
       return instance.get(request.url, {
            params:request.parameters
        });
    },
    postService: request => {
        //Fill in the data required to make a POST Request to the STEAM API. 
        return instance.post(request.url, {
            params: request.parameters
        })
    },
};

export default RequestService;