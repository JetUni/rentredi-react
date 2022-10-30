import { TextField } from "@mui/material";
import { Component } from "react";

const TextInput = (props: any) => {
  return (
    <TextField
      variant="filled"
      size="small"
      fullWidth
      margin="dense"
      {...props}
    />
  );
};

class UserForm extends Component<{
  user: any;
  newUser: boolean;
  onChangeHandler: (e: any) => void;
}> {
  render() {
    const { user, newUser, onChangeHandler } = this.props;

    return (
      <div>
        <TextInput
          id="name"
          label="Name"
          defaultValue={user.name}
          onChange={(e: any) => onChangeHandler(e)}
          required
        />
        <TextInput
          id="zip"
          label="Zip Code"
          defaultValue={user.zip}
          onChange={(e: any) => onChangeHandler(e)}
          required
        />
        {!newUser && (
          <TextInput
            id="latitude"
            label="Latitude"
            defaultValue={user.latitude}
            disabled
          />
        )}
        {!newUser && (
          <TextInput
            id="longitude"
            label="Longitude"
            defaultValue={user.longitude}
            disabled
          />
        )}
        {!newUser && (
          <TextInput
            id="timezone"
            label="Time Zone"
            defaultValue={user.timezone}
            disabled
          />
        )}
      </div>
    );
  }
}

export default UserForm;
