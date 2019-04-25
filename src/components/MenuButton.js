import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import IconMenu from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  bottomAppBar: {
    top: 'auto',
    bottom: 0
  },
  menuBtn: {
    position: 'absolute',
    zIndex: 1,
    top: -20,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const theme = createMuiTheme({
  palette: {
    primary: { main: 'rgb(255, 255, 255, 0)' },
    secondary: { main: 'rgb(255, 255, 255, 0)' }
  }
})

function MenuButton(props) {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar elevation={0} position="fixed" color="primary" className={classes.bottomAppBar}>
        <Toolbar variant="dense" className={classes.toolbar}>
          <Grid container justify="center" alignItems="center" className={classes.menuBtn} >
            <IconButton className={classes.button} aria-label="Menu">
              <IconMenu />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
  );
}

MenuButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuButton);