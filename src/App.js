import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import CodeIcon from "@material-ui/icons/Code";
import { Routes, Route, Link, NavLink} from "react-router-dom";

import './App.css';
import MyName from "./MyName";
import {Contact} from "./Contact";
import Game from "./Game";
import {MyFavouriteDishes} from "./Dishes";
import Wrapper from "./Wrapper";
import Users from "./Users";
import {Form} from "./Form";

const dishes = [
  { id: 1, name: 'Bigos' }, 
  { id: 2, name: 'Ogórkowa' }, 
  { id: 3, name: 'Barszcz' }
]

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon />
          <Button variant="text" color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button variant="text" color="inherit" component={Link} to="/about-me">
            About me
          </Button>
          <Button variant="text" color="inherit" component={NavLink} to="/game" activeClassName="active">
            Game
          </Button>
          <Button variant="text" color="inherit" component={NavLink} to="/users" activeClassName="active">
            Users
          </Button>
          <Button variant="text" color="inherit" component={Link} to="/form">
            Form
          </Button>
          <Button variant="text" color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>

      <Wrapper>
        <Routes>
          <Route path="/about-me">
            {/* <MyName name="Ewa" surname="Bit" />
            <MyName name="Ewa" />
            <MyFavouriteDishes dishes={dishes} /> */}
          </Route>

          <Route path="/game" element={<Game name="Szaszki"/>} >
          </Route>

          <Route path="/users" element={<Users />} >
          </Route>

          <Route path="/form" element={<Form />} >
          </Route>

          <Route path="/contact" element={<Contact data={{
              tel: '4646345',
              address: 'Morenevegen 15',
              email: 'koteczki@tak.no'
            }} />} >
          </Route>
          
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
