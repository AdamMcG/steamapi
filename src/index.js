import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import * as serviceWorker from './Server/serviceWorker';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { ThemeProvider } from '@material-ui/styles';
import { red, yellow } from '@material-ui/core/colors';


const theme = createMuiTheme({
    palette: {
      primary: {main: '#000000'},
      secondary: yellow,
      error: red
    },
  });

ReactDOM.render(

<ThemeProvider theme={theme}>
<App />
</ThemeProvider>,


document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
