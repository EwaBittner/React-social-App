import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserDetails } from "./UserDetails";

import './App.css';
import MyName from "./MyName";
import {Contact} from "./Contact";
import Game from "./Game";
import {MyFavouriteDishes} from "./Dishes";
import Wrapper from "./Wrapper";
import Users from "./Users";
import {Form} from "./Form";
import Nav from "./Nav";
import {GoHome} from "./GoHome";

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
          <Route path="/about-me" element={<MyFavouriteDishes dishes={dishes} />} >
            <Route path="/about-me" element={<MyName name="Ewa" surname="Bit"/>} />
            <Route path="/about-me" element={<MyName name="Ewa"/>} />
          </Route>

          <Route path="/game" element={<Game name="Szaszki"/>} />

          <Route path="/users/*" element={<Users />} />
          to troch
          <Route path="/users/:id" component={UserDetails} />

          <Route path="/form" element={<Form />} />

          <Route path="/contact" element={<Contact data={{
              tel: '4646345',
              address: 'Beautiful street 13',
              email: 'kittens@somewhere.no'
            }} />} >
          </Route>

          <Route path="/gohome" element={<GoHome />} />
          
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
