import React from 'react';
import ServiceContent from './ServiceContent';
import { createMuiTheme } from '@material-ui/core/styles';
import {Dialog, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear';
import { Grid, TextField, Typography, Toolbar, AppBar } from '@material-ui/core';
import {green, yellow } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary: yellow,
    error: green,
    textColor:yellow,
    color:yellow
  },
});


function App() {

  const [values, setValues] = React.useState({
    steamid: localStorage.getItem('steamId'),
    opened: localStorage.getItem('steamId') ? false : true,
    openDialog: false
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const saveItem = () => {
    if (!localStorage.getItem('steamId') && values.steamid) {
      localStorage.setItem('steamId', values.steamid);
    }
    if (values.steamid) {
      setValues({ ...values, 'opened': false });
      setDialog(true);
    } else {
      setValues({ ...values, 'opened': true });
    }
  };

  const clearItem = () => {
    localStorage.removeItem('steamId');
    setValues({ ...values, 'steamid': '', 'opened': true });

  };

  const closeDialog = () => {
    setDialog(false);
  }

  return (
    <div>
      <body>
        <AppBar position="static">
          <Toolbar>
            <Grid container>
              <Grid item xs={7}>
                <Typography variant="h3" color="secondary">
                  Steam API
          </Typography>
              </Grid>
              <Grid item xs={5}>
                <ThemeProvider theme={theme}>
                  <TextField id="steamid"
                    label="Steam ID"
                    fontSize="large"
                    value={values.steamid}
                    onChange={handleChange('steamid')}
                    InputLabelProps={{
                      style: {
                          color: "yellow"
                      }
                  }}
                    InputProps={{
                      style: {
                          color: "yellow"
                      }
                  }}>
                  </TextField>
                </ThemeProvider>
                <IconButton  color="secondary" onClick={() => { saveItem(); }}>
                  <SaveIcon fontSize="large" />
                </IconButton>
                <IconButton color="secondary" onClick={() => { clearItem() }}>
                  <ClearIcon fontSize="large"/>
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Dialog open={openDialog}
          onClose={(() => closeDialog())}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">SteamAPI</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You have saved your steamId and are ready to work.
                  </DialogContentText>
          </DialogContent>
        </Dialog>

        <ServiceContent id={values.steamid} saved={values.opened} />
      </body>
    </div>
  );
}

export default App;
