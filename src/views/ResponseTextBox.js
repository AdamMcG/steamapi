import React from 'react';
import SteamService from '../API/SteamService.js';

class ResponseTextBox extends React.Component {

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
                format: 'json'
            }
        };
        SteamService.supportedAPIService(testRequest).then(something => {
            const loggins = JSON.stringify(something);
            this.setState({
                isLoaded: true,
                response: loggins
            });
        }, (error) => {
            this.setState({
                isLoaded: true,
                response:error
            })    
        });
    }
    render() {
        const { isLoaded, response } = this.state;
        if (!isLoaded) {
            return <p> loading </p>
        }
        else {
            return (
                <div>
                    <p> Testing this </p>
                    <p> {response} </p>
                </div>
            )
        }
    }
}

export default ResponseTextBox;