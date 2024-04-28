import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleNewPokemon}) {
  const [pokeName, setPokeName] = useState("");
  const [pokeHp, setPokeHp] = useState("");
  const [pokeFront, setPokeFront] = useState("");
  const [pokeBack, setPokeBack] = useState("");

  function handleName(event){
    setPokeName(event.target.value);
  }
  function handleHp(event){
    setPokeHp(event.target.value);
  }
  function handleFront(event){
    setPokeFront(event.target.value);
  }
  function handleBack(event){
    setPokeBack(event.target.value);
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          fetch("http://localhost:3001/pokemon", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            }, 
            body: JSON.stringify({
              name: pokeName, 
              hp: pokeHp,
              sprites: {
                front: pokeFront,
                back: pokeBack,
              },
            }),
          })
          .then((res) => res.json())
          .then((newPokemon) => handleNewPokemon(newPokemon))
          .catch((error) => console.log(error))
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" value={pokeName} placeholder="Name" name="name" onChange={handleName}/>
          <Form.Input fluid label="hp" value={pokeHp} placeholder="hp" name="hp" onChange={handleHp} />
          <Form.Input
            fluid
            label="Front Image URL"
            value={pokeFront}
            placeholder="url"
            name="frontUrl"
            onChange={handleFront}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            value={pokeBack}
            placeholder="url"
            name="backUrl"
            onChange={handleBack}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
