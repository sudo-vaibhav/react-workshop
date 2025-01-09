/* eslint-disable react/prop-types */
import { useState, useEffect, createContext, useContext } from "react";

import "./App.css";

const ThemeContext = createContext();

function PokemonCard({ name }) {
  const [pokemon, setPokemon] = useState(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPokemon(data);
      });
  }, [name]);

  if (!pokemon) {
    return <div>Loading</div>;
  }
  return (
    <div
      style={{
        background: theme === "light" ? "#ddd" : "#444",
        width: 100,
        padding: 10,
        borderRadius: 10,
      }}
    >
      <img
        alt={pokemon.name}
        src={pokemon.sprites.front_default}
        style={{
          backgroundColor: theme === "light" ? "#bbb" : "#666",
        }}
      />
      <div>
        <h4>{pokemon.name}</h4>
        <div>
          <p>Height: {pokemon.height / 10}m</p>
          <p>Weight: {pokemon.weight / 10}kg</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
          height: "100vh",
        }}
      >
        <Navbar />
        <PokemonCollection />
      </div>
    </ThemeContext.Provider>
  );
}

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>Pokedex</h1>
      <DarkModeToggle />
    </div>
  );
};

const PokemonCollection = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      <PokemonCard name={"bulbasaur"} />
      <PokemonCard name={"charmander"} />
      <PokemonCard name={"squirtle"} />
    </div>
  );
};

const DarkModeToggle = () => {
  const { setTheme } = useContext(ThemeContext);
  return (
    <div>
      <label htmlFor="theme">Dark Mode</label>
      <input
        name="theme"
        id="theme"
        type="checkbox"
        onChange={(e) => {
          setTheme(e.target.checked ? "dark" : "light");
        }}
      />
    </div>
  );
};

export default App;
