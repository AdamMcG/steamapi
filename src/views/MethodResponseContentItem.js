import React from 'react';
import PropTypes from 'prop-types';

class MethodResponseContentItem extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
    }

    render () {
        return  <div>
        <h3>Name: {this.props.content.name}</h3>
        <h4>Version: {this.props.content.version}</h4>
        <p>Http method: {this.props.content.httpmethod}</p>
    </div>;
    }
}

MethodResponseContentItem.propTypes = {
    content: PropTypes.object
}

export default MethodResponseContentItem;