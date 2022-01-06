/// Map through props and display a dog for each
import React from 'react';
import { Link } from 'react-router-dom';
export default function DogList({ dogs }) {
  return (
    <div className="Dogs">
      <h1>Bing Bong</h1>
      {dogs.map((dog) => (
        <div className="dogs" key={dog.id}>
          <Link to={`/dogs/${dog.id}`}>
            <h2>{dog.name}</h2>
            <img className="pics" src={dog.image} />
          </Link>
          <p>{dog.bio}</p>
          <p>I am {dog.age} years old </p>
        </div>
      ))}
    </div>
  );
}
