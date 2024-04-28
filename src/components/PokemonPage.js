import React, {useState , useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
  fetch("http://localhost:3001/pokemon")
  .then ((res) => res.json())
  .then ((pokemonObj) => setPokemons(pokemonObj))
  .catch((error) => console.log(error));
  }, [])

  function handleNewPokemon(newPokemon){
    setPokemons([...pokemons, newPokemon]);
  }



  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleNewPokemon={handleNewPokemon}/>
      <br />
      <Search setSearchVal={setSearchVal}/>
      <br />
      <PokemonCollection pokemons={pokemons} searchVal={searchVal}/>
    </Container>
  );
}

export default PokemonPage;
