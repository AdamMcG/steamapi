import React from 'react';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';

class MethodResponseContentItem extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
    }

    render () {
        return  <div>
        <ListItemText inset="true" primary={`Name:`} secondary={this.props.content.name}></ListItemText>
        <ListItemText inset="true" primary={`Version:`} secondary={this.props.content.version}></ListItemText>
        <ListItemText inset="true"primary={ `Http method:`} secondary={this.props.content.httpmethod}></ListItemText>
        // add list item for parameters. 
    </div>;
    }
}

MethodResponseContentItem.propTypes = {
    content: PropTypes.object
}

export default MethodResponseContentItem;