
import { Button, Grid, TextField, Typography } from "@material-ui/core";

import * as React from "react";
import { LayoutHoc } from "../HOC/LayoutHoc/LayoutHoc";

interface IState {
  multiline: string,
  name: string,
}

export class ArchiveItem extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      multiline: '',
      name: '',
    }

    this.handleChangeMultiline = this.handleChangeMultiline.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render() {
    return (
      <Grid item xs={12} className="item-subscribe">
        <Typography variant="h6" color="inherit" noWrap={true}>
          Item
        </Typography>
        <Grid container>
          <Grid item xs={12} md={6}>
            <form noValidate autoComplete="off" className="form-item" onSubmit={this.handleSubmit}>
              <TextField
                required
                id="outlined-required"
                label="Nome"
                onChange={this.handleChangeName}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Descrição"
                multiline
                rowsMax="10"
                value={this.state.multiline}
                onChange={this.handleChangeMultiline}
                margin="normal"
                variant="outlined"
                className="description-field"
              />
              <Button type="submit" value="Submit">
                Cagastrar
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography paragraph={true} className="text-description">
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
          </Grid>
        </Grid>
      </Grid>
    );
  }

  private handleChangeMultiline(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ multiline: event.target.value });
  }

  private handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ name: event.target.value });
  }

  private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log('event.target :', event.target);
    event.preventDefault();
  }
};

export default LayoutHoc(ArchiveItem);
