/// This is where you will put your useeffect function that fetch all dogs aka fetchDogs()

// then set those dogs into state

// then return the DogLists component and pass dogs down as props

//

import React, { useEffect, useState } from 'react';
import { fetchDogs } from '../services/dogs';
import DogList from '../components/DogList';

export default function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) {
    return <h1>loading</h1>;
  }

  return (
    <div className="Dogs">
      <DogList dogs={dogs} />
    </div>
  );
}
