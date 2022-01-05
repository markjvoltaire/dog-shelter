/// This is where you will put your useeffect function that fetch all dogs aka fetchDogs()

// then set those dogs into state

// then return the DogLists component and pass dogs down as props

//

import React, { useEffect, useState } from 'react';
import { fetchDogs } from '../services/dogs';
import DogList from '../components/DogList';

export default function Dogs() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
    };
    fetchData();
  }, []);

  return (
    <div className="Dogs">
      <h1>Dogs</h1>
      <DogList dogs={dogs} />
    </div>
  );
}
