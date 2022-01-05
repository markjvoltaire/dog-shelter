/// Map through props and display a dog for each
import React from 'react';

export default function DogList({ dogs }) {
  return (
    <div className="Dogs">
      <h1>Bing Bong</h1>
      {dogs.map((dog) => (
        <div key={dog.id}>
          <h2>{dog.name}</h2>
          <img src={dog.image} />
        </div>
      ))}
    </div>
  );
}
