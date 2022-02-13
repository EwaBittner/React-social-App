import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import CodeIcon from "@material-ui/icons/Code";
import { Link, NavLink} from "react-router-dom";

export default () => (
    <AppBar position="static">
        <Toolbar>
          <CodeIcon />
          <Button variant="text" color="inherit" component={Link} to="home">
            Home
          </Button>
          <Button variant="text" color="inherit" component={Link} to="about-me">
            About me
          </Button>
          <Button variant="text" color="inherit" component={NavLink} to="game" activeClassName="active">
            Game
          </Button>
          <Button variant="text" color="inherit" component={NavLink} to="users" activeClassName="active">
            Users
          </Button>
          <Button variant="text" color="inherit" component={Link} to="form">
            Form
          </Button>
          <Button variant="text" color="inherit" component={Link} to="contact">
            Contact
          </Button>
          <Button variant="text" color="inherit" component={Link} to="gohome">
            Go home
          </Button>
        </Toolbar>
      </AppBar>
)