import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

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

interface IProps extends WithStyles<typeof styles> { }

class Login extends React.Component<IProps, {}> {
  constructor(props: any) {
    super(props);

  }

  public render() {
    const { classes } = this.props;

    return (
      <FirebaseAuthProvider {...CONFIG} firebase={firebase}>
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <div>
              <FirebaseAuthConsumer>
                {(authEmission) => this._RenderStateClient(authEmission)}
              </FirebaseAuthConsumer>
              <Button
                variant="contained"
                onClick={this._GoogleSignIn}
              >
                Login With Google
              </Button>
            </div>
          </Paper>
        </main>
      </FirebaseAuthProvider>
    );
  }

  private _GoogleSignIn(): void {
    try {
      const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(googleAuthProvider);
    } catch (error) {
      console.log('error :', error);
    }
  }

  private _RenderStateClient({ isSignedIn, firebase }: AuthEmission): JSX.Element {
    if (isSignedIn === true) {
      return (
        <div>
          <h2>You're signed in 🎉 </h2>
          <Button
            variant="contained"
            onClick={this._SignOut}
          >
            Sign out
          </Button>
        </div>
      );
    } else {
      return (
        <div>
          <h2>You're not signed in </h2>
          <Button
            variant="contained"
            onClick={this._AnonymouslySignIn}
          >
            Sign in anonymously
          </Button>
        </div>
      );
    }
  }

  private _AnonymouslySignIn(): void {
    firebase.app().auth().signInAnonymously();
  }

  private _SignOut(): void {
    firebase.app().auth().signOut();
  }
}

export default withStyles(styles, { withTheme: true })(Login);
