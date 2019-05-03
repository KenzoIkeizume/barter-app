import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import * as React from "react";
import { styles } from './utils';

import * as firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer
} from "@react-firebase/auth";
import { CONFIG } from '../../credentials';

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
                {({ isSignedIn, firebase }) => {
                  if (isSignedIn === true) {
                    return (
                      <div>
                        <h2>You're signed in 🎉 </h2>
                        <Button
                          variant="contained"
                          onClick={() => {
                            firebase
                              .app()
                              .auth()
                              .signOut();
                          }}
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
                          onClick={() => {
                            firebase
                              .app()
                              .auth()
                              .signInAnonymously();
                          }}
                        >
                          Sign in anonymously
                        </Button>
                      </div>
                    );
                  }
                }}
              </FirebaseAuthConsumer>
              <Button
                variant="contained"
                onClick={() => {
                  try {
                    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                    firebase.auth().signInWithPopup(googleAuthProvider);
                  } catch (error) {
                    console.log('error :', error);
                  }
                }}
              >
                Login With Google
              </Button>
            </div>
          </Paper>
        </main>
      </FirebaseAuthProvider>
    );
  };
}

export default withStyles(styles, { withTheme: true })(Login);
