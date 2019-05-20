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
            console.log(something);
            const loggins = something.data.apilist;
            console.log(loggins);
            const mappedDataSet = loggins.interfaces.map(apiInterface => {
                return apiInterface.methods.map(method => {
                    return (<div style={{border: 'solid',
                                         marginBottom:'3px',
                                         marginLeft: '50px', 
                                         display:'inline-block'}} key={method.name}>
                            <h3>{method.name}</h3>
                            <h4>{method.version}</h4>
                            <p>{method.httpmethod}</p>
                        </div>
                        ); 
                });
            });
            this.setState({
                isLoaded: true,
                response: mappedDataSet
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
                        {response}
                </div>
            )
        }
    }
}

export default ResponseTextBox;