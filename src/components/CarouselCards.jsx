import TechStackCarousel from './TechStackCarousel.jsx'
import ExperienceCarousel from './ExperienceCarousel.jsx';

function CarouselCards() {
    return (
    <div>
        <section class="core-concepts">
            <h2>My Experience</h2>
            <ul>
            <ExperienceCarousel />
            </ul>
        </section>
        <section class="core-concepts">
            <h2>My Tech Stack</h2>
            <ul>
            <TechStackCarousel />
            </ul>
        </section>
    </div>
    )
}
export default CarouselCards