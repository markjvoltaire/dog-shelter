import React from 'react';
export default function DogDetail({ dog }) {
  return (
    <div>
      <h1 className="dogName">My Name is {dog.name}</h1>
      <img className="dogPic" src={dog.image} />
      <h2 className="tag">Get To Know Me:</h2>
      <p className="dogBio">{dog.bio}</p>
    </div>
  );
}
