import React, {useState, useEffect} from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  const filteredPokemons = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(r => r.json())
      .then((data) => setPokemons(data));
  }, [])

  console.log(pokemons);

  function handleNewPokemon(newPokemon) {
    const newPokemons = [...pokemons, newPokemon];
    setPokemons(newPokemons);

  }

  return (
    <div className="App">
      <PokemonPage pokemons={filteredPokemons} search={search} setSearch={setSearch} handleNewPokemon={handleNewPokemon}/>
    </div>
  );
}

export default App;
