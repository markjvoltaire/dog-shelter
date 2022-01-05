import React, { useEffect, useState } from 'react';
import { fetchDogById } from '../services/dog';
import { DogDetail } from '../components/DogDetail';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function Dog() {
  const [dog, setDog] = useState([]);

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(params.id);
      setDog(data);
    };
    fetchData();
  }, [params.id]);

  return (
    <div>
      <DogDetail dog={dog} />
    </div>
  );
}
