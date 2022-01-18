import { BrowserRouter } from 'react-router-dom';

import { NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import Dogs from './views/Dogs';
import Dog from './views/Dog';
import DogForm from './views/AdminForm';
import EditForm from './views/EditForm';

function App() {
  return (
    <div className="App">
      <header className="header">Dog Shelter</header>
      <BrowserRouter>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/admin">admin</NavLink>
        <NavLink to="/edit">Edit Dog</NavLink>

        <Switch>
          <Route exact path="/dogs/:id" component={Dog} />
          <Route exact path="/" component={Dogs} />
          <Route exact path="/admin" component={DogForm} />
          <Route exact path="/edit" component={EditForm} />
        </Switch>
      </BrowserRouter>
      <footer>by Mark Voltaire</footer>
    </div>
  );
}

export default App;
