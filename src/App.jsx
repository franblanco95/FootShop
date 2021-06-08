import './App.css';
import { CardComponent } from "./components/Card";
import { NavBar } from './components/Navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


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
    </div>
  );
}

export default App;
