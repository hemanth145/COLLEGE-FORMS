import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/academics', label: 'Academics' },
  { to: '/campus', label: 'Campus' },
  { to: '/admissions', label: 'Admissions' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <NavLink to="/" className="navbar-logo">
          Meridian<span>.</span>
        </NavLink>

        <nav className={`navbar-links ${open ? 'navbar-links-open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink className="btn navbar-cta" to="/register">
          Apply Now
        </NavLink>

        <button className="navbar-toggle" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
