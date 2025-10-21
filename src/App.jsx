import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";


// 🏠 Pages
import Accueil from "./components/Accueil";
import Produits from "./components/Produits";
import Apropos from "./components/Apropos";
import Contact from "./components/Contact";

/* 🧭 Navbar */
const Navbar = ({ cartCount }) => (
  <nav className="navbar">
    <div className="brand">MAS <span>Store</span></div>
    <ul className="nav-links">
      <li><Link to="/">Accueil</Link></li>
      <li><Link to="/produits">Produits</Link></li>
      <li><Link to="/apropos">À propos</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
    <div className="nav-actions">
      <button className="btn ghost">Connexion</button>
      <button className="btn cart-btn">
        🛒 <span className="cart-count">{cartCount}</span>
      </button>
    </div>
  </nav>
);

/* ⚙️ App principale */
const App = () => {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("mas_cart") || "[]"));

  useEffect(() => {
    localStorage.setItem("mas_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) =>
      prev.some((i) => i.id === product.id)
        ? prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i))
        : [...prev, { ...product, qty: 1 }]
    );
  };

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <Router>
      <div className="app-root">
        <Navbar cartCount={cartCount} />

        <main className="content">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/produits" element={<Produits />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="site-footer">
          <div>© 2025 MAS Store</div>
          <div className="footer-links">
            <a href="#contact">Contact</a>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
