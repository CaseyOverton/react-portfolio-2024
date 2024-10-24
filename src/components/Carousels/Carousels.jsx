import TechStackCarousel from '../Cards/TechStackCarousel.jsx'
import ExperienceCarousel from '../Cards/ExperienceCarousel.jsx'
import './Carousels.css'

function Carousels() {
    return (
    <div>
        <section className="core-concepts">
            <h2>My Experience</h2>
            <ul>
              <ExperienceCarousel />
            </ul>
        </section>
        <section className="core-concepts">
            <h2>My Tech Stack</h2>
            <ul>
              <TechStackCarousel />
            </ul>
        </section>
    </div>
    )
}
export default Carousels