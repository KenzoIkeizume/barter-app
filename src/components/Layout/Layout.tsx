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
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import * as React from "react";
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
    const { classes } = this.props;

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
              <Link to="/" style={{ textDecoration: "none", color: "#FFF" }}>
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
            <Switch>
              <Route path="/" exact={true} component={ChangeItem} />
              <Route path="/archive/" component={ArchiveItem} />
            </Switch>
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

const ChangeItem = () => {
  return (
    <Typography paragraph={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
      elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
      hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
      velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
      Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
      viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
      Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
      at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
      ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
    </Typography>
  );
};

const ArchiveItem = () => {
  return (
    <Typography paragraph={true}>
      Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
      facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
      tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
      consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus
      sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
      In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
      et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique
      sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo
      viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
      ultrices sagittis orci a.
    </Typography>
  );
};

export default withStyles(styles, { withTheme: true })(Layout);
