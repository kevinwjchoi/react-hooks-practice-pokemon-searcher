import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons, searchVal}) {
  const filteredPokemons = pokemons.filter((pokemon) => {
    return (pokemon.name.toLowerCase().includes(searchVal.toLowerCase()));
  })
  console.log(filteredPokemons)

  const pokemonsArray = filteredPokemons.map((pokemon) => {
    return <PokemonCard key={pokemon.id} pokemon={pokemon}/> 
  })

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemonsArray}
    </Card.Group>
  );
}

export default PokemonCollection;
