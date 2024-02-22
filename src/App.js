// import react from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Product from './components/Product/Products';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Blogs from './components/Blogs/Blogs';
import Pagenotfound from './components/PageNotFound/Pagenotfound';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about-us" element={<About/>}/>
    <Route path="/menu" element={<Menu/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/contact-us" element={<Contact/>}/>
    <Route path="/blogs" element={<Blogs/>}/>
    <Route path="*" element={<Pagenotfound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  )
}

export default App;
