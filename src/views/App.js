import React from 'react';
import ServiceContent from './ServiceContent';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function App() {
  const [values, setValues] = React.useState ({
    steamid: localStorage.getItem('steamId'),
    opened: true,
    openDialog: false
  });  

  const [openDialog, setDialog] = React.useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const saveItem = () => {
    if (!localStorage.getItem('steamId') && values.steamid) {
      localStorage.setItem('steamId', values.steamid);
    }
    if (values.steamid) {
      setValues({ ...values, 'opened': false });
    } else {
      setValues({ ...values, 'opened': true });
    }
  };

  const clearItem = () => {
    localStorage.removeItem('steamId');
    setValues({ ...values, 'steamid': '', 'opened': true});
    
  };

  const setOpenDialogModel = () => {
    if (values.steamid) {
      setDialog(true);
    }
  }

  const closeDialog = () => {
    setDialog(false);
  }

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
          <TextField id="steamid"
                     label="Steam ID"
                     className={classes.root}
                     value={values.steamid}
                     onChange={handleChange('steamid')}
                     margin="normal">
          </TextField>
        </form>
        <div>
          <Button variant="contained"
                  color="primary"
                  size="medium"
                  onClick={() => { saveItem(); setOpenDialogModel(); }}> SAVE
          </Button>

          <Button variant="contained"
                  color="secondary"
                  size="medium"
                  onClick={() => { clearItem() }}> CLEAR
          </Button>
        </div>

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
