import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleNewPokemon}) {
  
  function renderNewPokemon(e) {
    e.preventDefault()
    const newPokemon = {
      name : e.target.name.value,
      hp : parseFloat(e.target.hp.value),
      sprites : {
        front : e.target.frontUrl.value,
        back : e.target.backUrl.value
      }
    }
    fetch("http://localhost:3001/pokemon", {
      method : "POST",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(newPokemon)
    })
    .then(r => r.json())
    .then(newPokemon => handleNewPokemon(newPokemon))
    e.target.reset();
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={renderNewPokemon}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button >Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
