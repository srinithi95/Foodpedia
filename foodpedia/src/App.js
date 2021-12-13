import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import About from './components/About'
import Login from './components/Login'
import Restaurant from './components/Restaurant.jsx'
import Homepage from './components/Homepage'
import NavBar from './components/NavBar'
import Cart from './components/Cart'
import Forgot from './components/Forgot';
import Register from './components/Register';
import Search from './components/Search'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from "./components/Checkout";
import OrderConfirmed from "./components/OrderConfirmed";


function App(props) {
  return (
    <div className="App">
      <Header />
      <br/>
      {/* <NavBar /> */}
        {/* Routes for different pages in the application */}
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmed" element={<OrderConfirmed />} />
          <Route path='/forgot' element={<Forgot/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/restaurant' element={<Restaurant/>}/>
        </Routes>
    </div>
  );
}


export default App;
