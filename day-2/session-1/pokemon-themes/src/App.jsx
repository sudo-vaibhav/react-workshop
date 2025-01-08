/* eslint-disable react/prop-types */
import { useState } from 'react'

import './App.css'

function PokemonCard(props){
  return <div className="flex flex-col items-center" style={{
    background : props.theme === "light" ? "#ddd":"#444"
  }}>
  <img
    src={props.sprites.default}
    alt={props.name}
    className="w-32 h-32 object-contain bg-white rounded-lg mb-4"
  />
  <div className="text-center">
    <h2 className="text-xl font-bold capitalize mb-2">
      {props.name}
    </h2>
    <div className="space-y-1 text-sm">
      <p>Height: {props.height / 10}m</p>
      <p>Weight: {props.weight / 10}kg</p>
      
    </div>
  </div>
</div>
}

function App() {
  const [theme, setTheme] = useState("light")
  return <div style={{
    backgroundColor: theme === "light"? "white":"black",
    color: theme === "light" ? "black":"white",
    height: "100vh"
  }}>
    <input type='checkbox' onChange={(e)=>{
      setTheme(e.target.checked? "dark":"light")
    }}/>
    <PokemonCard {...{
      theme: theme,
      name: "jigglypuff",
      sprites:{
        default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
      },
      height: 500,
      weight: 500
    }}/>
  </div>
}

export default App
