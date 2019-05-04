import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Archive from "@material-ui/icons/Archive";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import SwapHoriz from "@material-ui/icons/SwapHoriz";

import classNames from "classnames";
import * as React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import { styles } from "./utils";

interface IState {
  open: boolean;
}

interface IProps extends WithStyles<typeof styles> { }

class Layout extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      open: false,
    };

    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }

  public render() {
    const { classes, children } = this.props;

    const classesDrawer = {
      paper: classNames({
        [classes.drawerOpen]: this.state.open,
        [classes.drawerClose]: !this.state.open,
      }),
    };

    const classesIconButton = classNames(classes.menuButton, {
      [classes.hide]: this.state.open,
    });

    const classesAppBar = classNames(classes.appBar, {
      [classes.appBarShift]: this.state.open,
    });

    return (
      <div className={classes.root}>
        <Router>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={classesAppBar}
          >
            <Toolbar disableGutters={!this.state.open}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classesIconButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" noWrap={true}>
                Barter
            </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            className={classesDrawer.paper}
            classes={classesDrawer}
            open={this.state.open}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              <Link to="/change" style={{ textDecoration: "none", color: "#FFF" }}>
                <ListItem button={true}>
                  <ListItemIcon>
                    <SwapHoriz />
                  </ListItemIcon>
                  <ListItemText primary={"Swap"} />
                </ListItem>
              </Link>
              <Link to="/archive/" style={{ textDecoration: "none", color: "#FFF" }}>
                <ListItem button={true}>
                  <ListItemIcon>
                    <Archive />
                  </ListItemIcon>
                  <ListItemText primary={"Archive"} />
                </ListItem>
              </Link>
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {children}
          </main>
        </Router>
      </div >
    );
  }

  private handleDrawerOpen() {
    this.setState({ open: true });
  }

  private handleDrawerClose() {
    this.setState({ open: false });
  }
}

export default withStyles(styles, { withTheme: true })(Layout);
