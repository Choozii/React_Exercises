import logo from './logo.svg';
import './App.css';
import React, { Suspense, useState } from 'react';
import loadable from '@loadable/component'
const SplitMe = loadable(()=>import('./SplitMe'),{
  fallback : <div>로딩중.,..</div>
});

function App() {
  const [visible, setVisible] = useState(false);

  const onClick = () =>{
    setVisible(true);
  }
  const onMouseOver = () => {
    SplitMe.preload();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>hello React!</p>
          {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;