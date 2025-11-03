import About from './About';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import HeroSection from './Hero';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from './Services';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/Prospera'>
      <Header></Header>
        <Routes>
          <Route path="/" element={ <HeroSection /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/services" element={ <Services /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
        </Routes>
        <Footer />
      </BrowserRouter>      
      </div>
  );
}

export default App;
