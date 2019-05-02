import { createStyles, Theme } from "@material-ui/core";

const drawerWidth = 240;

export const styles = ({ breakpoints, mixins, spacing, transitions, zIndex }: Theme) => createStyles({
  appBar: {
    transition: transitions.create(["width", "margin"], {
      duration: transitions.duration.leavingScreen,
      easing: transitions.easing.sharp,
    }),
    zIndex: zIndex.drawer + 1,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    transition: transitions.create(["width", "margin"], {
      duration: transitions.duration.enteringScreen,
      easing: transitions.easing.sharp,
    }),
    width: `calc(100% - ${drawerWidth}px)`,
  },
  content: {
    flexGrow: 1,
    padding: spacing.unit * 3,
  },
  drawer: {
    flexShrink: 0,
    whiteSpace: "nowrap",
    width: drawerWidth,
  },
  drawerClose: {
    overflowX: "hidden",
    transition: transitions.create("width", {
      duration: transitions.duration.leavingScreen,
      easing: transitions.easing.sharp,
    }),
    width: spacing.unit * 7 + 1,
    [breakpoints.up("sm")]: {
      width: spacing.unit * 9 + 1,
    },
  },
  drawerOpen: {
    transition: transitions.create("width", {
      duration: transitions.duration.enteringScreen,
      easing: transitions.easing.sharp,
    }),
    width: drawerWidth,
  },
  hide: {
    display: "none",
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  root: {
    display: "flex",
  },
  toolbar: {
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...mixins.toolbar,
  },
});
