import React from 'react';

import './App.css';
import {Route} from 'react-router-dom';
/*import Header from './components/Header/Header.js';
import Navbar from './components/Navbar/Navbar.js';
import Profile from './components/Profile/Profile.js';*/
import Users from './components/Users/Users.jsx';


const App = () => {
  return (
    <div className="app-container">
        <div className="content-container">
            <Route path='/dialogs'
                   render = { () => <DialogsContainer/> }/>
            <Route path='/profile'
                   render = { () => <Profile/> }/>
            <Route path='/dialogs'
                   render = { () => <Users/> }/>
        </div>
        <Users/>
    </div>
  );
}

export default App;
