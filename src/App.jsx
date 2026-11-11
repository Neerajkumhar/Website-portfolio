import { Fragment } from 'react'
import { decorationPath, bronzeLine } from './decorations.js'

const projects = [
  {
    brand: 'Avikrat-',
    name: 'AI Based Company',
    image: '/assets/Avikrat- AI Based Company.png',
    href: 'https://www.avikrat.com',
    row: 1,
    ratio: '1247 / 747',
  },
  {
    brand: 'Feel Good With Yoga -',
    name: 'Yoga',
    image: '/assets/Feel Good With Yoga - Yoga.png',
    href: 'https://feelgoodwithyoga.vercel.app/',
    row: 1,
    ratio: '1213 / 772',
  },
  {
    brand: 'Hughes -',
    name: 'Property Dealer',
    image: '/assets/Hughes - Property Dealer.png',
    href: 'https://hughes-teal.vercel.app/',
    row: 1,
    ratio: '1203 / 706',
  },
  {
    brand: 'MK Enterprise -',
    name: 'Service Provider',
    image: '/assets/MK Enterprise - Service Provider.png',
    href: 'https://www.mkenterpriseindia.com/',
    row: 2,
    ratio: '1144 / 744',
  },
  {
    brand: 'Yogam -',
    name: 'Yoga Trainer',
    image: '/assets/Yogam - Yoga Trainer.png',
    href: 'https://yogam-orpin.vercel.app/',
    row: 2,
    ratio: '1150 / 791',
  },
  {
    brand: 'Vagwiin -',
    name: 'Service Provider',
    image: '/assets/Vagwiin - Service Provider.png',
    href: 'https://www.vagwiin.com',
    row: 2,
    ratio: '1119 / 719',
  },
  {
    brand: 'Rajbaan -',
    name: 'Spices Brand',
    image: '/assets/Rajbaan - Spices Brand.png',
    href: 'https://www.rajbaan.in',
    row: 3,
    ratio: '1159 / 759',
  },
]

const focuses = [
  { title: 'Design', image: '/assets/Design Focus - Design.png' },
  { title: 'Branding', image: '/assets/Design Focus - Branding.png' },
  { title: 'Illustration', image: '/assets/Design Focus - Illustration.png' },
]

const testimonials = [
  {
    quote: 'A vision brought to life with precision.',
    body: [
      'Visuark transformed our ideas into a',
      'premium digital experience. The design,',
      'attention to detail and overall execution',
      'gave our brand the strong online presence',
      'we wanted.',
    ],
    client: 'Avikrat, AI Infrastructure',
  },
  {
    quote: 'A beautiful experience from start to finish.',
    body: [
      'The team understood our vision perfectly',
      'and created a website that reflects our',
      'wellness philosophy. The design feels',
      'welcoming, elegant and true to our brand.',
    ],
    client: 'Feel Good, Yoga & Ayurveda',
  },
  {
    quote: 'Reliable, creative and professional.',
    body: [
      'Visuark delivered a clean and modern',
      'website that communicates our services',
      'effectively. Their approach to design and',
      'development made the entire process',
      'smooth.',
    ],
    client: 'Vagwiin, IT Infrastructure',
  },
]

function SocialIcon({ label, href, children }) {
  return (
    <a
      className="social-icon"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <main id="main">
        {/* ---------------------------------------------------------------- */}
        {/* Hero                                                             */}
        {/* ---------------------------------------------------------------- */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="shell hero-inner">
            <h1 id="hero-title" className="hero-title">
              <em>Hello,</em> I am Visuark!
            </h1>
            <p className="hero-copy">
              I believe brevity is key. My print and digital designs
              <br />{' '}
              are all about minimalism and elegance.
            </p>
            <a className="hire-link" href="mailto:contact@visuark.com">
              Hire Us
            </a>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* About                                                            */}
        {/* ---------------------------------------------------------------- */}
        <section className="about" aria-labelledby="about-title">
          <div className="shell">
            <div className="about-grid">
              <h2 id="about-title" className="section-title about-title">
                <em>About Visuark</em>
              </h2>

              <div className="about-media">
                <img
                  src="/assets/About-img.png"
                  alt="The VISUARK team gathered in front of an ochre studio backdrop"
                  width="2353"
                  height="1669"
                  loading="lazy"
                />
              </div>

              <div className="about-copy">
                <p>
                  A creative digital agency built by young minds
                  <br className="br-desktop" /> with a passion for design,
                  technology, and
                  <br className="br-desktop" /> storytelling. We bring ideas to
                  life through
                  <br className="br-desktop" /> impactful websites, visual
                  identities, videos, and
                  <br className="br-desktop" /> digital experiences.
                </p>
                <p>
                  Our goal is simple: combine creativity with technology to help
                  businesses build a stronger digital presence. We love working
                  with ambitious people, turning bold ideas into meaningful
                  work, and creating things that make an impression.
                </p>
                <p className="about-closing">
                  Let's create something remarkable together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Design focuses                                                   */}
        {/* ---------------------------------------------------------------- */}
        <section className="focuses" aria-labelledby="focus-title">
          <div className="shell">
            <h2 id="focus-title" className="section-title focuses-title">
              Design Focuses
            </h2>
            <ul className="focus-grid">
              {focuses.map((focus) => (
                <li className="focus-item" key={focus.title}>
                  <div className="focus-arch">
                    <img
                      src={focus.image}
                      alt={`${focus.title} work by VISUARK`}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="focus-name">{focus.title}</h3>
                  <p className="focus-copy">
                    Further elaborate on the
                    <br />{' '}
                    skill/offered service.
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Project gallery                                                  */}
        {/* ---------------------------------------------------------------- */}
        <section className="gallery" aria-labelledby="gallery-title">
          <div className="shell">
            <h2 id="gallery-title" className="section-title gallery-title">
              Project Gallery
            </h2>
            <p className="gallery-subtitle">
              Here are some of the projects I worked on
            </p>

            <ul className="project-grid">
              {projects.map((project) => (
                <li
                  className={`project project--row-${project.row}`}
                  key={project.brand}
                  style={{ '--ratio': project.ratio }}
                >
                  <a
                    className="project-link"
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.brand} ${project.name} (opens in a new tab)`}
                  >
                    <div className="project-media">
                      <img
                        src={project.image}
                        alt={`${project.brand} ${project.name} website`}
                        loading="lazy"
                      />
                    </div>
                    <h3 className="project-title">
                      <em>{project.brand} </em>
                      {project.name}
                    </h3>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Testimonials                                                     */}
        {/* ---------------------------------------------------------------- */}
        <section className="testimonials" aria-labelledby="testimonials-title">
          <div className="shell">
            <h2
              id="testimonials-title"
              className="section-title testimonials-title"
            >
              Client Testimonials
            </h2>

            <ul className="testimonial-grid">
              {testimonials.map((item) => (
                <li className="testimonial" key={item.client}>
                  <blockquote className="testimonial-quote">
                    <p>&ldquo;{item.quote}&rdquo;</p>
                  </blockquote>
                  <p className="testimonial-body">
                    {item.body.map((line, index) => (
                      <Fragment key={line}>
                        {index > 0 && (
                          <>
                            <br className="br-desktop" />{' '}
                          </>
                        )}
                        {line}
                      </Fragment>
                    ))}
                  </p>
                  <p className="testimonial-client">{item.client}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Contact                                                          */}
        {/* ---------------------------------------------------------------- */}
        <section className="contact" aria-labelledby="contact-title">
          <div className="shell contact-inner">
            <svg
              className="contact-art"
              viewBox="0 0 1024.5 576"
              aria-hidden="true"
              focusable="false"
            >
              <path d={decorationPath} fill="#F4F1E8" />
              <g transform={bronzeLine.transform}>
                <path
                  d={bronzeLine.d}
                  fill="none"
                  stroke="#BD8F53"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
            </svg>

            <h2 id="contact-title" className="contact-title">
              Let&rsquo;s build something meaningful
              <br />{' '}
              together. Get in touch and bring
              <br />{' '}
              your vision to life with VISUARK.
            </h2>

            <div className="socials">
              <p className="socials-label">
                To see more of my work, visit my socials:
              </p>
              <div className="socials-row">
                <div className="social-icons">
                  <SocialIcon
                    label="VISUARK on Facebook"
                    href="https://www.facebook.com/profile.php?id=61591427283023"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M13.6 21v-8.1h2.72l.4-3.16H13.6V7.72c0-.91.25-1.53 1.56-1.53h1.67V3.36c-.29-.04-1.28-.12-2.43-.12-2.4 0-4.05 1.47-4.05 4.16v2.33H7.62v3.16h2.73V21h3.25Z" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon
                    label="VISUARK on Instagram"
                    href="https://www.instagram.com/visuark.io"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <rect
                        x="3.6"
                        y="3.6"
                        width="16.8"
                        height="16.8"
                        rx="4.8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="3.9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <circle cx="17.2" cy="6.9" r="1.05" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon
                    label="VISUARK on X"
                    href="https://x.com/Visuarkofficial"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.75 3h3.2l-7 8 8.23 10h-6.44l-5.04-6.1L5.9 21H2.7l7.49-8.56L2.3 3h6.6l4.56 5.57L17.75 3Zm-1.12 16.1h1.77L7.55 4.8H5.65l10.98 14.3Z" />
                    </svg>
                  </SocialIcon>
                </div>
                <p className="socials-handle">@visuark.io</p>
              </div>
            </div>

            <div className="contact-details">
              <div className="contact-item">
                <p className="contact-label">Phone</p>
                <a className="contact-value" href="tel:+918619949455">
                  (91) 86199 49455
                </a>
              </div>
              <div className="contact-item">
                <p className="contact-label">Mobile</p>
                <a className="contact-value" href="tel:+917878539633">
                  (91) 78785 39633
                </a>
              </div>
              <div className="contact-item">
                <p className="contact-label">Email</p>
                <a
                  className="contact-value"
                  href="mailto:visuark.info@gmail.com"
                >
                  visuark.info@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App