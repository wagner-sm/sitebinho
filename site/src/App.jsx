import {
  LuHammer,
  LuPaintbrush,
  LuSprayCan,
  LuDroplets,
  LuLayers,
  LuSparkles,
  LuPalette,
  LuWrench,
  LuHouse,
  LuPaintRoller,
  LuMapPin,
  LuPhone,
} from 'react-icons/lu'

const PHONE_DISPLAY = '(41) 98816-2571'
const PHONE_LINK = 'https://wa.me/5541988162571'
const ADDRESS = 'Rua Brasílio Itiberê, 3531 - Água Verde - Curitiba-PR'
const MAPS_LINK =
  'https://www.google.com/maps?q=Rua+Brasilio+Itiberê,+3531+-+Água+Verde+-+Curitiba-PR'

const SERVICES = [
  {
    icon: LuHammer,
    title: 'Restauração e Pinturas de Móveis',
    text: 'Devolvemos a vida e a beleza dos seus móveis.',
  },
  {
    icon: LuPaintbrush,
    title: 'Patinas',
    text: 'Acabamentos exclusivos com efeito envelhecido.',
  },
  {
    icon: LuSprayCan,
    title: 'Lacas',
    text: 'Acabamento sofisticado e de alta durabilidade.',
  },
  {
    icon: LuDroplets,
    title: 'Verniz',
    text: 'Proteção e realce da beleza da madeira.',
  },
  {
    icon: LuLayers,
    title: 'Selador',
    text: 'Prepara e protege a superfície para um acabamento perfeito.',
  },
  {
    icon: LuSparkles,
    title: 'Encerados',
    text: 'Brilho natural e proteção com acabamento fino.',
  },
  {
    icon: LuPalette,
    title: 'Coloridos',
    text: 'Dá cor e personalidade aos seus móveis.',
  },
]

const MORE_SERVICES = [
  {
    icon: LuWrench,
    title: 'Montagem e Desmontagem de Móveis',
    text: 'Praticidade e cuidado na montagem e desmontagem.',
  },
  {
    icon: LuHammer,
    title: 'Concertos',
    text: 'Soluções eficientes para problemas em seus móveis.',
  },
  {
    icon: LuHouse,
    title: 'Pequenos Reparos em Casas e Apartamentos',
    text: 'Reparos rápidos e com qualidade que fazem a diferença.',
  },
  {
    icon: LuPaintRoller,
    title: 'Pinturas de Paredes',
    text: 'Acabamento impecável para renovar seus ambientes.',
  },
]

const PHOTOS = Array.from({ length: 15 }, (_, i) => ({
  src: `images/restaurados/movel_restaurado_${i + 1}.webp`,
  alt: `Móvel restaurado ${i + 1}`,
}))

function ServiceCard({ icon: Icon, title, text }) {
  return (
    <article className="service-card">
      <span className="service-icon" aria-hidden="true">
        <Icon />
      </span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <img className="hero-img" src="images/hero.webp" alt="Móvel em restauração na marcenaria" />
        <h1 className="visually-hidden">
          Transforme seus móveis e seu ambiente
        </h1>
      </header>

      <main>
        <section className="services" id="servicos" aria-labelledby="servicos-title">
          <div className="container">
            <h2 className="section-title" id="servicos-title">
              Nossos Serviços
            </h2>
            <div className="service-grid">
              {[...SERVICES, ...MORE_SERVICES].map((s) => (
                <ServiceCard key={s.title} {...s} />
              ))}
            </div>
          </div>
        </section>

        <section className="contact-banner" aria-label="Contato">
          <div className="container">
            <a href={PHONE_LINK} target="_blank" rel="noopener noreferrer">
              <img src="images/contato.webp" alt="Entre em contato: 41 98816-2571 pelo WhatsApp" />
            </a>
          </div>
        </section>

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