import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home'
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import BusinessIcon from '@material-ui/icons/Business';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  menuButton: {
    position: "absolute",
    zIndex: 1000,
    bottom: 0,
    marginBottom: 80,
    marginLeft: 15,
    width: 40,
    height: 40
  }
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#43a047"
    },
  },
  typography: {
    useNextVariants: true,
  },
});


class MenuButton extends React.Component {

  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.menuButton}>
          <Fab
            size="medium"
            color="primary"
            aria-label="Add"
            className={classes.fab}
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
          >
            {open == false
              ? <MenuIcon />
              : <KeyboardArrowDownIcon />
            }

          </Fab >
        </div>
        <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: placement === 'bottom' ? 'top' : 'bottom' }}
            >
              <Paper >
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    <MenuItem onClick={this.handleClose}><HomeIcon /></MenuItem>
                    <MenuItem onClick={this.handleClose}><BusinessIcon /></MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </MuiThemeProvider>
    );
  }
}

MenuButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuButton);