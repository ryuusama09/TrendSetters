import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/ChatBot/Navbar';
import Homepage from './Components/Pages/Homepage';
import Products from './Components/Pages/Products';
import Trends from './Components/Pages/Trends';
import Blog from './Components/Pages/Blog';
import About from './Components/Pages/About';
import Footer from './Components/ChatBot/Footer';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<><Navbar/><Homepage/><Footer/></>} />
        <Route path="/trends" element={<><Navbar/><Trends/><Footer/></>} />
        <Route path="/products" element={<><Navbar/><Products/><Footer/></>} />
        <Route path="/blog" element={<><Navbar/><Blog/><Footer/></>} />
        <Route path="/about" element={<><Navbar/><About/><Footer/></>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
