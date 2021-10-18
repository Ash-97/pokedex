import React, { useState } from "react";

const CaughtPokemon = (prop) => {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");
  function catchPokemon() {
    if (pokemonNameInput !== "") {
      setCaught(caught.concat(pokemonNameInput));
    }
  }

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }
  function resetPokemonInput() {
    setPokemonNameInput("");
  }

  const pokemonList = caught.map((pokemon, index) => (
    <li key={`pokemon${index}`}>{pokemon}</li>
  ));
  return (
    <div>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}> Catch Pokemon</button>
      <button onClick={resetPokemonInput}> Reset Field</button>
      <p>
        Caught {caught.length} Pokemon on {prop.date}
      </p>
      <ul>{pokemonList}</ul>
    </div>
  );
};
export default CaughtPokemon;
