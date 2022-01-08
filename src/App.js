import { BrowserRouter } from 'react-router-dom';

import { NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import Dogs from './views/Dogs';
import Dog from './views/Dog';
import DogForm from './views/AdminForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1 className="header">Dog Shelter</h1>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/admin">admin</NavLink>

        <Switch>
          <Route exact path="/dogs/:id" component={Dog} />
          <Route exact path="/" component={Dogs} />
          <Route exact path="/admin" component={DogForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
