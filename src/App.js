import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import CodeIcon from "@material-ui/icons/Code";
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
          <Button variant="text" color="inherit">Home</Button>
          <Button variant="text" color="inherit">About us</Button>
          <Button variant="text" color="inherit">Game</Button>
          <Button variant="text" color="inherit">Users</Button>
          <Button variant="text" color="inherit">Form</Button>
          <Button variant="text" color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>

      <Wrapper>
        <MyName name="Ewa" surname="Bit" />
        <MyName name="Ewa" />
        <MyFavouriteDishes dishes={dishes} />
        <Form />
        <Contact data={{
          tel: '4646345',
          address: 'Morenevegen 15',
          email: 'koteczki@tak.no'
        }} />
        <Game name="Szaszki"/>
        <Users />
      </Wrapper>
    </>
  );
}

export default App;
