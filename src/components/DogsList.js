import React from 'react';

export default class DogsList extends React.Component {
  renderDogBreed(breed) {
    return <li key={breed}>{breed}</li>;
  }

  render() {
    const { dogBreeds } = this.props;
    return (
      <div className='dogs-list'>
        <h1>Dogs List</h1>

        {!this.dogBreeds && 'Loading...'}

        {dogBreeds && <ul>{dogBreeds.map(this.renderDogBreed)}</ul>}
      </div>
    );
  }
}
