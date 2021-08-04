import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavbarComponent/NavbarComponent';
import { ItemListContainer } from './containers/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { Error404 } from './components/404/Error404'
import { CartComponentContext } from './context/cartContext';
import { HomeContainer } from './containers/HomeContainer/HomeContainer';
import { FormComponent } from './components/Form/Form';
import { Auth } from './components/Auth/Auth';
import { Order } from './components/Order/Order'

function App() {

  return (
    <>
      <CartComponentContext>

        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/category/:categoryId" component={ItemListContainer} />
            <Route path="/item/:id" component={ItemDetailContainer} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Auth} />
            <Route path="/checkout" component={FormComponent} />
            <Route path="/orders" component={Order} />
            <Route path="*" component={Error404} />
          </Switch>
        </BrowserRouter>

      </CartComponentContext >
    </>
  );
}

export default App;