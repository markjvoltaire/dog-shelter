

/// in here we should have two functions
// 1. fetchDogs() where we will be grabbing all the dogs from supabase

export async function fetchDogs() {
  const resp = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/dogs?`, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });
  const data = await resp.json();
  return data;
}

// 2. fetchDogsById() where we will be grabbing each dog by it's id
