import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const services = [
  { number: '01', title: 'Web applications', text: 'Fast, intelligent platforms that turn complex workflows into clear digital experiences.', icon: '↗' },
  { number: '02', title: 'Mobile experiences', text: 'Native-quality Android and cross-platform products people actually enjoy using.', icon: '⌁' },
  { number: '03', title: 'Power Platform', text: 'Connected Power Apps, automations, and dashboards that move your business forward.', icon: '◫' },
  { number: '04', title: 'Product engineering', text: 'From the first sketch to a system that scales, we make ambitious ideas real.', icon: '✦' },
]

const process = [
  ['01', 'Discover', 'We find the signal in the noise.'],
  ['02', 'Design', 'We make the complex feel effortless.'],
  ['03', 'Build', 'We ship clean, resilient technology.'],
  ['04', 'Evolve', 'We stay in it for the long run.'],
]

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const closeMenu = () => setMenuOpen(false)
  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    const form = new FormData(event.currentTarget)
    const payload = Object.fromEntries(form.entries())
    payload._subject = 'New Skytech project inquiry'
    payload._template = 'table'
    payload._captcha = 'false'

    try {
      const response = await fetch('https://formsubmit.co/ajax/tahseenraza812@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!response.ok) throw new Error('Unable to send inquiry')
      setSubmitted(true)
      event.currentTarget.reset()
    } catch {
      setSubmitError('Message send nahi ho saka. Please dobara try karein.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Skytech home">
            <span className="brand-mark"><i></i><i></i><i></i></span>
            <span>sky<span>tech</span></span>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            <span></span><span></span>
          </button>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <a href="#services" onClick={closeMenu}>What we do</a>
            <a href="#work" onClick={closeMenu}>Selected work</a>
            <a href="#approach" onClick={closeMenu}>Our approach</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Start a project <Arrow /></a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot"></span> Independent digital studio <span className="eyebrow-line"></span> Est. 2012</p>
            <h1>Build what<br /><em>matters.</em></h1>
            <p className="hero-intro">Skytech turns bold business ideas into software people love to use. Web, mobile, and Power Platform solutions, built to move you forward.</p>
            <a className="button button-primary" href="#contact">Let&apos;s work together <Arrow /></a>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-orbit orbit-one"></div>
            <div className="art-orbit orbit-two"></div>
            <div className="art-orbit orbit-three"></div>
            <div className="art-core"><span>ST</span></div>
            <div className="art-label label-top">Strategy <b>+</b> technology</div>
            <div className="art-label label-bottom">Ideas in motion <b>↗</b></div>
          </div>
        </section>

        <section className="proof-bar">
          <div className="container proof-grid">
            <div><strong>1,000<span>+</span></strong><small>Projects delivered</small></div>
            <div><strong>250<span>+</span></strong><small>Clients worldwide</small></div>
            <div><strong>12<span>+</span></strong><small>Years of making</small></div>
            <p>Technology should feel<br /><b>human.</b></p>
          </div>
        </section>

        <section className="section container" id="services">
          <div className="section-heading"><p className="eyebrow">Capabilities / 01</p><h2>Many disciplines.<br /><em>One sharp focus.</em></h2><p className="heading-note">The best digital products sit at the intersection of business ambition and human need. That&apos;s where we work.</p></div>
          <div className="service-grid">
            {services.map((service) => <article className="service-card" key={service.number}><div className="card-top"><span>{service.number}</span><span className="service-icon">{service.icon}</span></div><h3>{service.title}</h3><p>{service.text}</p><a href="#contact" aria-label={`Learn about ${service.title}`}>Explore <Arrow /></a></article>)}
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="container">
            <div className="work-heading"><div><p className="eyebrow">Selected work / 02</p><h2>Made for the<br /><em>real world.</em></h2></div><p>Big challenges call for clear thinking. A glimpse at the kind of transformation we help create.</p></div>
            <div className="project-grid">
              <article className="project project-large"><div className="project-visual visual-coral"><div className="visual-window"><div className="window-bar"><i></i><i></i><i></i></div><div className="dashboard"><span></span><b></b><i></i></div></div><div className="project-stamp">01 / Digital ecosystem</div></div><div className="project-info"><div><h3>Moving enterprise<br />forward</h3><p>Product strategy · Web application</p></div><Arrow /></div></article>
              <article className="project project-small"><div className="project-visual visual-blue"><div className="blue-orb"></div><div className="project-stamp">02 / Connected teams</div></div><div className="project-info"><div><h3>Simple tools.<br />Serious impact.</h3><p>Power Platform · Automation</p></div><Arrow /></div></article>
            </div>
            <div className="client-row">
              <p>Trusted to deliver<br /><strong>for teams at</strong></p>
              <div className="client-logo toyota-logo" aria-label="Toyota"><img src="https://cdn.simpleicons.org/toyota/34363b" alt="Toyota logo" /><b>TOYOTA</b></div>
              <div className="client-logo mitsubishi-logo" aria-label="Mitsubishi"><img src="https://cdn.simpleicons.org/mitsubishi/34363b" alt="Mitsubishi logo" /><b>MITSUBISHI<br /><small>MOTORS</small></b></div>
              <div className="client-logo american-logo" aria-label="American brand"><span className="american-mark"><i></i><i></i><i></i><i></i><i></i><i></i></span><b>AMERICAN<br /><small>BRAND</small></b></div>
            </div>
          </div>
        </section>

        <section className="section approach container" id="approach">
          <div className="approach-intro"><p className="eyebrow">The Skytech way / 03</p><h2>Less noise.<br /><em>More momentum.</em></h2><p>Good work starts with listening. Then it gets better through clarity, craft, and a team that cares about the outcome as much as the output.</p></div>
          <div className="process-list">{process.map(([num, title, text]) => <div className="process-item" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p><Arrow /></div>)}</div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-layout"><div><p className="eyebrow">Have a challenge? / 04</p><h2>Let&apos;s make<br /><em>it happen.</em></h2><p className="contact-copy">Tell us a little about what you&apos;re building. We&apos;ll get back to you with thoughtful questions and a clear next step.</p></div><form className="contact-form" onSubmit={handleSubmit}>{submitted ? <div className="success-message"><span>✦</span><h3>Message received.</h3><p>Thanks for reaching out. The Skytech team will be in touch soon.</p></div> : <><label>Name<input required name="name" type="text" placeholder="Your name" /></label><label>Work email<input required name="email" type="email" placeholder="you@company.com" /></label><label>Tell us about your project<textarea required name="message" placeholder="A few words about what you need..." rows="3"></textarea></label>{submitError && <p className="form-error" role="alert">{submitError}</p>}<button className="button button-light" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send inquiry'} {!isSubmitting && <Arrow />}</button></>}</form></div>
        </section>
      </main>
      <footer className="footer"><div className="container footer-inner"><a className="brand" href="#top"><span className="brand-mark"><i></i><i></i><i></i></span><span>sky<span>tech</span></span></a><p>Digital products for what&apos;s next.</p><span>© 2026 Skytech</span></div></footer>
    </div>
  )
}

export default App

createRoot(document.getElementById('root')).render(<App />)
