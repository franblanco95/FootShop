import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavbarComponent';
import { HomeContainer } from './containers/HomeContainer'
import { ItemListContainer } from './containers/ItemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { Cart } from './components/Cart';
import { Error404 } from './components/404'
import { CartComponentContext } from './context/cartContext';

function App() {

  return (
    <>
      <CartComponentContext>

        <BrowserRouter BrowserRouter >
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/category/:categoryId" component={ItemListContainer} />
            <Route path="/item/:id" component={ItemDetailContainer} />
            <Route path="/cart" component={Cart} />
            <Route path="*" component={Error404} />
          </Switch>
        </BrowserRouter>

      </CartComponentContext >
    </>
  );
}

export default App;