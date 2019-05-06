import Layout from "../../Layout/Layout";
import Login from "../../Login/Login";

import {
  FirebaseAuthConsumer,
  FirebaseAuthProvider,
} from "@react-firebase/auth";
import { AuthEmission } from "@react-firebase/auth/dist/types";
import * as firebase from "firebase/app";
import "firebase/auth";
import * as React from "react";

import { CONFIG } from "../../../credentials";

export const LayoutHoc = <P extends object>(Component: React.ComponentType<P>) =>
  class LayoutHocComponent extends React.Component<P> {
    public render() {
      const { ...props } = this.props;
      return (
        <FirebaseAuthProvider {...CONFIG} firebase={firebase}>
          <FirebaseAuthConsumer>
            {(authEmission) => renderStateClient(authEmission, props, Component)}
          </FirebaseAuthConsumer>
        </FirebaseAuthProvider>
      );
    }
  };

const renderStateClient = <P extends object>(
  { isSignedIn, firebase }: AuthEmission,
  props: object,
  Component: React.ComponentType<P>) => {
  return (
    isSignedIn && firebase.auth ? (
      <Layout userName={firebase.auth().currentUser.displayName}>
        <Component {...props as P} />
      </Layout>
    )
      : (
        <Login />
      )
  );
};
