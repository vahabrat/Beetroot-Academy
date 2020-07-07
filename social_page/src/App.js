import React from 'react';

import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header/Header.js';
import Navbar from './components/Navbar/Navbar.js';
import Profile from './components/Profile/Profile.js';
import Dialogs from './components/DialogContainer/Dialogs.js'
import Users from './components/Users/Users.jsx';


const App = (props) => {

  return (
      <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <div className="nav-content-wrapper">
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render = { () => <Dialogs state={props.state.dialogsPage}/> }/>
                    <Route path='/profile'
                           render = { () => <Profile state={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/> }/>
                    <Route path='/dialogs'
                           render = { () => <Users/> }/>
                </div>
            </div>
            <Users/>
        </div>
      </BrowserRouter>
  );
}

export default App;
