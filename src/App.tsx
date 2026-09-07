import { useEffect, useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Download,
  Globe2,
  GraduationCap,
  Link,
  Mail,
  Menu,
  Network,
  Quote,
  Sparkles,
  X,
} from 'lucide-react'

const resumeFile = '/Sandra_RS_Resume.docx'

const skills = [
  { label: 'Python', group: 'Programming' },
  { label: 'Java', group: 'Programming' },
  { label: 'C', group: 'Programming' },
  { label: 'SQL', group: 'Data' },
  { label: 'HTML', group: 'Web' },
  { label: 'WebRTC', group: 'Web' },
  { label: 'Computer Vision', group: 'AI / ML' },
  { label: 'Object Detection', group: 'AI / ML' },
  { label: 'Real-Time Inference', group: 'AI / ML' },
  { label: 'Computer Networks', group: 'Core CS' },
  { label: 'Operating Systems', group: 'Core CS' },
  { label: 'DBMS', group: 'Core CS' },
  { label: 'Compiler Design', group: 'Core CS' },
]

const leadership = [
  {
    period: '2024 - 2025',
    role: 'Chair',
    place: 'IEEE Women in Engineering Affinity Group',
    context: 'IEEE Student Branch, College of Engineering Karunagappally',
    details: 'Led 10+ technical, professional development, and community events. Coordinated executive members, faculty advisors, external speakers, and volunteers while managing outreach, publicity, and documentation.',
  },
  {
    period: '2024 - 2025',
    role: 'Joint Secretary',
    place: 'IEEE Student Branch',
    context: 'College of Engineering Karunagappally',
    details: 'Coordinated volunteers across IEEE technical societies and supported branch-wide events, membership engagement, and documentation.',
  },
  {
    period: '2023 - 2024',
    role: 'Secretary',
    place: 'IEEE Women in Engineering Affinity Group',
    context: 'IEEE Student Branch, College of Engineering Karunagappally',
    details: 'Maintained organizational records and coordinated communication across volunteers, executive members, and event participants.',
  },
]

const events = [
  'Women\'s Day Technical Competitions',
  'Prompt Palette',
  'Cybersecurity Awareness Sessions',
  'From Campus to Career',
  'AI & Signal Processing Events',
  'AITHON 2.0 & 3.0',
  'AIROB',
  'Luxathon 4.0 & 5.0',
  'IEEE Xtreme 19.0',
]

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Sandra RS home" onClick={closeMenu}>
          <span className="wordmark-mark">S</span>
          <span>Sandra <b>RS</b></span>
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          {['About', 'Skills', 'Education', 'Experience', 'Projects', 'Contact'].map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-resume" href={resumeFile} download>
            <Download size={15} /> Resume
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="availability reveal"><span className="pulse-dot" /> Open to exciting career opportunities</div>
              <p className="hero-kicker reveal">Computer Science undergraduate / AI & technical leadership</p>
              <h1 className="reveal">Building useful<br /><em>intelligence.</em></h1>
              <p className="hero-intro reveal">I am Sandra R. S., a Computer Science undergraduate creating AI-powered computer vision applications and leading communities that make technology more accessible.</p>
              <div className="hero-actions reveal">
                <a className="button button-dark" href="#projects">View my work <ArrowDownRight size={17} /></a>
                <a className="button button-line" href={resumeFile} download>Download resume <Download size={16} /></a>
              </div>
              <div className="social-row reveal">
                <a href="mailto:sandrars0606@gmail.com" aria-label="Email Sandra"><Mail size={18} /></a>
                <span className="social-note">Based in Kerala, India</span>
              </div>
            </div>
            <div className="hero-visual reveal" aria-label="Sandra's focus areas">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="visual-core"><Code2 size={46} strokeWidth={1.4} /></div>
              <div className="float-tag tag-top"><Sparkles size={15} /> AI / ML</div>
              <div className="float-tag tag-right"><Network size={15} /> Real-time systems</div>
              <div className="float-tag tag-bottom"><Globe2 size={15} /> Digital inclusion</div>
              <div className="visual-caption"><span>01</span><span>Curious by nature.<br />Precise by practice.</span></div>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ChevronDown size={17} /></a>
        </section>

        <section className="section about-section" id="about">
          <div className="about-layout">
            <SectionHeading eyebrow="01 / About" title="Technology with a human edge." />
            <div className="about-content reveal">
              <p className="lead-copy">I am studying Computer Science and Engineering at the College of Engineering Karunagappally, where I explore the space between intelligent systems and real-world usefulness.</p>
              <p>My work so far has centered on computer vision, object detection, real-time inference, and the practical details that turn an idea into something people can use. Alongside building, I have led IEEE communities, coordinated cross-functional teams, and helped deliver digital literacy programs.</p>
              <div className="about-facts">
                <div><strong>6.57</strong><span>CGPA / 10</span></div>
                <div><strong>10+</strong><span>Events led</span></div>
                <div><strong>50+</strong><span>Participants reached</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <SectionHeading eyebrow="02 / Capabilities" title="A toolkit for thoughtful building." intro="Technical foundations, applied AI, and the coordination skills that keep ambitious work moving." />
          <div className="skills-layout reveal">
            {['Programming', 'AI / ML', 'Web', 'Core CS', 'Data'].map((group) => (
              <div className="skill-group" key={group}>
                <h3>{group}</h3>
                <div className="skill-list">{skills.filter((skill) => skill.group === group).map((skill) => <span key={skill.label}>{skill.label}</span>)}</div>
              </div>
            ))}
            <div className="skill-group skill-group-wide">
              <h3>Professional practice</h3>
              <div className="skill-list"><span>Technical Leadership</span><span>Event Management</span><span>Team Coordination</span><span>Project Management</span><span>Public Speaking</span><span>Technical Documentation</span></div>
            </div>
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="education-card reveal">
            <div className="education-icon"><GraduationCap size={30} /></div>
            <div className="education-main"><span className="eyebrow">03 / Education</span><h2>B.Tech. in Computer Science and Engineering</h2><p>College of Engineering Karunagappally<br />Kerala, India</p></div>
            <div className="education-meta"><span>Expected May 2027</span><strong>6.57 <small>/ 10 CGPA</small></strong></div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <SectionHeading eyebrow="04 / Experience" title="Leading from the front." intro="A record of building communities, coordinating people, and making technical programs happen." />
          <div className="timeline reveal">
            {leadership.map((item, index) => <article className="timeline-item" key={item.role}><div className="timeline-marker">0{index + 1}</div><div className="timeline-date">{item.period}</div><div className="timeline-copy"><h3>{item.role}</h3><h4>{item.place}</h4><p className="muted">{item.context}</p><p>{item.details}</p></div></article>)}
          </div>
          <div className="community-block reveal"><div><span className="eyebrow">Community initiative / August 2025</span><h3>WIECTORY — Digital Literacy Program</h3></div><p>Conceptualized and led a program that trained 50+ Kudumbashree women on government digital services including DigiLocker, KSMART, Revenue e-Services, Ente KSRTC, and eHealth.</p><ArrowUpRight size={20} /></div>
        </section>

        <section className="section project-section" id="projects">
          <SectionHeading eyebrow="05 / Selected work" title="One project. Built with purpose." intro="A browser-based assistive system that brings real-time computer vision closer to everyday life." />
          <article className="project-feature reveal">
            <div className="project-number">01</div>
            <div className="project-body"><div className="project-label"><BriefcaseBusiness size={15} /> Flagship project</div><h3>AdMySense</h3><h4>AI-powered assistive object detection system for the visually impaired</h4><p>Engineered a browser-based AI application delivering real-time object detection and directional voice guidance to help visually impaired users navigate their environment.</p><p>Implemented low-latency video streaming with WebRTC for real-time in-browser inference without dedicated hardware, and designed distance estimation and spatial directional assistance features.</p><div className="project-tags"><span>Python</span><span>Computer Vision</span><span>Object Detection</span><span>WebRTC</span><span>HTML</span></div></div>
            <div className="project-aside"><div className="project-aside-icon"><Code2 size={34} /></div><span>System architecture<br />Integration testing<br />Technical documentation</span></div>
          </article>
        </section>

        <section className="section activities-section">
          <div className="activities-layout"><SectionHeading eyebrow="06 / Beyond the build" title="Making room for others to grow." /><div className="activities-content reveal"><p>Alongside leadership roles, I have contributed to technical workshops, outreach campaigns, membership programs, and society collaboration events.</p><div className="event-cloud">{events.map((event) => <span key={event}><Check size={13} /> {event}</span>)}</div></div></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner reveal"><div><span className="eyebrow">07 / Contact</span><h2>Let’s build something<br /><em>meaningful.</em></h2><p>For internship opportunities, technical collaborations, or a thoughtful conversation about building with AI.</p></div><div className="contact-links"><a href="mailto:sandrars0606@gmail.com"><span><Mail size={18} /> Email me</span><ArrowUpRight size={19} /></a><div className="contact-note"><Link size={18} /><span>LinkedIn available on request</span></div></div></div>
        </section>
      </main>

      <footer className="footer"><span>© 2026 Sandra R. S.</span><span>English / Malayalam</span><a href="#home">Back to top <ArrowUpRight size={15} /></a></footer>
    </div>
  )
}

export default App
