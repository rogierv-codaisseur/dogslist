import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import DogsListContainer from './components/DogsListContainer';
import './App.css';
import DogBreedImagesContainer from './components/DogBreedImagesContainer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route exact path='/' component={DogsListContainer} />
        <Route path='/dog-breeds/:breed' component={DogBreedImagesContainer} />
      </div>
    );
  }
}

export default App;
