import { Box, Button } from "@mui/material";
import { Component } from "react";

class UserFormButtons extends Component<{
  newUser: boolean;
  inputChanged: boolean;
  createOrUpdateHandler: () => void;
  deleteHandler?: () => void;
}> {
  render() {
    const {
      newUser,
      inputChanged,
      createOrUpdateHandler,
      deleteHandler
    } = this.props;

    return (
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          {inputChanged && (
            <Button
              variant="contained"
              color="success"
              onClick={createOrUpdateHandler}
            >
              {newUser ? "Save" : "Update"}
            </Button>
          )}
          <div></div>
          {!newUser && (
            <Button variant="contained" color="error" onClick={deleteHandler}>
              Delete
            </Button>
          )}
        </Box>
      </div>
    );
  }
}

export default UserFormButtons;
