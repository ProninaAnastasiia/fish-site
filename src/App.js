import React from 'react';
import './App.css';
import { Route ,Link, Routes} from "react-router-dom";
import Home from"./Components/home.jsx" 
import About from"./Components/about.jsx" 
import Products from"./Components/products.jsx"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="products" element={<Products />} />
          <Route exact path="about" element={<About />} />
        </Routes>    
      <Footer />
    </div>
  );
}

function Navigation() {
  return (
    <nav>
      <ul className="nav-list">
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/products">Продукция</Link></li>
        <li><Link to="/about">О компании</Link></li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <p>Контактная информация:</p>
      <a href="tel:89009570202">8 (900) 957-02-02</a>
      <a href="mailto:nautilusrus@mail.ru">nautilusrus@mail.ru</a>
    </footer>
  );
}

export default App;
