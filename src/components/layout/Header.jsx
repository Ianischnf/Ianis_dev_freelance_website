import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const nav = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" to="/" onClick={() => setIsOpen(false)} aria-label="Ianis Dev — accueil">
          IANIS <span>DEV</span>
        </Link>
        <button className="menu-toggle" type="button" aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={isOpen} aria-controls="primary-nav" onClick={() => setIsOpen(v => !v)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav id="primary-nav" className={`nav ${isOpen ? 'nav--open' : ''}`} aria-label="Navigation principale">
          {nav.map(({ to, label, end }) => (
            <NavLink key={to} end={end} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to={to} onClick={() => setIsOpen(false)}>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
