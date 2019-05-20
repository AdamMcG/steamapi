import axios from 'axios';
//TODO: Modify what headers we _exactly_ need
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
    //Not used all that much in the API - a max of about 10 functions use POST. Rest API? I think not. 
    postService: request => {
        //Fill in the data required to make a POST Request to the STEAM API. 
        return instance.post(request.url, {
            params: request.parameters
        })
    },
};

export default RequestService;