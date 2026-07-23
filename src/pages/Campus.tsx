import { gallery } from '../data/stats'
import '../styles/campus.css'

export default function Campus() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-eyebrow">Campus Life</p>
        <h1 className="section-title">A campus built for more than studying</h1>

        <div className="grid grid-2 gallery-grid">
          {gallery.map((item) => (
            <figure className="gallery-item" key={item.image}>
              <img src={`${import.meta.env.BASE_URL}images/${item.image}`} alt={item.caption} />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
