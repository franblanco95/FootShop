import './App.css';
import { CardComponent } from "./components/card";
import { NavBar } from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Carrousel } from './components/carrousel';


function App() {
  return (

    <div className="App">
      <NavBar />
      <header className="App-header">
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hola Mundos
        </a>
        <CardComponent />
      </header>

      <Carrousel />
    </div>
  );
}

export default App;
