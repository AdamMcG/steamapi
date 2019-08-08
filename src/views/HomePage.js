import React from 'react' 
import { Typography } from '@material-ui/core';

class HomePage extends React.Component {

    constructor(props){
        super(props);

    }

    render () {
        return <div>
            <Typography align="center" variant="h2" color="textPrimary">Home Page</Typography>
            <Typography variant="h5" align="center" color="textSecondary">
                Welcome to the Steam API application. Here you will find a simplified User interface to allow you to access information specific
                to your Steam ID. Simply provide it at the top and you should be ready to go! 
            </Typography>
        </div>
    }
}

export default HomePage;