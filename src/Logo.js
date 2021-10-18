const Logo = (prop) => {
  return (
    <header>
      <h1>Welcome to {prop.appName}</h1>
      <img
        onClick={prop.handleClick}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="PokemonImage"
      />
    </header>
  );
};

export default Logo;
