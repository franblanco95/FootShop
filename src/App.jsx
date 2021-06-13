import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import { NavBar } from './components/NavbarComponent';
import { Carrousel } from './components/CarrouselComponent';
import { HomeContainer } from './containers/HomeContainer';


function App() {

  return (
    <>
      <NavBar />
      <HomeContainer />
      <Carrousel />
    </>
  );
}

export default App;
