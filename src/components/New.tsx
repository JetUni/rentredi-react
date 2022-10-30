import React, { Component } from "react";
import UserForm from "./UserForm";
import UserFormButtons from "./UserFormButtons";

class New extends Component<{
  user: any;
  newUser: boolean;
  inputChanged: boolean;
  onChangeHandler: (e: any) => void;
  createOrUpdateHandler: () => void;
}> {
  render() {
    const {
      user,
      newUser,
      inputChanged,
      onChangeHandler,
      createOrUpdateHandler
    } = this.props;

    return (
      <div>
        <h2>New User</h2>
        <UserForm
          user={user}
          newUser={newUser}
          onChangeHandler={onChangeHandler}
        />
        <UserFormButtons
          newUser={newUser}
          inputChanged={inputChanged}
          createOrUpdateHandler={createOrUpdateHandler}
        />
      </div>
    );
  }
}

export default New;
