import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarPokemon from './components/NavbarPokemon'
import Home from './views/Home'
import Pokemon from './views/Pokemon'
import { UserProvider } from './context/usePokemonContext'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function App () {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <NavbarPokemon />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokemones/:name' element={<Pokemon />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>

    </>
  )
}

export default App
