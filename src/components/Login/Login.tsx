import {
  Avatar,
  Button,
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

import {
  LockOutlined, HistorySharp,
} from "@material-ui/icons";

import { withStyles, WithStyles } from "@material-ui/core/styles";

import {
  FirebaseAuthConsumer,
  FirebaseAuthProvider,
} from "@react-firebase/auth";
import { AuthEmission } from "@react-firebase/auth/dist/types";
import * as firebase from "firebase/app";
import "firebase/auth";
import * as React from "react";

import { CONFIG } from "../../credentials";
import { styles } from "./utils";

interface IProps extends WithStyles<typeof styles> {
  history: any
}

class Login extends React.Component<IProps, {}> {
  constructor(props: any) {
    super(props);

  }

  public render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <FirebaseAuthProvider {...CONFIG} firebase={firebase}>
            <FirebaseAuthConsumer>
              {(authEmission) => this._RenderStateClient(authEmission, this.props.history)}
            </FirebaseAuthConsumer>
          </FirebaseAuthProvider>
        </Paper>
      </main >
    );
  }

  private _GoogleSignIn(history: any): void {
    try {
      const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(googleAuthProvider).then(() => {
        history.push('/list_item')
      });
    } catch (error) {
      console.log('error :', error);
    }
  }

  // private _AnonymouslySignIn(): void {
  //   firebase.app().auth().signInAnonymously();
  // }

  private _RenderStateClient({ isSignedIn, firebase }: AuthEmission, history: any): JSX.Element {
    return (
      <div className="button-login">
        <Button
          variant="contained"
          onClick={() => this._GoogleSignIn(history)}
        >
          Login With Google
        </Button>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Login);
