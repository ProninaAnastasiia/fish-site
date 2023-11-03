import './App.css';
import { Route ,Link, Routes} from "react-router-dom";
import Home from"./Components/home" 
import About from"./Components/about" 
import Products from"./Components/products" 
import Contacts from"./Components/contacts" 


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
          <Route exact path="contacts" element={<Contacts />} />
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
        <li><Link to="/contacts">Контакты</Link></li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <p>Контактная информация:</p>
      <p>8 (900) 957-02-02</p>
      <p>nautilusrus@mail.ru</p>
    </footer>
  );
}

export default App;
