import '../styles/about.css'

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-eyebrow">About</p>
        <h1 className="section-title">The home of Leaders &amp; Best</h1>

        <div className="about-grid">
          <p className="about-lead">
            Meridian University is a place with deep traditions focused on creating brighter futures.
            Since 1987, we've brought together students and faculty from across the world to pursue
            rigorous academics inside a genuinely supportive community.
          </p>

          <div className="card about-card">
            <p className="about-card-label">Mission</p>
            <p>
              To educate the next generation of leaders through hands-on learning, small class
              sizes, and direct access to faculty doing real research in their fields.
            </p>
          </div>
        </div>

        <div className="grid grid-3 about-pillars">
          <div className="card">
            <h3>Teaching</h3>
            <p>14:1 student-to-faculty ratio, with most upper-level courses capped at 25 students.</p>
          </div>
          <div className="card">
            <h3>Research</h3>
            <p>Undergraduate research opportunities available starting sophomore year across every school.</p>
          </div>
          <div className="card">
            <h3>Community</h3>
            <p>120+ student organizations, from robotics to debate to a dozen cultural associations.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
