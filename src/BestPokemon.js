const BestPokemon = (prop) => {
  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {prop.abilities.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </div>
  );
};

export default BestPokemon;
