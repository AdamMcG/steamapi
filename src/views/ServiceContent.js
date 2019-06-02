import React from 'react';
import PropTypes from 'prop-types';
import ResponseTextBox from './ResponseTextBox';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));


function ServiceContent() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    function handleChange(event, newValue) {
        setValue(newValue);
    }
    return (<div className={classes.root}>
        <AppBar position="static" color="default">
            <Tabs value={value} onChange={handleChange}
                centered
                indicatorColor="primary"
                textColor="secondary"
            >
                <Tab label="API End Points"></Tab>
                <Tab label="User Information"></Tab>
                <Tab label="User Stat Information"></Tab>
                <Tab label="Web News"></Tab>
            </Tabs>
        </AppBar>
        {value === 0 &&
            <TabContainer>Item One
               <ResponseTextBox />
            </TabContainer>
        }
        {value === 1 &&
            <TabContainer>
                Item Two
                <ResponseTextBox />
            </TabContainer>
        }
        {
            value === 2 && <TabContainer>
                Item Three
                <ResponseTextBox />
            </TabContainer>
        }
        {
            value === 3 && <TabContainer>
                Item four
                <ResponseTextBox />
            </TabContainer>
        }
    </div>);
}


export default ServiceContent;