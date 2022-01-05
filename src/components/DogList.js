/// Map through props and display a dog for each
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function DogList({ dogs }) {
  return (
    <div className="Dogs">
      {dogs.map((dog) => (
        <Link key={dog.id} to={`/dogs/${dog.id}`}>
          {dog.name}
        </Link>
      ))}
    </div>
  );
}
