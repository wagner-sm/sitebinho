import { LuMapPin, LuPhone, LuMessageCircle } from 'react-icons/lu'

const PHONE_DISPLAY = '(41) 98816-2571'
const PHONE_LINK = 'https://wa.me/5541988162571'
const ADDRESS = 'Rua Brasílio Itiberê, 3531 - Água Verde - Curitiba-PR'
const MAPS_LINK =
  'https://www.google.com/maps?q=Rua+Brasilio+Itiberê,+3531+-+Água+Verde+-+Curitiba-PR'

// Descrições individualizadas conforme o conteúdo visível de cada fotografia.
const PHOTOS = [
  { src: 'images/restaurados/movel_restaurado_1.webp', alt: 'Cristaleira de madeira escura com portas de vidro' },
  { src: 'images/restaurados/movel_restaurado_2.webp', alt: 'Cristaleira antiga de madeira com detalhes ornamentados' },
  { src: 'images/restaurados/movel_restaurado_3.webp', alt: 'Mesa de jantar de madeira com conjunto de cadeiras' },
  { src: 'images/restaurados/movel_restaurado_4.webp', alt: 'Mesa redonda branca com base trabalhada' },
  { src: 'images/restaurados/movel_restaurado_5.webp', alt: 'Cristaleira clássica de madeira com portas de vidro' },
  { src: 'images/restaurados/movel_restaurado_6.webp', alt: 'Aparador de madeira escura com portas e gavetas' },
  { src: 'images/restaurados/movel_restaurado_7.webp', alt: 'Mesa redonda de madeira escura' },
  { src: 'images/restaurados/movel_restaurado_8.webp', alt: 'Armário baixo de madeira com acabamento escuro' },
  { src: 'images/restaurados/movel_restaurado_9.webp', alt: 'Conjunto de jantar com mesa retangular e cadeiras de madeira' },
  { src: 'images/restaurados/movel_restaurado_10.webp', alt: 'Mesa de jantar de madeira com cadeiras clássicas' },
  { src: 'images/restaurados/movel_restaurado_11.webp', alt: 'Buffet antigo de madeira com detalhes entalhados' },
  { src: 'images/restaurados/movel_restaurado_12.webp', alt: 'Aparador de madeira com gavetas e nichos' },
  { src: 'images/restaurados/movel_restaurado_13.webp', alt: 'Cômoda com gavetas e acabamento verde' },
  { src: 'images/restaurados/movel_restaurado_14.webp', alt: 'Gabinete branco de madeira com portas e gavetas' },
  { src: 'images/restaurados/movel_restaurado_15.webp', alt: 'Mesa de centro de madeira com tampo trabalhado' },
]

const SERVICES = [
  {
    title: 'Restauração e pintura de móveis',
    description: 'Recuperação e renovação do visual de móveis, valorizando suas características e dando uma nova aparência às peças.',
  },
  {
    title: 'Pátinas e acabamentos coloridos',
    description: 'Acabamentos decorativos para mudar a aparência dos móveis e trazer personalidade ao ambiente.',
  },
  {
    title: 'Lacas, verniz e selador',
    description: 'Aplicação de acabamentos para renovar, proteger e realçar a superfície e a beleza da madeira.',
  },
  {
    title: 'Enceramento',
    description: 'Acabamento com cera para realçar a aparência da madeira e proporcionar brilho.',
  },
  {
    title: 'Consertos e pequenos reparos',
    description: 'Ajustes e reparos em móveis para ajudar a recuperar seu uso e sua apresentação.',
  },
  {
    title: 'Montagem e desmontagem',
    description: 'Serviços de montagem e desmontagem de móveis com cuidado durante o manuseio.',
  },
]

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <img
          className="hero-img"
          src="images/banner.jpg"
          alt="Binho Restauração de Móveis: restauração, pintura, pátinas, lacas e acabamentos para móveis"
          fetchPriority="high"
        />
      </header>

      <main>
        <section className="services" id="servicos" aria-labelledby="services-title">
          <div className="container">
            <p className="eyebrow">Binho Restauração de Móveis</p>
            <h1 className="section-title" id="services-title">
              Restauração de móveis em Curitiba
            </h1>
            <p className="services-intro">
              Seu móvel pode ganhar uma nova vida. A Binho Restauração de Móveis
              trabalha com restauração, reforma, pintura e revitalização de móveis
              residenciais e comerciais em Curitiba. O serviço pode incluir reparos
              e diferentes tipos de acabamento, conforme as condições e as
              características de cada peça.
            </p>

            <div className="services-grid">
              {SERVICES.map((service) => (
                <article className="service-item" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>

            <div className="services-cta">
              <p>Quer conversar sobre a restauração de um móvel?</p>
              <a className="contact-button" href={PHONE_LINK} target="_blank" rel="noopener noreferrer">
                <LuMessageCircle aria-hidden="true" />
                Fale pelo WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="gallery" id="galeria" aria-labelledby="galeria-title">
          <div className="container">
            <h2 className="section-title" id="galeria-title">
              Nosso Trabalho
            </h2>
            <p className="section-lede">
              Conheça alguns móveis que passaram pelo nosso trabalho de restauração e renovação.
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
            <a href={PHONE_LINK} target="_blank" rel="noopener noreferrer" aria-label={`Conversar pelo WhatsApp: ${PHONE_DISPLAY}`}>
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
