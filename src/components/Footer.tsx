import { Link } from 'react-router-dom'
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Meridian University. Portfolio demo project — not a real institution.</p>
        <div className="footer-links">
          <Link to="/admin">Admin</Link>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
