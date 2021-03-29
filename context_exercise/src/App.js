import React from 'react'
import NameBox from './components/NameBox'
import NameContext from './contexts/name'

function App() {
  return (
    <NameContext.Provider value={{name : 'Choozii', no:'01011112222'}}>
    <div>
      <NameBox />
    </div>
    </NameContext.Provider>
  )
}

export default App
