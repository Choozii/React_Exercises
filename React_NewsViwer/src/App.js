import React from 'react';
import NewsPage from './pages/NewsPage'
import { Route } from 'react-router-dom';

/*79b092b6d2c140fe942d6b35a011f65f */
const App = () => {
  return(
    <Route path="/:category?" component={NewsPage}/>
  )
}

export default App;
