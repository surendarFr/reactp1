import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Home from "./Home";
import Users from "./Users";
import About from "./About";
import Contact from "./Contact";
import NavBar from "./NavBar"



function App() {
  return (
    <BrowserRouter>
    <NavBar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/user" element={<Users/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
