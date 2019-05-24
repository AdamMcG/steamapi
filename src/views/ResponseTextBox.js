import React from 'react';
import SteamService from '../API/SteamService.js';

class ResponseTextBox extends React.Component {

    constructor(props) {
        super(props);
        //set up here
        this.state = {
            isLoaded: false,
            response: '', 
            error: ''
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
            const loggins = something.data.apilist;
            const mappedDataSet = loggins.interfaces.map(apiInterface => {
                return apiInterface.methods.map(method => {
                        const params = JSON.stringify(method.parameters);
                        return (<div style={{border: 'solid'}} key={method.name}>
                            <h3>Name: {method.name}</h3>
                            <h4>Version: {method.version}</h4>
                            <p>Http method: {method.httpmethod}</p>
                            <p>Parameters: {params}</p>
                        </div>
                        );
                });
            });
            this.setState({
                isLoaded: true,
                response: mappedDataSet,
                error:null
            });
        }, (error) => {
            this.setState({
                isLoaded: true,
                response: null,
                error:error
            })
        });
    }

    render() {
        const { isLoaded, response, error } = this.state;
        if (!isLoaded) {
            return <p> loading </p>
        }
        else if (response) {
            return (
                <div style={{width:'50%', background:'aqua'}}>
                    {response}
                </div>
            )
        }
        else if(error) {
           return <p>{{error}}</p>
        }
    }
}

export default ResponseTextBox;