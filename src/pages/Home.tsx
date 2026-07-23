import { Link } from 'react-router-dom'
import { stats } from '../data/stats'
import '../styles/home.css'

export default function Home() {
  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/coll.jpg)` }}
      >
        <div className="hero-overlay" />
        <div className="container hero-inner">
          <p className="section-eyebrow">Est. 1987 · Meridian University</p>
          <h1 className="hero-title">A brighter future starts here.</h1>
          <p className="hero-subtitle">
            Meridian University offers 35+ undergraduate and graduate programs, a global student
            community, and a campus built for both rigorous study and real life.
          </p>
          <div className="hero-cta">
            <Link className="btn" to="/register">
              Apply Now
            </Link>
            <Link className="btn btn-outline" to="/academics">
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-3 stats-grid">
            {stats.map((stat) => (
              <div className="card stat-card" key={stat.label}>
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
