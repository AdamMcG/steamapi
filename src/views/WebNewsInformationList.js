import React from 'react';
import SteamService from '../API/SteamService'

class WebNewsInformationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'isLoaded': false,
            'response': ''
        };
    }

    componentDidMount () {
        //do the mounting this to call the API
        //Test Request
        const testRequest = {
            url: 'http://localhost:8080',
            parameters: {
                key: '09544F1DB351C84C62AA08EE17545216',
                format: 'json'
            }
        };

        SteamService.webNewsInformationService(testRequest).then(webNewsResponse => {
            console.log(webNewsResponse);

        }, (error) => {
            console.log(error);
        });

        //Render response
    }

    render () {
    return (<div>
        <p>I love lamp</p>
        </div>)
    }
}

export default WebNewsInformationList;