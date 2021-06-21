import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { NavBar } from './components/NavbarComponent';
import { HomeContainer } from './containers/HomeContainer';

function App() {

  return (
    <>
      <NavBar />
      <HomeContainer />
    </>
  );
}

export default App;