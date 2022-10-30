import { Alert } from "@mui/material";
import axios from "axios";
import { Component } from "react";
import Header from "./components/Header";
import New from "./components/New";
import User from "./components/User";
import Users from "./components/Users";
import "./styles.css";

class App extends Component<
  {},
  {
    error: any;
    isLoaded: boolean;
    users: any;
    user: any;
    newUser: boolean;
    inputChanged: boolean;
    input: any;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users: null,
      user: null,
      newUser: false,
      inputChanged: false,
      input: {}
    };
  }

  fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://q8k5oh.sse.codesandbox.io/users"
      );
      this.setState({
        isLoaded: true,
        users: response.data.users,
        user: null
      });
    } catch (error) {
      this.setState({
        error
      });
      setTimeout(() => this.setState({ error: null }), 5000);
    }
  };

  usersClickHandler = async () => {
    this.setState({
      isLoaded: false,
      user: null,
      newUser: false
    });

    await this.fetchUsers();
  };

  userClickHandler = (userId: string) => {
    this.setState({
      isLoaded: false,
      newUser: false
    });

    const user = this.state.users[userId];
    user["userId"] = userId;

    this.setState({
      isLoaded: true,
      user: user
    });
  };

  addClickHandler = () => {
    this.setState({
      user: {},
      newUser: true
    });
  };

  backHandler = async () => {
    this.setState({
      isLoaded: false,
      user: null
    });

    await this.fetchUsers();
  };

  onUserFormChangeHandler = (e: any) => {
    const { input } = this.state;
    input[e.target.id] = e.target.value;

    this.setState({
      inputChanged: true,
      input
    });
  };

  showAxiosError = (e: any) => {
    this.setState({
      error: e.response.data,
      isLoaded: true
    });
    setTimeout(() => {
      this.setState({
        error: null
      });
    }, 5000);
  };

  createOrUpdateUserHandler = async () => {
    const { user, newUser, input } = this.state;
    const userId = user.userId;
    const data = {
      name: input.name,
      zip: input.zip
    };

    this.setState({
      isLoaded: false,
      user: data
    });

    if (newUser) {
      try {
        await axios.post("https://q8k5oh.sse.codesandbox.io/users/new", data);
        await this.fetchUsers();
      } catch (e) {
        this.showAxiosError(e);
      }
    } else {
      if (!input.name) {
        delete data.name;
      }
      if (!input.zip) {
        delete data.zip;
      }
      try {
        await axios.put(
          "https://q8k5oh.sse.codesandbox.io/users/" + userId,
          data
        );
        await this.fetchUsers();
      } catch (e) {
        this.showAxiosError(e);
      }
    }
  };

  deleteUserHandler = async () => {
    const userId = this.state.user.userId;
    this.setState({
      isLoaded: false
    });

    await axios.delete("https://q8k5oh.sse.codesandbox.io/users/" + userId);
    await this.fetchUsers();
  };

  preventBack = () => {
    window.history.forward();
  };

  async componentDidMount() {
    await this.fetchUsers();
    setTimeout(this.preventBack, 0);
    window.onunload = () => null;
  }

  render() {
    const { error, isLoaded, users, user, newUser, inputChanged } = this.state;
    return (
      <div>
        <Header
          showBackButton={isLoaded && user}
          backHandler={this.backHandler}
          usersClickHandler={this.usersClickHandler}
          addClickHandler={this.addClickHandler}
        />
        <hr />
        {error && <Alert severity="error">{error}</Alert>}
        {!isLoaded && <div>Loading...</div>}
        {isLoaded && !user && (
          <Users users={users} clickHandler={this.userClickHandler} />
        )}
        {isLoaded && user && !newUser && (
          <User
            user={user}
            newUser={false}
            inputChanged={inputChanged}
            onChangeHandler={this.onUserFormChangeHandler}
            createOrUpdateHandler={this.createOrUpdateUserHandler}
            deleteHandler={this.deleteUserHandler}
          />
        )}
        {isLoaded && user && newUser && (
          <New
            user={user}
            newUser={true}
            inputChanged={inputChanged}
            onChangeHandler={this.onUserFormChangeHandler}
            createOrUpdateHandler={this.createOrUpdateUserHandler}
          />
        )}
      </div>
    );
  }
}

export default App;
