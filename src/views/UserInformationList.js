import React from 'react';
import SteamService from '../API/SteamService.js';
import { List, ListItem} from '@material-ui/core';
import UserInformationContentItem from './UserInformationContentItem.js';
import PropTypes from 'prop-types';



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
                steamids: this.props.steam,
                format: 'json'
            }
        };

        SteamService.userInformationService(testRequest).then(something => {
            const players = something.data.response.players;
            const responseRender = players.map(player => {
               return (<ListItem key={player.personaname}>
                    <UserInformationContentItem person={player}/>
                </ListItem>)
            });
            this.setState({
                isLoaded: true,
                response: responseRender
            });
        }, (error) => {
            this.setState({
                isLoaded: true,
                response:error
            })    
        });
    }

    render () {
        const {isLoaded, response} = this.state;
        
        if (!isLoaded) {
            return <h1>loading</h1>
        } else {
        return (<div>
       
        <List dense="true">{response}</List>
        </div>);
        }
    }
}

UserInformationList.propTypes = {
    steam: PropTypes.string
};

export default UserInformationList;