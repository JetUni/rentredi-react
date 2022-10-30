import { Box, Button, Link, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Component } from "react";

class Header extends Component<{
  showBackButton: boolean;
  backHandler: () => void;
  usersClickHandler: () => void;
  addClickHandler: () => void;
}> {
  render() {
    const {
      showBackButton,
      backHandler,
      usersClickHandler,
      addClickHandler
    } = this.props;

    const backButtonColor = showBackButton ? "primary" : "white";

    return (
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Button
            variant="outlined"
            onClick={backHandler}
            sx={[
              () => ({
                "&": {
                  borderColor: backButtonColor,
                  color: backButtonColor
                },
                "&:hover": {
                  backgroundColor: backButtonColor,
                  borderColor: backButtonColor,
                  color: backButtonColor,
                  cursor: showBackButton ? "pointer" : "default"
                }
              })
            ]}
          >
            <ArrowBackIosNewIcon></ArrowBackIosNewIcon>
          </Button>
          <Typography
            sx={{
              alignSelf: "center"
            }}
          >
            <Link
              component="h2"
              onClick={usersClickHandler}
              color="inherit"
              underline="none"
              sx={[
                () => ({
                  "&": {
                    cursor: "pointer"
                  }
                })
              ]}
            >
              Users
            </Link>
          </Typography>
          <Button variant="outlined" onClick={addClickHandler}>
            <AddIcon></AddIcon>
          </Button>
        </Box>
      </div>
    );
  }
}

export default Header;
