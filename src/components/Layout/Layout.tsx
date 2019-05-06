import {
  AppBar,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { withStyles, WithStyles } from "@material-ui/core/styles";

import {
  Archive,
  ChevronLeft,
  Menu,
  SwapHoriz,
  ViewList,
} from "@material-ui/icons";

import classNames from "classnames";
import * as React from "react";
import { Link } from "react-router-dom";

import { styles } from "./utils";

interface IState {
  open: boolean;
}

interface IProps extends WithStyles<typeof styles> {
  userName: string;
}

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
              <Menu />
            </IconButton>
            <div className="layout-content">
              <Typography variant="h6" color="inherit" noWrap={true}>
                Barter
              </Typography>
              <div className="right-content">
                <Typography variant="h6" color="inherit" noWrap={true} className="user-name">
                  {this.props.userName}
                </Typography>
                <Link to="/" style={{ textDecoration: "none", color: "#FFF" }} className="action-logout">
                  <Button color="inherit">
                    Logout
                  </Button>
                </Link>
              </div>
            </div>
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
              <ChevronLeft />
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link to="/change/" style={{ textDecoration: "none", color: "#FFF" }}>
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
            <Link to="/list_item/" style={{ textDecoration: "none", color: "#FFF" }}>
              <ListItem button={true}>
                <ListItemIcon>
                  <ViewList />
                </ListItemIcon>
                <ListItemText primary={"List"} />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
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
