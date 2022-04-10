import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom'
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element = {<Home />} />
        <Route exact path='/products' element = {<Products />} />
        <Route exact path='/products/:id' element = {<Product />} />
        <Route exact path='/cart' element = {<Cart />} />
        <Route exact path='/checkout' element = {<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
