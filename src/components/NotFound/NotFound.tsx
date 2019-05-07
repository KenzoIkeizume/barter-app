
import { Typography } from "@material-ui/core";
import { Error } from "@material-ui/icons";

import * as React from "react";

const NotFound = () => {
  return (
    <div className="not-found">
      <Error color="error" fontSize="large" />
      <Typography variant="h5" paragraph={true}>
        Página não encontrada
      </Typography>
    </div>
  );
};

export default NotFound;
