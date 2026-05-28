import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h1>
        <Link className="brand-link" to="/">TGM Software</Link>
      </h1>
      <p>Game Development & Productivity Software</p>
      <nav className="top-nav" aria-label="Main navigation">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}
