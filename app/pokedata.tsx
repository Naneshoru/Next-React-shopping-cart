import React, { use } from 'react';

const fetchPoke = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
  if (!response.ok) {
    throw new Error('Failed to fetch poke');
  }
  return await response.json();
}

const PokeData = () => {
  const poke = use(fetchPoke());
  return (
    <h1>Dinamic info: {poke.name}</h1>
  )
}

export default PokeData;