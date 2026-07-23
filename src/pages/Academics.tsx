import { programs } from '../data/programs'
import '../styles/academics.css'

export default function Academics() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-eyebrow">Academics</p>
        <h1 className="section-title">Programs we offer</h1>

        <div className="grid grid-2">
          {programs.map((program) => (
            <div className="card program-card" key={program.code}>
              <div className="program-head">
                <h3>{program.name}</h3>
                <span className="pill">{program.code}</span>
              </div>
              <p className="program-meta">
                {program.level} · {program.duration}
              </p>
              <p className="program-desc">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
