import React from 'react'
import SteamService from '../API/SteamService';
import PropTypes from 'prop-types';
import { List, ListItem} from '@material-ui/core';
import UserInformationContentItem from './UserInformationContentItem';


class UserFriendInformationList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'isLoaded': false,
            'response': ''
        }
    }

    componentDidMount() {
        const testRequest = {
            url: 'http://localhost:8080',
            parameters: {
                key: '09544F1DB351C84C62AA08EE17545216',
                steamid: this.props.steam,
                Relationship: 'friend',
                format: 'json'
            }
        };

        SteamService.userFriendInformationService(testRequest).then(response => {
           const friends = response.data.friendslist.friends;
           const steamIds = friends.map(friend => friend.steamid);
           
            const userRequest = {
                url: 'http://localhost:8080',
                parameters: {
                    key: '09544F1DB351C84C62AA08EE17545216',
                    steamids: steamIds.join(),
                    format: 'json'
                }
            };
           SteamService.userInformationService(userRequest).then(something => {
            const players = something.data.response.players;
            const responseRender = players.map(player => {
               return (<ListItem color="primary"
                        divider="true"
                        key={player.personaname}>
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

UserFriendInformationList.propTypes = {
    steam: PropTypes.string
};

export default UserFriendInformationList;