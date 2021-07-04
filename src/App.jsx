import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavbarComponent';
import { HomeContainer } from './containers/HomeContainer'
import { ItemListContainer } from './containers/ItemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer';

function App() {

  return (
    <>

      <BrowserRouter BrowserRouter >
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/category/:categoryId" component={ItemListContainer} />
          <Route path="/contact" component={ItemDetailContainer} />
          <Route path="/prueba" component={() => <h1>Esta página no existe</h1>} />
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;