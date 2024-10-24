import Header from './components/Header/Header.jsx'
import { useState } from 'react'
import Carousels from './components/Carousels/Carousels.jsx'
import TabButton from './components/TabButton/TabButton.jsx'
import { TAB_CONTENT } from './data.js'

function App() {
  const [selectedTopic, setSelectedTopic] = useState('Resume')
  function handleSelect(selectedTab) {
    setSelectedTopic(selectedTab);
  }
  let tabContent = (
    <div id="tab-content">
      <h2>
        {TAB_CONTENT[selectedTopic].title}
      </h2>
      <p>  {TAB_CONTENT[selectedTopic].description}</p>
    </div>
  )

  return (
    <div>
      <Header />
      <main>
        <Carousels />
        <section id="examples">
          <menu>
            <TabButton 
              isSelected={selectedTopic === 'Resume'}
              onSelect={() => handleSelect('Resume')}>
                Resume
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'Contact'}
              onSelect={() => handleSelect('Contact')}>
                Contact
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'About'}
              onSelect={() => handleSelect('About')}>
                About Me
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
