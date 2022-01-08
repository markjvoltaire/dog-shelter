import React, { useEffect, useState } from 'react';
import { fetchDogById } from '../services/dog';
import DogDetail from '../components/DogDetail';
import { useParams } from 'react-router-dom';

export default function Dog() {
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState([true]);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(params.id);
      setDog(data);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);
  if (loading) {
    return <h1>loading</h1>;
  }

  return (
    <div>
      <DogDetail dog={dog} />
    </div>
  );
}
