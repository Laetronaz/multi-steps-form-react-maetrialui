import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm" User Data />
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
          </List>
          <br />
          <List>
            <ListItem primaryText="Last Name" secondaryText={lastName} />
          </List>
          <br />
          <List>
            <ListItem primaryText="Email" secondaryText={email} />
          </List>
          <br />
          <List>
            <ListItem primaryText="Occupation" secondaryText={occupation} />
          </List>
          <br />
          <List>
            <ListItem primaryText="City" secondaryText={city} />
          </List>
          <br />
          <List>
            <ListItem primaryText="Bio" secondaryText={bio} />
          </List>
          <br />

          <RaisedButton
            label="Confirm & Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />

          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default Confirm;
