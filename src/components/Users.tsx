import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Component } from "react";

class Users extends Component<{
  users: any;
  clickHandler: (username: string) => void;
}> {
  render() {
    const { users } = this.props;

    return (
      <div>
        <List dense={true}>
          {users &&
            Object.keys(users).map((username: any) => (
              <ListItem
                onClick={(e) => this.props.clickHandler(e.currentTarget.id)}
                id={username}
                key={username}
                divider
                sx={[
                  () => ({
                    cursor: "pointer"
                  })
                ]}
              >
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText
                  primary={users[username].name}
                  secondary={username + " ··· " + users[username].zip}
                />
              </ListItem>
            ))}
          {!users && (
            <ListItem id="empty" key="empty">
              No Users...create one!
            </ListItem>
          )}
        </List>
      </div>
    );
  }
}

export default Users;
