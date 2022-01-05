import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { useState, useEffect } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import { Component } from 'react/cjs/react.development';
import DogList from './components/DogList';
import Dogs from './views/Dogs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Dog Shelter</h1>

        <NavLink to="/">Home</NavLink>

        <Switch>
          <Route path="/dogs/:id" component={Dogs} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
