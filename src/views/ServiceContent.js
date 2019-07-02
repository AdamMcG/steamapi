import React from 'react';
import PropTypes from 'prop-types';
import APIMethodList from './APIMethodList';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import UserInformationList from './UserInformationList';
import { Container } from '@material-ui/core';

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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));


function ServiceContent(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    function handleChange(event, newValue) {
        setValue(newValue);
    }
    return (<div className={classes.root}>
        <paper square>
            <AppBar color="default" position="sticky">
            <Tabs value={value} onChange={handleChange}
                centered>
                <Tab label="API End Points"></Tab>
                <Tab label="User Information" disabled={props.saved}></Tab>
                <Tab label="User Stat Information" disabled={props.saved}></Tab>
                <Tab label="Web News" disabled={props.saved}></Tab>
            </Tabs>
        </AppBar>
        </paper>
        <Container>
        {value === 0 &&
            <TabContainer>Item One
               <APIMethodList />
            </TabContainer>
        }
        {value === 1 &&
            <TabContainer>
                Item Two
                <UserInformationList steam={props.id} />
            </TabContainer>
        }
        {
            value === 2 && <TabContainer>
                Item Three
            </TabContainer>
        }
        {
            value === 3 && <TabContainer>
                Item four
            </TabContainer>
        }
        </Container>
    </div>);
}

ServiceContent.propTypes = {
    id: PropTypes.string,
    saved:PropTypes.bool
}

export default ServiceContent;