import Form from 'react-bootstrap/Form'
import { useContext, useEffect } from 'react'
import { PokemonContext } from '../context/usePokemonContext'
import { useNavigate } from 'react-router-dom'
import '../assets/css/style.css'
const PokemonSelector = () => {
  const navigate = useNavigate()
  const { pokemons, setSelectedPokemon, getPokemons } = useContext(PokemonContext)
  useEffect(() => {
    getPokemons()
  }, [])
  const handleSelect = (event) => {
    const selectedId = event.target.value
    const pokemon = pokemons.find(p => p.id === Number(selectedId))
    setSelectedPokemon(pokemon)
    navigate(`/pokemones/${pokemon.name}`)
  }

  return (
    <>
      <Form.Select aria-label='Seleccione un Pokémon' onChange={handleSelect}>
        <option value=''>Seleccione pokemon</option>
        {pokemons.map((pokemon) => (
          <option key={pokemon.id} value={pokemon.id}>{pokemon.name}</option>
        ))}
      </Form.Select>
    </>
  )
}

export default PokemonSelector
