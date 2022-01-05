import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

import { NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import Dogs from './views/Dogs';
import DogList from './components/DogList';
import Dog from './views/Dog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Dog Shelter</h1>

        <NavLink to="/">Home</NavLink>

        <Switch>
          <Route exact path="/dogs/:id" component={Dog} />
          <Route exact path="/" component={Dogs} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
