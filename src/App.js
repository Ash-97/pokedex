// import logo from "./logo.svg";
import "./App.css";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import Logo from "./Logo";
import PokemonCity from "./PokemonCity";
import PokemonMovesSelector from "./PokemonMovesSelector";
const date = new Date().toLocaleDateString();
const appName = "Azan's Pokedex";
const abilities = ["Anticipation", "Adaptability", "Run-Away"];
function logWhenClicked() {
  return doThisInLogWhenClicked("Azan");
}
function doThisInLogWhenClicked(name) {
  console.log(`Hello ${name}`);
}
function App() {
  return (
    <div className="App">
      <Logo appName={appName} handleClick={logWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
}

export default App;

// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>;
