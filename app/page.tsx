const projects = [
  {
    number: "01",
    name: "CloneTube",
    type: "Video platform interface",
    description: "A YouTube-inspired video browsing experience built as a front-end practice project.",
  },
  {
    number: "02",
    name: "Clone.html",
    type: "HTML and CSS practice",
    description: "An early web project where I practiced structuring a page and adding a simple interaction.",
  },
  {
    number: "03",
    name: "Shiyee Tea Site",
    type: "Brand and product website",
    description: "A simple website concept for a tea brand, designed to present its products and identity.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap" aria-label="Main navigation">
        <a className="wordmark" href="#home">HH<span>.</span></a>
        <div className="nav-links"><a href="#about">About</a><a href="#work">Work</a><a href="#contact">Contact</a></div>
      </nav>
      <section className="hero wrap" id="home">
        <p className="eyebrow"><span className="dot" /> ASPIRING SOFTWARE ENGINEER</p>
        <h1>Hi, I’m <em>Hakeem.</em><br />I’m learning to build<br className="desktop" /> for the web.</h1>
        <p className="intro">I’m Hakeem Hafiz Hassan, an aspiring software engineer and web developer from Abuja, Nigeria. I’m interested in sports and creating useful things for the web.</p>
        <div className="hero-actions"><a className="button" href="#work">See my work <span aria-hidden="true">↘</span></a><a className="text-link" href="mailto:hakeembibinga@gmail.com">Say hello <span aria-hidden="true">↗</span></a></div>
        <div className="hero-note"><span>BASED IN</span><span>Abuja, Nigeria</span><span className="note-line"/><span>ALWAYS LEARNING</span></div>
      </section>
      <section className="about wrap" id="about">
        <p className="section-label">A LITTLE ABOUT ME</p>
        <div><h2>Curious about sport.<br /><em>Focused on the web.</em></h2><p className="body-copy">I’m building my front-end skills and working towards a career in software engineering. Outside of coding, I enjoy sports and playing games, and my faith is an important part of my life.</p><div className="chips"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>Sports</span></div></div>
      </section>
      <section className="work wrap" id="work">
        <div className="section-heading"><div><p className="section-label">SELECTED WORK</p><h2>Things I’ve made<span>.</span></h2></div><p className="section-aside">A few projects I’ve worked on.</p></div>
        <div className="projects">{projects.map((project) => <article className="project" key={project.number}><span className="project-number">{project.number}</span><div className="project-main"><p className="project-type">{project.type}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p></div><a className="project-arrow" href="#contact" aria-label={`Ask me about ${project.name}`}>↗</a></article>)}</div>
      </section>
      <section className="contact wrap" id="contact"><p className="section-label">HAVE A PROJECT IN MIND?</p><h2>Let’s make something<br /><em>good together.</em></h2><a className="button" href="mailto:hakeembibinga@gmail.com">hakeembibinga@gmail.com <span aria-hidden="true">↗</span></a></section>
      <footer className="footer wrap"><span>© 2026 Hakeem Hafiz Hassan</span><span>Made with care <span className="footer-heart">♥</span></span><div><a href="https://github.com/Hakeem216" target="_blank" rel="noreferrer">GitHub ↗</a></div></footer>
    </main>
  );
}
