
import {
  Avatar,
  IconButton,
  Typography,
  Grid
} from "@material-ui/core";

import {
  Delete,
  Folder,
  Edit,
  PageviewOutlined,
} from "@material-ui/icons";

import * as React from "react";
import { LayoutHoc } from "../HOC/LayoutHoc/LayoutHoc";

interface IState {
  itens: string[]
}

export class ListItem extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      itens: [
        'test 1',
        'test 2',
        'test 3'
      ]
    }

    this._RenderListItem = this._RenderListItem.bind(this);
  }

  public render() {
    return (
      <>
        {this._RenderListItem()}
      </>
    );
  }

  private _RenderListItem() {
    return this.state.itens.map((value, index) => {
      return (
        <div className="item" key={index}>
          <Grid container>
            <Grid item xs={1}>
              <Avatar>
                <Folder />
              </Avatar>
            </Grid>
            <Grid item xs={10}>
              <Typography paragraph={true} color="inherit" className="description-item">
                {value}
              </Typography>
            </Grid>
            <Grid item xs={1}>
                <IconButton aria-label="Delete">
                  <Delete />
                </IconButton>
                <IconButton aria-label="Edit">
                  <Edit />
                </IconButton>
                <IconButton aria-label="View">
                  <PageviewOutlined />
                </IconButton>
            </Grid>
          </Grid>
        </div>
      )
    })
  }
};

export default LayoutHoc(ListItem);
