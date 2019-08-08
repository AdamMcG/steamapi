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
        // const test = this.props.content.parameters.map(parameter => {
        //     return <div key="parameter.name">
        //         <ListItemText primary={'Name'} secondary={parameter.name}/>
        //         <ListItemText primary={'Description'} secondary={parameter.description}/>
        //         <ListItemText primary={'Type'} secondary={parameter.type}/>
        //         <ListItemText primary={'Optional'} secondary={parameter.optional}/>
        //     </div>;
        // });
        return  <div>
        <ListItemText inset="true" primary={`Name:`} secondary={this.props.content.name}></ListItemText>
        <ListItemText inset="true" primary={`Version:`} secondary={this.props.content.version}></ListItemText>
        <ListItemText inset="true"primary={ `Http method:`} secondary={this.props.content.httpmethod}></ListItemText>
        {/* {test} */}
    </div>;
    }
}

MethodResponseContentItem.propTypes = {
    content: PropTypes.object
}

export default MethodResponseContentItem;