import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import './Header.css';
import carrinho from '../assets/carrinho.svg';
import lupa from '../assets/lupa.svg';


function Header() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();

    const term = search.trim();

    if (term) {
      navigate(`/products?filter=${encodeURIComponent(term)}`);
    }
  }

  const links = [
    { label: 'Home', to: '/' },
    { label: 'Produtos', to: '/products' },
    { label: 'Categorias', to: '/categories' },
    { label: 'Meus Pedidos', to: '/orders' },
  ];

  return (
    <header>
      <div className="header-top">
        <Logo />

        <form onSubmit={handleSearch} className="search-form">
          <input
            type="search"
            placeholder="Pesquisar produto..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Pesquisar produtos"
          />
          <button type="submit" aria-label="Buscar">
            <img src={lupa} alt="" />
          </button>
        </form>

        <div className="header-actions">
          <NavLink to="/register">Cadastre-se</NavLink>
          <NavLink className="login-button" to="/login">
            Entrar
          </NavLink>
          <span className="cart-icon" aria-label="Carrinho de compras">
             <img src={carrinho} alt="" />
          </span>
        </div>
      </div>

      <nav className="main-navigation" aria-label="Navegação principal">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
