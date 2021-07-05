import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavbarComponent';
import { HomeContainer } from './containers/HomeContainer'
import { ItemListContainer } from './containers/ItemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { Error404 } from './components/404'

function App() {

  return (
    <>

      <BrowserRouter BrowserRouter >
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/category/:categoryId" component={ItemListContainer} />
          <Route path="/item/:id" component={ItemDetailContainer} />
          <Route path="*" component={Error404} />
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;