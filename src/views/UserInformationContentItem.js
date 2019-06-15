import React from 'react';
import PropTypes from 'prop-types';
import { ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';

class UserInformationContentItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const time = this.props.person.timecreated;
        const dateRepresentation = new Date(time * 1000).toLocaleString();
        const logoff = new Date(this.props.person.lastlogoff*1000).toLocaleString();
        return (
            <div>
                <ListItemAvatar>
                    <Avatar src={this.props.person.avatarfull}>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Steam Name:" secondary={this.props.person.personaname}></ListItemText>
                <ListItemText primary="Real Name:" secondary={this.props.person.realname}></ListItemText>
                <ListItemText primary="Creation Time:" secondary={dateRepresentation}></ListItemText>
                <ListItemText primary="Last Log off:" secondary={logoff}></ListItemText>
            </div>
        );
    }
}

UserInformationContentItem.propTypes = {
    person: PropTypes.object
}

export default UserInformationContentItem;