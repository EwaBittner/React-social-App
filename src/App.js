import React from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';
// import MyName from "./MyName";
import {Contact} from "./Contact";
import Game from "./Game";
// import {MyFavouriteDishes} from "./Dishes";
import Wrapper from "./Wrapper";
import Users from "./Users";
import {Form} from "./Form";
import Nav from "./Nav";

const dishes = [
  { id: 1, name: 'Bigos' }, 
  { id: 2, name: 'Ogórkowa' }, 
  { id: 3, name: 'Barszcz' }
]

function App() {
  return (
    <>
      <Nav />
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
