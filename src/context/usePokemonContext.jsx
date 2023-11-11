import { createContext, useState } from 'react'

export const PokemonContext = createContext()

export const UserProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151'
  const getPokemons = async () => {
    const response = await fetch(pokemonUrl)
    const data = await response.json()
    const { results } = data
    const newPokemons = results.map((pokemon, index) => ({
      ...pokemon,
      id: index + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    }))
    setPokemons(newPokemons)
  }

  return (
    <PokemonContext.Provider value={{ pokemons, selectedPokemon, setSelectedPokemon, getPokemons }}>
      {children}
    </PokemonContext.Provider>
  )
}
