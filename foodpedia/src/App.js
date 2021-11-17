import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import About from './components/About'
import Login from './components/Login'
import Restaurant from './components/Restaurant'
import Homepage from './components/Homepage'
import NavBar from './components/NavBar'
import Search from './components/Search'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
        {/* Routes for different pages in the application */}
        <Routes>
          <Route exact path='/' element={<Homepage/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/search' element={<Search/>}/>
          <Route exact path='/restaurant' element={<Restaurant/>}/>
        </Routes>
    </div>
  );
}

export default App;
