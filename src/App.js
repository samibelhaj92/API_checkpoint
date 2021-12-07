import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Component/Home';
import UserList from './Component/UserList';
import Victim from './Component/victim';


function App() {
  return (
    <div className="App">
 <Routes>
   <Route path='/'   element={<Home/>}  />

   <Route path='/victim/:id'  element={<Victim/>}  ></Route>
 </Routes>
    </div>
  );
}

export default App;