import TechStack from '../src/components/techStack.jsx'
import Header from '../src/components/header.jsx'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true })

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <TechStack
            title="Javascript"
            description="Destructuring, Async/Await, ES6, Array Methods and more.. "
            url="https://hackernoon.com/12-javascript-concepts-that-will-level-up-your-development-skills-b37d16ad7104"/>
        </div>
        <div className="embla__slide">
          <TechStack
            title="React"
            description="Proficient in hooks, redux, props and more."
            url="https://stackoverflow.com/questions/41080481/in-reactjs-how-to-invoke-link-click-via-button-press"/>
        </div>
        <div className="embla__slide">
          <TechStack
            title="React-Native"
            description="IOS/Andriod development, mobile UI stylization using CSS, react-native components "
            url="https://hackernoon.com/12-javascript-concepts-that-will-level-up-your-development-skills-b37d16ad7104"/>
        </div>
        <div className="embla__slide">
          <TechStack
            title="HTML/CSS"
            description="HTML, JSX, CSS, LESS, HTL Sightly"
            url="https://hackernoon.com/12-javascript-concepts-that-will-level-up-your-development-skills-b37d16ad7104"/>
        </div>
        <div className="embla__slide">
          <TechStack
            title="Applications Used: "
            description="Github/Gitlab, Jira, Jenkins,Figma"
            url="https://hackernoon.com/12-javascript-concepts-that-will-level-up-your-development-skills-b37d16ad7104"/>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>My Tech Stack</h2>
        <ul>
          <EmblaCarousel />
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
