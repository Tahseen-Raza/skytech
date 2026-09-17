import { useEffect, useState } from 'react'
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
  const [selectedProject, setSelectedProject] = useState(null)
  const [projectSlide, setProjectSlide] = useState(0)

  const closeMenu = () => setMenuOpen(false)
  const advanceProjects = () => setProjectSlide((current) => {
    const maxSlide = window.innerWidth <= 800 ? 6 : 2
    return current >= maxSlide ? 0 : current + 1
  })

  useEffect(() => {
    const sliderTimer = window.setInterval(advanceProjects, 4500)
    return () => window.clearInterval(sliderTimer)
  }, [])
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
            <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
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

        <section className="work-section" id="portfolio">
          <div className="container">
            <div className="work-heading"><div><p className="eyebrow">Portfolio / 02</p><h2>Digital work.<br /><em>Real impact.</em></h2></div><p>Big challenges call for clear thinking. A glimpse at the kind of transformation we help create.</p></div>
            <div className="project-carousel"><div className="project-grid" style={{ '--project-slide': projectSlide }}>
              <article className="project project-feature project-clickable" onClick={() => setSelectedProject('powerapp')} onKeyDown={(event) => event.key === 'Enter' && setSelectedProject('powerapp')} tabIndex="0" role="button" aria-label="Open School Fee Support Power App case study"><div className="project-visual visual-coral"><img className="project-image" src="/hero-school-fee-support.jpeg" alt="Skytech School Fee Support Power App" /><div className="project-stamp">03 / Power Apps solution <span>Click to view case study ↗</span></div></div><div className="project-info"><div className="project-title"><h3>School Fee<br />Support</h3><p>Power Apps · Welfare management</p></div><Arrow /><div className="project-detail"><p>A connected Power Apps solution for managing beneficiaries, tracking support activities, and processing bulk payments through a clear operational workspace.</p><div className="project-tags"><span>Microsoft Power Apps</span><span>Payments workflow</span><span>Data management</span></div></div></div></article>
              <article className="project project-small project-clickable chatbot-project" onClick={() => setSelectedProject('chatbot')} onKeyDown={(event) => event.key === 'Enter' && setSelectedProject('chatbot')} tabIndex="0" role="button" aria-label="Open Interview Bot case study"><div className="project-visual visual-blue"><img className="project-image" src="/chatbot-project.png" alt="Skytech Interview Bot web application" /><div className="project-stamp">02 / Chatbot web application <span>View case study ↗</span></div></div><div className="project-info"><div><h3>On-Site<br />Interview Bot</h3><p>Recruitment automation · Web application</p></div><Arrow /></div></article>
              <article className="project project-small project-dashboard project-clickable" onClick={() => setSelectedProject('dashboard')} onKeyDown={(event) => event.key === 'Enter' && setSelectedProject('dashboard')} tabIndex="0" role="button" aria-label="Open Project Dashboard case study"><div className="project-visual visual-coral"><img className="project-image" src="/project-dashboard-hero.jpeg" alt="Skytech project dashboard Power App" /><div className="project-stamp">04 / Project dashboard <span>View case study ↗</span></div></div><div className="project-info"><div><h3>Project<br />Dashboard</h3><p>Project management · Power Platform</p></div><Arrow /></div></article>
              <article className="project project-small project-clickable mobile-app-project" onClick={() => setSelectedProject('mobile')} onKeyDown={(event) => event.key === 'Enter' && setSelectedProject('mobile')} tabIndex="0" role="button" aria-label="Open mobile apps case study"><div className="project-visual visual-mobile"><div className="app-stack"><span>VISIPLATE</span><span>MEET PRO</span><span>PORTER</span><span>MEMORITE</span></div><div className="project-stamp">05 / Mobile products <span>View case study ↗</span></div></div><div className="project-info"><div><h3>Mobile<br />Products</h3><p>iOS & Android · SaaS apps</p></div><Arrow /></div></article>
              <article className="project project-small project-clickable meetpro-project" onClick={() => setSelectedProject('meetproAndroid')} onKeyDown={(event) => event.key === 'Enter' && setSelectedProject('meetproAndroid')} tabIndex="0" role="button" aria-label="Open Meet Pro Android case study"><div className="project-visual visual-mobile"><img className="project-image" src="/meetpro-android-home.webp" alt="Meet Pro Android application home screen" /><div className="project-stamp">01 / Meet Pro Android app <span>View case study ↗</span></div></div><div className="project-info"><div><h3>Meet<br />Pro</h3><p>Android · SaaS scheduler</p></div><Arrow /></div></article>
              <article className="project project-small project-clickable ticketing-project" onClick={() => setSelectedProject('ticketing')} onKeyDown={(event) => event.key === 'Enter' && setSelectedProject('ticketing')} tabIndex="0" role="button" aria-label="Open ticketing Power App case study"><div className="project-visual visual-coral"><img className="project-image" src="/ticketing-dashboard.jpeg" alt="Ticketing and service desk Power App dashboard" /><div className="project-stamp">06 / Ticketing Power App <span>View case study ↗</span></div></div><div className="project-info"><div><h3>Service<br />Desk</h3><p>Power Apps · Ticket management</p></div><Arrow /></div></article>
              <article className="project project-small project-clickable porter-project" onClick={() => setSelectedProject('porter')} onKeyDown={(event) => event.key === 'Enter' && setSelectedProject('porter')} tabIndex="0" role="button" aria-label="Open Porter Pakistan case study"><div className="project-visual visual-mobile"><img className="project-image" src="/porter-trip-designer.webp" alt="Porter Pakistan Android trip designer" /><div className="project-stamp">07 / Porter Pakistan Android app <span>View case study ↗</span></div></div><div className="project-info"><div><h3>Porter<br />Pakistan</h3><p>Android · Travel booking</p></div><Arrow /></div></article>
            </div><div className="carousel-controls"><button type="button" onClick={() => setProjectSlide(0)} aria-label="Show first projects" className={projectSlide === 0 ? 'is-active' : ''}>01</button><button type="button" onClick={() => setProjectSlide(1)} aria-label="Show second projects" className={projectSlide === 1 ? 'is-active' : ''}>02</button><button type="button" onClick={() => setProjectSlide(2)} aria-label="Show final projects" className={projectSlide === 2 ? 'is-active' : ''}>03</button><span></span><button type="button" onClick={advanceProjects} className="carousel-next" aria-label="Next projects">Next <Arrow /></button></div></div>
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
      {selectedProject === 'powerapp' && <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="powerapp-modal-title" onClick={() => setSelectedProject(null)}><div className="modal-card" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close case study">×</button><div className="modal-gallery"><img src="/hero-school-fee-support.jpeg" alt="School Fee Support beneficiaries screen" /><img src="/powerapp-beneficiaries.jpeg" alt="School Fee Support beneficiary list" /><img src="/powerapp-payment-empty.jpeg" alt="School Fee Support payment form" /><img src="/powerapp-payment-filled.jpeg" alt="School Fee Support payment form with transaction" /><img src="/powerapp-bulk-payments.jpeg" alt="School Fee Support bulk payments screen" /></div><div className="modal-content"><p className="eyebrow">Case study / 01</p><h2 id="powerapp-modal-title">School Fee<br /><em>Support</em></h2><p className="modal-lead">A Power Apps operations hub that helps welfare teams manage beneficiaries and deliver school fee support with confidence.</p><div className="modal-facts"><div><span>Type</span><b>Microsoft Power Apps</b></div><div><span>Focus</span><b>Welfare management</b></div><div><span>Workflow</span><b>Beneficiaries & payments</b></div></div><p className="modal-description">The solution brings beneficiary records, search, support activities, payment dates, transaction IDs, and bulk payment actions into one connected workspace. Each screen is designed to keep daily operations fast, traceable, and easy for teams to use.</p><div className="project-tags modal-tags"><span>Power Apps</span><span>Data operations</span><span>Payment workflow</span><span>Responsive UI</span></div><a className="button button-light" href="#contact" onClick={() => setSelectedProject(null)}>Discuss a similar project <Arrow /></a></div></div></div>}
      {selectedProject === 'chatbot' && <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="chatbot-modal-title" onClick={() => setSelectedProject(null)}><div className="modal-card" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close case study">×</button><div className="modal-gallery modal-gallery-chatbot"><img src="/chatbot-project.png" alt="Interview Bot opening questions" /><img src="/chatbot-project-2.png" alt="Interview Bot completion message" /></div><div className="modal-content"><p className="eyebrow">Case study / 02</p><h2 id="chatbot-modal-title">On-Site<br /><em>Interview Bot</em></h2><p className="modal-lead">A guided recruitment experience built to make candidate screening faster, clearer, and more human.</p><div className="modal-facts"><div><span>Type</span><b>Web application</b></div><div><span>Focus</span><b>Recruitment automation</b></div><div><span>Experience</span><b>Conversational UI</b></div></div><p className="modal-description">The chatbot walks applicants through a structured interview, captures contact information and role-specific answers, then confirms the next step with a clear completion message. The responsive interface keeps the flow simple on every screen size.</p><div className="project-tags modal-tags"><span>Conversational UI</span><span>Form automation</span><span>Responsive web</span></div><a className="button button-light" href="#contact" onClick={() => setSelectedProject(null)}>Discuss a similar project <Arrow /></a></div></div></div>}
      {selectedProject === 'dashboard' && <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="dashboard-modal-title" onClick={() => setSelectedProject(null)}><div className="modal-card" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close case study">×</button><div className="modal-gallery"><img src="/project-dashboard-hero.jpeg" alt="Project Dashboard overview" /><img src="/dashboard-all-tasks.jpeg" alt="All Tasks workspace" /><img src="/dashboard-new-task.jpeg" alt="New Task form" /><img src="/dashboard-new-user.jpeg" alt="New User form" /><img src="/dashboard-project-testing.jpeg" alt="Project testing form" /><img src="/dashboard-attachment.jpeg" alt="Project attachment form" /></div><div className="modal-content"><p className="eyebrow">Case study / 03</p><h2 id="dashboard-modal-title">Project<br /><em>Dashboard</em></h2><p className="modal-lead">A focused project operations workspace for teams to plan work, manage users, and keep delivery moving.</p><div className="modal-facts"><div><span>Type</span><b>Power Platform app</b></div><div><span>Focus</span><b>Project management</b></div><div><span>Workflow</span><b>Tasks, users & reports</b></div></div><p className="modal-description">The dashboard gives teams a quick view of active projects, task status, deadlines, completion rates, users, attachments, and reports. Dedicated forms make creating tasks, projects, and team members straightforward and traceable.</p><div className="project-tags modal-tags"><span>Project tracking</span><span>Task management</span><span>Team workspace</span><span>Reports</span></div><a className="button button-light" href="#contact" onClick={() => setSelectedProject(null)}>Discuss a similar project <Arrow /></a></div></div></div>}
      {selectedProject === 'mobile' && <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="mobile-modal-title" onClick={() => setSelectedProject(null)}><div className="modal-card" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close case study">×</button><div className="mobile-modal-art"><div className="app-stack app-stack-large"><span>VISIPLATE</span><span>MEET PRO</span><span>PORTER</span><span>MEMORITE</span></div></div><div className="modal-content"><p className="eyebrow">Case study / 04</p><h2 id="mobile-modal-title">Mobile<br /><em>Products</em></h2><p className="modal-lead">Four mobile products improved through thoughtful UX, reliable APIs, and smoother user journeys.</p><div className="mobile-app-list"><article><div><h3>VisiPlate</h3><p>Offline-first product experience with geofencing, accessibility-focused UI, SQLite caching, and store-ready delivery.</p></div><span className="app-status">Product build</span></article><article><div><h3>Meet Pro</h3><p>Improved subscription flows, onboarding, and automation for a smoother SaaS scheduling experience.</p></div><div className="app-links"><a href="https://apps.apple.com/gw/app/meetpro-1-1-scheduler/id6599856699" target="_blank" rel="noreferrer">iOS ↗</a><a href="https://play.google.com/store/apps/details?id=com.hexcore.meetingapp" target="_blank" rel="noreferrer">Android ↗</a></div></article><article><div><h3>Porter Pakistan</h3><p>Optimized APIs and backend workflows to improve reliability, performance, and scalability.</p></div><div className="app-links"><a href="https://apps.apple.com/us/app/porter-pakistan/id1661225211" target="_blank" rel="noreferrer">iOS ↗</a><a href="https://play.google.com/store/apps/details?id=com.application.porterpakistan" target="_blank" rel="noreferrer">Android ↗</a></div></article><article><div><h3>Memorite</h3><p>Enhanced account management, subscription handling, and overall application performance.</p></div><div className="app-links"><a href="https://apps.apple.com/pk/app/memorite/id6743395164" target="_blank" rel="noreferrer">iOS ↗</a><a href="https://play.google.com/store/apps/details?id=com.mem.memorii&hl=en" target="_blank" rel="noreferrer">Android ↗</a></div></article></div><a className="button button-light" href="#contact" onClick={() => setSelectedProject(null)}>Discuss your app project <Arrow /></a></div></div></div>}
      {selectedProject === 'meetpro' && <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="meetpro-modal-title" onClick={() => setSelectedProject(null)}><div className="modal-card" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close case study">×</button><div className="modal-gallery modal-gallery-chatbot"><img src="/meetpro-companies.webp" alt="Meet Pro companies screen" /><img src="/meetpro-account.webp" alt="Meet Pro account screen" /><img src="/meetpro-company-details.webp" alt="Meet Pro company details screen" /></div><div className="modal-content"><p className="eyebrow">Case study / 05</p><h2 id="meetpro-modal-title">Meet<br /><em>Pro</em></h2><p className="modal-lead">A smoother SaaS scheduling experience for meetings, companies, schedules, and team communication.</p><div className="modal-facts"><div><span>Type</span><b>iOS & Android app</b></div><div><span>Focus</span><b>SaaS scheduling</b></div><div><span>Improved</span><b>Onboarding & subscriptions</b></div></div><p className="modal-description">Meet Pro brings company discovery, meeting schedules, chat, account management, and detailed company profiles into one focused mobile experience. We improved subscription flows, user onboarding, and automation to reduce friction across the product journey.</p><div className="project-tags modal-tags"><span>Mobile UX</span><span>SaaS flows</span><span>Automation</span></div><div className="app-links modal-app-links"><a href="https://apps.apple.com/gw/app/meetpro-1-1-scheduler/id6599856699" target="_blank" rel="noreferrer">View on iOS ↗</a><a href="https://play.google.com/store/apps/details?id=com.hexcore.meetingapp" target="_blank" rel="noreferrer">View on Android ↗</a></div></div></div></div>}
      {selectedProject === 'ticketing' && <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="ticketing-modal-title" onClick={() => setSelectedProject(null)}><div className="modal-card" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close case study">×</button><div className="modal-gallery"><img src="/ticketing-dashboard.jpeg" alt="Ticketing dashboard" /><img src="/ticketing-list-progress.jpeg" alt="Ticket list in progress" /><img src="/ticketing-list-new.jpeg" alt="New ticket list" /><img src="/ticketing-comment.jpeg" alt="Add ticket comment" /><img src="/ticketing-assign.jpeg" alt="Assign ticket dialog" /><img src="/ticketing-users.jpeg" alt="User management screen" /><img src="/ticketing-add-user.jpeg" alt="Add new user screen" /><img src="/ticketing-success.jpeg" alt="Ticket creation success screen" /></div><div className="modal-content"><p className="eyebrow">Case study / 06</p><h2 id="ticketing-modal-title">Service<br /><em>Desk</em></h2><p className="modal-lead">A Power Apps service desk for managing tickets, assignments, users, departments, and support workflows.</p><div className="modal-facts"><div><span>Type</span><b>Power Platform app</b></div><div><span>Focus</span><b>Ticket management</b></div><div><span>Workflow</span><b>Support operations</b></div></div><p className="modal-description">The service desk brings ticket queues, search, status tracking, comments, assignment, user management, departments, and confirmation flows into one operational workspace. It gives support teams a clearer way to move requests from creation to resolution.</p><div className="project-tags modal-tags"><span>Ticket workflow</span><span>Power Apps</span><span>Team assignment</span><span>Support dashboard</span></div><a className="button button-light" href="#contact" onClick={() => setSelectedProject(null)}>Discuss a similar project <Arrow /></a></div></div></div>}
      {selectedProject === 'meetproAndroid' && <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="meetpro-android-title" onClick={() => setSelectedProject(null)}><div className="modal-card" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close case study">×</button><div className="modal-gallery modal-gallery-chatbot"><img src="/meetpro-android-home.webp" alt="Meet Pro Android home screen" /><img src="/meetpro-android-book.webp" alt="Meet Pro Android booking screen" /><img src="/meetpro-android-confirm.webp" alt="Meet Pro Android confirmation screen" /><img src="/meetpro-android-delegates.webp" alt="Meet Pro Android delegates screen" /><img src="/meetpro-android-schedule.webp" alt="Meet Pro Android schedule screen" /><img src="/meetpro-android-home-wide.webp" alt="Meet Pro Android dashboard" /></div><div className="modal-content"><p className="eyebrow">Case study / 01</p><h2 id="meetpro-android-title">Meet<br /><em>Pro Android</em></h2><p className="modal-lead">A smoother Android SaaS scheduling experience for meetings, companies, schedules, and team communication.</p><div className="modal-facts"><div><span>Type</span><b>Android application</b></div><div><span>Focus</span><b>SaaS scheduling</b></div><div><span>Improved</span><b>Onboarding & automation</b></div></div><p className="modal-description">Meet Pro brings company discovery, meeting booking, schedules, chat, and account management into one focused mobile experience. The Android flow makes it easy to find delegates, choose an available slot, confirm a booking, and manage upcoming meetings.</p><div className="project-tags modal-tags"><span>Android UX</span><span>Meeting booking</span><span>Schedule management</span></div><div className="app-links modal-app-links"><a href="https://play.google.com/store/apps/details?id=com.hexcore.meetingapp" target="_blank" rel="noreferrer">View on Google Play ↗</a></div></div></div></div>}
      {selectedProject === 'porter' && <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="porter-modal-title" onClick={() => setSelectedProject(null)}><div className="modal-card" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close case study">×</button><div className="modal-gallery modal-gallery-chatbot"><img src="/porter-trip-designer.webp" alt="Porter Pakistan trip designer" /><img src="/porter-itinerary.webp" alt="Porter Pakistan itinerary" /><img src="/porter-resort.webp" alt="Porter Pakistan resort details" /><img src="/porter-beach-huts.webp" alt="Porter Pakistan beach huts listing" /><img src="/porter-hotel.webp" alt="Porter Pakistan hotel details" /><img src="/porter-reviews.webp" alt="Porter Pakistan customer reviews" /></div><div className="modal-content"><p className="eyebrow">Case study / 07</p><h2 id="porter-modal-title">Porter<br /><em>Pakistan</em></h2><p className="modal-lead">A travel booking experience for discovering destinations, planning trips, reserving stays, and sharing real customer experiences.</p><div className="modal-facts"><div><span>Type</span><b>Android application</b></div><div><span>Focus</span><b>Travel booking</b></div><div><span>Improved</span><b>APIs & backend workflows</b></div></div><p className="modal-description">Porter Pakistan brings trip design, itineraries, resort and hotel discovery, booking actions, and customer reviews into one mobile journey. We optimized APIs and backend workflows to improve reliability, performance, and scalability across the experience.</p><div className="project-tags modal-tags"><span>Android UX</span><span>Trip planning</span><span>Travel marketplace</span></div><div className="app-links modal-app-links"><a href="https://apps.apple.com/us/app/porter-pakistan/id1661225211" target="_blank" rel="noreferrer">View on iOS ↗</a><a href="https://play.google.com/store/apps/details?id=com.application.porterpakistan" target="_blank" rel="noreferrer">View on Android ↗</a></div></div></div></div>}
      <footer className="footer"><div className="container footer-inner"><a className="brand" href="#top"><span className="brand-mark"><i></i><i></i><i></i></span><span>sky<span>tech</span></span></a><p>Digital products for what&apos;s next.</p><span>© 2026 Skytech</span></div></footer>
    </div>
  )
}

export default App

createRoot(document.getElementById('root')).render(<App />)
