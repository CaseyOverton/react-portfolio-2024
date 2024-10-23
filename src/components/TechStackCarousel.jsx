import useEmblaCarousel from 'embla-carousel-react'
import { TECH_STACK_DATA, EXPERIENCE_DATA } from '../data.js'
import TechStack from './TechStack.jsx'

export default function TechStackCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true })
  
    return (
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <TechStack {...TECH_STACK_DATA[0]}/>
          </div>
          <div className="embla__slide">
            <TechStack {...TECH_STACK_DATA[1]}/>
          </div>
          <div className="embla__slide">
            <TechStack {...TECH_STACK_DATA[2]}/>
          </div>
          <div className="embla__slide">
            <TechStack {...TECH_STACK_DATA[3]}/>
          </div>
          <div className="embla__slide">
            <TechStack {...TECH_STACK_DATA[4]}/>
          </div>
        </div>
      </div>
    )
  }