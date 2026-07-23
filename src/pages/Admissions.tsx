import { Link } from 'react-router-dom'
import { admissionSteps, faqs } from '../data/faq'
import '../styles/admissions.css'

export default function Admissions() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-eyebrow">Admissions</p>
        <h1 className="section-title">How to apply</h1>

        <div className="steps-grid">
          {admissionSteps.map((item) => (
            <div className="card step-card" key={item.step}>
              <span className="step-number">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="admissions-cta">
          <Link className="btn" to="/register">
            Start your application
          </Link>
        </div>

        <h2 className="section-title faq-title">Frequently asked questions</h2>
        <div className="faq-list">
          {faqs.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
