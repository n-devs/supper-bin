import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import green from '@material-ui/core/colors/green';
import IncrementComponent from './IncrementComponent'
import '../styles/boxShadow.css'

const styles = {
  root: {
    flexGrow: 1,
  },
  avatar: {
    position: "absolute",
    zIndex: 1000,
    marginTop: 40,
    marginBottom: 5,
    marginLeft: 15,
    width: 48,
    height: 48,
    border: "4px solid #fff",
    boxShadow: " 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)"
  },
  increment: {
    position: "absolute",
    zIndex: 1000,
    marginTop: 75,
    marginRight: 34,
    right: 0,
    width: 82,
    boxShadow: " 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)"
  },
};

const theme = createMuiTheme({
  palette: {
    primary: { main: "rgba(0, 0, 0, 0)" },
    secondary: { main: '#11cb5f' },
  },
  typography: { useNextVariants: true },
})

function DenseAppBar(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      {/* <div className={classes.root}>
       <MuiThemeProvider theme={theme}>
         <AppBar elevation={0} position="fixed" color="primary">
           <Toolbar variant="enum">
             <Grid container alignItems="center"> */}
      {props.AvatarSRC == null
        ? <Avatar className={classes.avatar} >T</Avatar>
        : <Avatar alt={props.AvatarAlt} src={props.AvatarSRC} className={classes.avatar} />
      }
      {/* </Grid>
           </Toolbar>
         </AppBar>
       </MuiThemeProvider>
     </div> */}
      <IncrementComponent class={classes.increment} />
    </React.Fragment>
  );
}

DenseAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DenseAppBar);