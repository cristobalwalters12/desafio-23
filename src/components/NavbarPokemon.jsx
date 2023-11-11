import { NavLink } from 'react-router-dom'
import '../assets/css/style.css'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import icon from '../assets/images/noun-pokestop-624875.png'
const NavbarPokemon = () => {
  const setActiveClass = ({ isActive }) => (isActive ? 'active' : undefined)
  return (
    <Navbar className='bg-body-tertiary '>
      <Container>
        <NavLink className={setActiveClass} to='/'>
          <img src={icon} alt='Descripción de la imagen' className='icon' />

        </NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <div className='nav-link '>
            <NavLink className={setActiveClass} to='/'>Home</NavLink>
          </div>
          <div>
            <NavLink className={setActiveClass} to='/Pokemones/:names'>Pokemones</NavLink>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavbarPokemon
