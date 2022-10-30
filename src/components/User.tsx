import { Component } from "react";
import UserForm from "./UserForm";
import UserFormButtons from "./UserFormButtons";

class User extends Component<{
  user: any;
  newUser: boolean;
  inputChanged: boolean;
  onChangeHandler: (e: any) => void;
  createOrUpdateHandler: () => void;
  deleteHandler: () => void;
}> {
  render() {
    const {
      user,
      newUser,
      inputChanged,
      onChangeHandler,
      createOrUpdateHandler,
      deleteHandler
    } = this.props;

    return (
      <div>
        <h2>User</h2>
        <UserForm
          user={user}
          newUser={false}
          onChangeHandler={onChangeHandler}
        />
        <UserFormButtons
          newUser={newUser}
          inputChanged={inputChanged}
          createOrUpdateHandler={createOrUpdateHandler}
          deleteHandler={deleteHandler}
        />
      </div>
    );
  }
}

export default User;
