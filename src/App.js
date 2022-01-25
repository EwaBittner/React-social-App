import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserDetails } from "./UserDetails";

import './App.css';
// import MyName from "./MyName";
import {Contact} from "./Contact";
import Game from "./Game";
import {MyFavouriteDishes} from "./Dishes";
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
          <Route path="/about-me" element={<MyFavouriteDishes dishes={dishes} />} >
            {/* <MyName name="Ewa" surname="Bit" /> */}
            {/* <MyName name="Ewa" /> */}
          </Route>

          <Route path="/game" element={<Game name="Szaszki"/>} />

          <Route exact path="/users" element={<Users />} />

          <Route path="/users/:id" component={UserDetails} />

          <Route path="/form" element={<Form />} />

          <Route path="/contact" element={<Contact data={{
              tel: '4646345',
              address: 'Beautiful street 13',
              email: 'kittens@somewhere.no'
            }} />} >
          </Route>
          
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
