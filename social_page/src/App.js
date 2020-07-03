import React from 'react';

import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
/*import Header from './components/Header/Header.js';
import Navbar from './components/Navbar/Navbar.js';*/
import Profile from './components/Profile/Profile.js';
import Dialogs from './components/DialogContainer/DialogContainer.js'
import Users from './components/Users/Users.jsx';


const App = () => {
  return (
      <BrowserRouter>
        <div className="app-container">
            <div className="content-container">
                <Route path='/dialogs'
                       render = { () => <Dialogs/> }/>
                <Route path='/profile'
                       render = { () => <Profile/> }/>
                <Route path='/dialogs'
                       render = { () => <Users/> }/>
            </div>
            <Users/>
        </div>
      </BrowserRouter>
  );
}

export default App;
