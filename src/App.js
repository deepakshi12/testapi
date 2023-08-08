import React from 'react';
import Main from './components/Main';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Details from './components/Details';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/show/:id' element={<Details/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
