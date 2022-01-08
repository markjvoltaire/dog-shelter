import React from 'react';

export default function DogForm({ updateDogState, name, bio, age, image, handleSubmit }) {
  return (
    <div>
      <h1>Add A Dog</h1>
      <form>
        <h3>Please Enter Dog Details</h3>
        <input
          placeholder="Enter Name"
          type="text"
          value={name}
          onChange={(e) => {
            updateDogState('name', e.target.value);
          }}
        />

        <input
          placeholder="enter the pets bio"
          type="text"
          value={bio}
          onChange={(e) => {
            updateDogState('bio', e.target.value);
          }}
        />

        <input
          placeholder="enter the pets age"
          type="number"
          value={age}
          onChange={(e) => {
            updateDogState('age', e.target.value);
          }}
        />

        <input
          placeholder="enter the pets image link"
          value={image}
          type="text"
          onChange={(e) => {
            updateDogState('image', e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Add New Dog</button>
      </form>
    </div>
  );
}
