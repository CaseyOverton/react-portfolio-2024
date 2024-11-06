import Header from './components/Header/Header.jsx'
import { useState } from 'react'
import Carousels from './components/Carousels/Carousels.jsx'
import TabButton from './components/TabButton/TabButton.jsx'
import { TAB_CONTENT } from './data.js'

function App() {
  function isURL() {
    if(TAB_CONTENT[selectedTopic].title === 'Resume') {
      return (
        <>
          <a href={TAB_CONTENT[selectedTopic].url}>{TAB_CONTENT[selectedTopic].urlTitle}</a>
        </>
      )
    }
    if(TAB_CONTENT[selectedTopic].title === 'Contact') {
      return (
        <>
          <p> {TAB_CONTENT[selectedTopic].description1}</p>
          <a href={TAB_CONTENT[selectedTopic].url}>{TAB_CONTENT[selectedTopic].urlTitle}</a>
        </>
      )
    }
    if(TAB_CONTENT[selectedTopic].title === 'About Me') {
      return (
        <>
          <p> {TAB_CONTENT[selectedTopic].description1}</p>
          <p> {TAB_CONTENT[selectedTopic].description2}</p>
        </>
      )
    }
  }
  function isResume() {
    if(TAB_CONTENT[selectedTopic] == 'Resume') {
      return (
        <>
          <a href={TAB_CONTENT[selectedTopic].url}>{TAB_CONTENT[selectedTopic].urlTitle}</a>
          <p>{TAB_CONTENT[selectedTopic].description1}</p>
        </>
      )
    }
  }
  const [selectedTopic, setSelectedTopic] = useState('Resume')
  function handleSelect(selectedTab) {
    setSelectedTopic(selectedTab);
  }
  let tabContent = (
    <div id="tab-content">
      <h2>
        {TAB_CONTENT[selectedTopic].title}
      </h2>
        {isURL()}
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
