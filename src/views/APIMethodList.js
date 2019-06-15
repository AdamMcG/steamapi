import React from 'react';
import SteamService from '../API/SteamService.js';
import MethodResponseContentItem from './MethodResponseContentItem.js';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';


class APIMethodList extends React.Component {

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
            const loggins = something.data.apilist;
            const mappedDataSet = loggins.interfaces.map(apiInterface => {
                return apiInterface.methods.map(method => {
                        return (<ListItem divider="true" key={method.name}>
                                <MethodResponseContentItem content={method}/>
                        </ListItem>); 
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
        const classes =  makeStyles(theme => ({
            root: {
              width: '100%',
              maxWidth: 360,
              backgroundColor: theme.palette.background.default,
            },
          }));
        if (!isLoaded) {
            return <p> loading </p>
        }
        else {
            return (
                <List dense="true" className={classes.root}>
                    {response}
                </List>
            )
        }
    }
}

export default APIMethodList;