import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import DogsListContainer from './components/DogsListContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route exact path='/' component={DogsListContainer} />
      </div>
    );
  }
}

export default App;
