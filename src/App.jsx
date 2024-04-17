import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import AboutUs from './pages/AboutUs';

function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element ={<Home/>}></Route>
          <Route path="/home" element ={<Home/>}></Route>
          <Route path="/destinations" element ={<Destinations/>}></Route>
          <Route path="/about" element ={<AboutUs/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
