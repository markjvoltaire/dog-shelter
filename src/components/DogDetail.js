import React from 'react';

export default function DogDetail({ dog }) {
  return (
    <div>
      <h1>My Name is {dog.name}</h1>
      <img className src={dog.image} />
      <h2>Get To Know Me:</h2>
      <p>{dog.bio}</p>
    </div>
  );
}
