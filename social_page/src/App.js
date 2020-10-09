import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header/Header.js';
import Navbar from './components/Navbar/Navbar.js';
import Profile from './components/Profile/Profile.js';
import DialogsContainer from './components/DialogContainer/DialogsContainer.js'
import Users from './components/Users/Users.jsx';


const App = (props) => {

  return (

        <div className="app-wrapper">
            <Header/>
            <div className="nav-content-wrapper">
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render = { () => <DialogsContainer store={props.store} /> }/>
                    <Route path='/profile'
                           render = { () => <Profile store={props.store} /> }/>
                    <Route path='/dialogs'
                           render = { () => <Users/> }/>
                </div>
            </div>
            <Users/>
        </div>

  );
}

export default App;
