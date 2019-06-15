import React from 'react';
import './App.css';
import ServiceContent from './ServiceContent';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';

function App() {
  const [values, setValues] = React.useState({
    steamid: '',
    age: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const classes = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.default,
      width: 500
    },
  }));

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Steam API
    </p>
      </header>
      <body>
        <form noValidate autoComplete="off">
          <TextField
            id="steamid"
            label="Steam ID"
            className={classes.root}
            value={values.steamid}
            onChange={handleChange('steamid')}
            margin="normal"
          />
        </form>
        <ServiceContent id={values.steamid} />
      </body>
    </div>
  );
}

export default App;
