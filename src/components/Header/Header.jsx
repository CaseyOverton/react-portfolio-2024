import imgSrc from '../../assets/Casey-Overton.jpeg'
import { USER_DATA } from '../../data.js'
import './Header.css'

function Header() {
    return (
      <header>
        <img src={imgSrc} alt="Stylized atom" />
        <h1>{USER_DATA.firstName} {USER_DATA.lastName} Portfolio</h1>
        <p>
          Frontend/Fullstack Developer with 4+ years of professional software experience in agile development environment.
        </p>
      </header>
    )}
export default Header