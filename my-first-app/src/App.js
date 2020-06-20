import React from 'react';
import './App.css';
import Module from './Module_1'
import ToDoInput from './ToDoInput';
import List from './List';
import Buttons from './Buttons';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <ToDoInput />
        <List />
        <Buttons />
      </div>
    );
  }
}

export default App;
