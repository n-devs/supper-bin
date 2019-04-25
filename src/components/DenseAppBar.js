import React from 'react';
import PropTypes from 'prop-types';
import { withStyles,createMuiTheme,MuiThemeProvider  } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import green from '@material-ui/core/colors/green';

const styles = {
  root: {
    flexGrow: 1,
  },
  avatar: {
    margin: 5,
    width: 30,
    height: 30,
  },
};

const theme = createMuiTheme ({
  palette: {
    primary: { main: green[800] }, 
    secondary: { main: '#11cb5f' }, 
  },
  typography: { useNextVariants: true },
})

function DenseAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    <MuiThemeProvider theme={theme}>
      <AppBar position="fixed" color="primary">
        <Toolbar variant="enum">
          <Grid container alignItems="center">
            {props.AvatarSRC == null
              ? <Avatar className={classes.avatar} >T</Avatar>
              : <Avatar alt={props.AvatarAlt} src={props.AvatarSRC} className={classes.avatar} />
            }
          </Grid>
        </Toolbar>
      </AppBar>
      </MuiThemeProvider>
    </div>
  );
}

DenseAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DenseAppBar);