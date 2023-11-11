import PokemonSelector from '../components/PokemonSelector'
import { useContext, useEffect } from 'react'
import { PokemonContext } from '../context/usePokemonContext'
import { useParams } from 'react-router-dom'
import '../assets/css/style.css'
const Pokemon = () => {
  const { name } = useParams()
  const { pokemons, selectedPokemon, setSelectedPokemon } = useContext(PokemonContext)

  useEffect(() => {
    if (name) {
      const foundPokemon = pokemons.find(pokemon => pokemon.name === name)
      if (foundPokemon) {
        setSelectedPokemon(foundPokemon)
      } else {
        setSelectedPokemon(null)
      }
    }
  }, [name, pokemons, setSelectedPokemon])

  return (
    <div>
      <h1>Selecciona un pokemon</h1>
      <div>
        <PokemonSelector />
      </div>
      {selectedPokemon && (
        <div>
          <img src={selectedPokemon.image} alt={selectedPokemon.name} className='imagen' />
          <h2>{selectedPokemon.name}</h2>

        </div>
      )}
    </div>
  )
}

export default Pokemon
