import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [pokemonImage, setPokemonImage] = useState(true);

  function toggleImage() {
    setPokemonImage(!pokemonImage);
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" src={pokemonImage ? pokemon.sprites.front : pokemon.sprites.back} onClick={toggleImage}/>
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
