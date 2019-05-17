import axios from 'axios';

const instance = axios.create({
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar',
              'Access-Control-Allow-Origin': '*'
             }});

const RequestService = {

    getService: request => {
        axios.get('http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/', {
            params: {
                appid: 440,
                maxlength: 300,
                format:'json'                
            }
        }).then(something => {
            console.log('suckAdick' + something);
        });
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