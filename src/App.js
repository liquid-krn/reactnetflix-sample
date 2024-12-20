import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Price from './price';
import Home from './home';
import Moviepage from './moviepage';
import Signup from './signup';
import Signin from './signin';

function App(){
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/price' element={<Price />}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/moviepage' element={<Moviepage />}/>
      </Routes>
    </Router>
  );
}
export default App;
