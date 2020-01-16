import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Route set path='/' component={Home} />
    <Route set path='/about' component={About} />
    <Route set path='/contact' component={Contact} />
  </div>
);

export default App;
