import React from 'react';
import SteamService from '../API/SteamService.js';


class UserInformationList extends React.Component {
    constructor(props) {
        super(props);
                //set up here
        this.state = {
            isLoaded: false,
            response: ''
        }
    }

    componentDidMount() {
        const testRequest = {
            url: 'http://localhost:8080',
            parameters: {
                key: '09544F1DB351C84C62AA08EE17545216',
                steamids: '76561197960435530',
                format: 'json'
            }
        };

        SteamService.userInformationService(testRequest).then(something => {
            const loggins = something;
            console.log(JSON.stringify(loggins));
            this.setState({
                isLoaded: true,
                response: JSON.stringify(something)
            });
        }, (error) => {
            this.setState({
                isLoaded: true,
                response:error
            })    
        });
    }

    render () {
        const {isLoaded, response} = this.state 
        if (!isLoaded) {
            return <h1>loading</h1>
        } else {
        return <p>{response}</p>
        }
    }
}

export default UserInformationList;