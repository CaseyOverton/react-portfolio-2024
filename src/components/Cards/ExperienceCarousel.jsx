import useEmblaCarousel from 'embla-carousel-react'
import { EXPERIENCE_DATA } from '../../data.js'
import TechStack from '../TechStack/TechStack.jsx'

export default function ExperienceCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true })

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
          {EXPERIENCE_DATA.map((experienceData) => (
            <div className="embla__slide">
              <TechStack {...experienceData} />
            </div>))}
        </div>
    </div>
  )
}