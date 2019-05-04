import Layout from "../../Layout/Layout";

import * as React from "react";

export const LayoutHoc = <P extends object>(Component: React.ComponentType<P>) =>
  class LayoutHocComponent extends React.Component<P> {
    public render() {
      const { ...props } = this.props;
      return (
        <Layout>
          <Component {...props as P} />
        </Layout>
      );
    }
  };
