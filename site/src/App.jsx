import { LuMapPin, LuPhone } from 'react-icons/lu'

const PHONE_DISPLAY = '(41) 98816-2571'
const PHONE_LINK = 'https://wa.me/5541988162571'
const ADDRESS = 'Rua Brasílio Itiberê, 3531 - Água Verde - Curitiba-PR'
const MAPS_LINK =
  'https://www.google.com/maps?q=Rua+Brasilio+Itiberê,+3531+-+Água+Verde+-+Curitiba-PR'

const PHOTOS = Array.from({ length: 15 }, (_, i) => ({
  src: `images/restaurados/movel_restaurado_${i + 1}.webp`,
  alt: `Móvel restaurado ${i + 1}`,
}))

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <img className="hero-img" src="images/banner.jpg" alt="Transforme seus móveis e seu ambiente" />
        <h1 className="visually-hidden">
          Transforme seus móveis e seu ambiente
        </h1>
      </header>

      <main>

        <section className="gallery" id="galeria" aria-labelledby="galeria-title">
          <div className="container">
            <h2 className="section-title" id="galeria-title">
              Nosso Trabalho
            </h2>
            <p className="section-lede">
              Alguns móveis que passaram pelas nossas mãos.
            </p>
            <div className="gallery-grid">
              {PHOTOS.map((p) => (
                <figure className="gallery-item" key={p.src}>
                  <img src={p.src} alt={p.alt} loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-identity">
            <p className="footer-name">Binho Restauração de Móveis</p>
            <p className="footer-meta">
              Restauração, reforma, pintura e revitalização de móveis
              residenciais e comerciais em Curitiba e região.
            </p>
          </div>
          <div className="footer-contact">
            <a href={PHONE_LINK} target="_blank" rel="noopener noreferrer">
              <LuPhone aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
              <LuMapPin aria-hidden="true" />
              {ADDRESS}
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}