import React, { useState, useEffect } from 'react';
import DogForm from '../components/DogForm';
import { fetchDogById } from '../services/dog';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function EditForm() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('');
  const [age, setAge] = useState('');

  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchDogById(params.id);

      setName(resp.name);
      setBio(resp.bio);
      setImage(resp.image);
      setAge(resp.age);
    };
    fetchData();
  }, [params.id]);

  return (
    <div>
      <h1>Edit Dog</h1>

      <DogForm
        name={name}
        setName={setName}
        bio={bio}
        setBio={setBio}
        image={image}
        setImage={setImage}
        age={age}
        setAge={setAge}
      />
    </div>
  );
}
