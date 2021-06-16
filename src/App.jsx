import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



import { NavBar } from './components/NavbarComponent';
import { HomeContainer } from './containers/HomeContainer';

function App() {

  const product = [
    { name: 'Nike', img: "./imagenes/jordan.jpg", price: '$ 255', stock: 2 },
    { name: 'Adidas', img: "./imagenes/jordan2.jpg", price: '$ 249', stock: 3 },
    { name: 'Topper', img: "./imagenes/jordan3.png", price: '$ 180', stock: 4 },
    { name: 'Reebok', img: "./imagenes/jordan4.jpg", price: '$ 150', stock: 5 }

  ];

  return (
    <>
      <NavBar />
      <HomeContainer productData={product}/>
    </>
  );
}

export default App;
