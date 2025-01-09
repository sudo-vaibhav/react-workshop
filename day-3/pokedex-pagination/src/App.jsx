import { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router";
// navigation and dark mode components
function Navbar(props) {
  return (
    <div>
      <h1>Pokedex</h1>
      <DarkModeToggle />
    </div>
  );
}

function DarkModeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <label htmlFor="theme">Dark Mode</label>
      <input
        type="checkbox"
        id="theme"
        onChange={(e) => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
        checked={theme === "dark" ? true : false}
      />
    </div>
  );
}

// pokemon related components
function PokemonCollection() {
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
      <PokemonCard name={"jigglypuff"} />
      <PokemonCard name={"charizard"} />
      <PokemonCard name={"ivysaur"} />
      <PokemonCard name={"pikachu"} />
      <PokemonCard name={"mewtwo"} />
      <PokemonCard name={"mew"} />
      <PokemonCard name={"piplup"} />
      <PokemonCard name={"growlithe"} />
      <PokemonCard name={"gengar"} />
    </div>
  );
}

// const value = 2+2;
// await Task in c#

function PokemonCard(props) {
  const [pokemon, setPokemon] = useState(null);
  // const { theme } = useContext(ThemeContext);
  const context = useContext(ThemeContext);

  useEffect(
    // action
    () => {
      const response = fetch("https://pokeapi.co/api/v2/pokemon/" + props.name)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setPokemon(data);
        });
    },
    // dependencies
    [props.name]
  );

  if (pokemon === null) {
    return <div>Loading...</div>;
  }
  return (
    <div
      style={{
        border: "3px solid " + (context.theme === "light" ? "black" : "white"),
        padding: 10,
        margin: 10,
        borderRadius: 20,
      }}
    >
      <h4>{props.name.toUpperCase()}</h4>
      <div>Height: {pokemon.height}</div>
      <div>Weight: {pokemon.weight}</div>
      <img
        src={pokemon.sprites.front_default}
        style={{
          // 0 1 2 3 ... 9 ... a b c d e f
          backgroundColor: context.theme === "light" ? "#ddd" : "#222",
          borderRadius: 10,
          marginTop: 10,
        }}
      />
    </div>
  );
}
function usePokemon(name) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + name)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [name]);

  return pokemon;
}
function RouteBasedPokemonCard() {
  const { name } = useParams();
  return <PokemonCard name={name} />;
}
const ThemeContext = createContext();

// main App component
function App() {
  // stateful variable here for theme - assume dark as the default state
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <div
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
          minHeight: "100vh", // for the whole screen
        }}
      >
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/pokemon">
              <Route index element={<PokemonCollection />} />
              <Route path=":name" element={<RouteBasedPokemonCard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
