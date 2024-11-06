import "../Navbar/Navbar.css";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";

const Navbar = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);

  const togglerSidebar = () => {
    setsidebarOpen(!sidebarOpen);
  };

  return (
    <div className="layout">
      <Sidebar sidebarOpen={sidebarOpen} />

      <div className="main">
        <header className="header">
          {/* Chamando a função correta no onClick */}
          <button onClick={togglerSidebar}>
            {sidebarOpen ? "Fechar Sidebar" : "Abrir Sidebar"}
          </button>
          <h1>Header</h1>
        </header>

        <main className="content">
          <p>Conteúdo Principal</p>
        </main>

        <footer className="footer">
          <p>Footer</p>
        </footer>
      </div>
    </div>
    /*<div className="content">
        <div className="navbar">
          <div className="navbar-left">
            <a href="/" className="logo">
              Software
            </a>
          </div>
          <div className="navbar-center">
            <ul className="nav-links">
              <li>
                <a href="/produtos">Produtos</a>
              </li>
              <li>
                <a href="/sobre">Sobre</a>
              </li>
              <li>
                <a href="/contato">Contato</a>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <a href="/cart" className="cart-icon">
              <i className="fas fa-shopping-cart"></i>
              <span className="cart-count">0</span>
            </a>
            <a href="/account" className="user-icon">
              <i className="fas fa-user"></i>
            </a>
            <footer className="footer">
                <p>Footer</p>
            </footer>
          </div>
        </div>
      </div> */
  );
};

export default Navbar;
