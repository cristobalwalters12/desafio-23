import image from '../assets/images/image.png'
import '../assets/css/style.css'
const Home = () => {
  return (
    <div className='home'>
      <h1>Bienvenido maestro pokemon</h1>
      <img src={image} alt='' className='pikachu' />

    </div>
  )
}
export default Home
