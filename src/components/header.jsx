import imgSrc from '../../src/assets/react-core-concepts.png'

export const userData = {
    firstName: 'Casey', 
    lastName: 'Overton', 
    title: 'Software Developer', 
  };

function Header() {
    return (
      <header>
        <img src={imgSrc} alt="Stylized atom" />
        <h1>{userData.firstName} {userData.lastName} Portfolio</h1>
        <p>
          Frontend/Fullstack Developer with 4+ years of professional software experience in agile development environment.
        </p>
      </header>
    )}
export default Header