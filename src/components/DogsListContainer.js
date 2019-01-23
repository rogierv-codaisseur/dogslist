import React from 'react';
import request from 'superagent';
import DogsList from './DogsList';

export default class DogsListContainer extends React.Component {
  state = {
    dogBreeds: null
  };

  updateBreeds(breeds) {
    this.setState({
      dogBreeds: breeds
    });
  }

  componentDidMount() {
    request
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => this.updateBreeds(Object.keys(response.body.message)))
      .catch(console.error);
  }

  render() {
    return <DogsList dogBreeds={this.state.dogBreeds} />;
  }
}
