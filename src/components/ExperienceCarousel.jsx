import useEmblaCarousel from 'embla-carousel-react'
import { EXPERIENCE_DATA } from '../data.js'
import TechStack from './TechStack.jsx'
export default function ExperienceCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true })
  
    return (
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <TechStack {...EXPERIENCE_DATA[0]}/>
          </div>
          <div className="embla__slide">
            <TechStack {...EXPERIENCE_DATA[1]}/>
          </div>
          <div className="embla__slide">
            <TechStack {...EXPERIENCE_DATA[2]}/>
          </div>
        </div>
      </div>
    )
  }