const projects = [
  { number: "01", name: "A project you’re proud of", type: "Add a short project type", description: "In one or two sentences, share the problem you worked on and what you made." },
  { number: "02", name: "Another good piece of work", type: "Add a short project type", description: "Describe your role, the tools you used, or what you learned along the way." },
  { number: "03", name: "Something you’re learning", type: "Add a short project type", description: "A class project, personal experiment, or idea you’d like to bring to life." },
];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap" aria-label="Main navigation">
        <a className="wordmark" href="#home">YN<span>.</span></a>
        <div className="nav-links"><a href="#about">About</a><a href="#work">Work</a><a href="#contact">Contact</a></div>
      </nav>
      <section className="hero wrap" id="home">
        <p className="eyebrow"><span className="dot" /> OPEN TO OPPORTUNITIES</p>
        <h1>Hi, I’m <em>Your Name.</em><br />I make thoughtful things<br className="desktop" /> for the web.</h1>
        <p className="intro">I’m a [your role or area of study] who enjoys turning ideas into clear, useful experiences. Welcome to my little corner of the internet.</p>
        <div className="hero-actions"><a className="button" href="#work">See my work <span aria-hidden="true">↘</span></a><a className="text-link" href="mailto:hello@example.com">Say hello <span aria-hidden="true">↗</span></a></div>
        <div className="hero-note"><span>BASED IN</span><span>Your City, Country</span><span className="note-line"/><span>AVAILABLE FOR WHAT’S NEXT</span></div>
      </section>
      <section className="about wrap" id="about">
        <p className="section-label">A LITTLE ABOUT ME</p>
        <div><h2>Curious by nature.<br /><em>Thoughtful by design.</em></h2><p className="body-copy">I care about making work that feels simple, useful, and human. I’m currently focused on [your interests or skills], and always up for learning something new. Outside of work, you’ll find me [a hobby or fun detail].</p><div className="chips"><span>[Skill or tool]</span><span>[Skill or tool]</span><span>[Skill or tool]</span><span>[An interest]</span></div></div>
      </section>
      <section className="work wrap" id="work">
        <div className="section-heading"><div><p className="section-label">SELECTED WORK</p><h2>Things I’ve made<span>.</span></h2></div><p className="section-aside">A few projects that tell my story.</p></div>
        <div className="projects">{projects.map((project) => <article className="project" key={project.number}><span className="project-number">{project.number}</span><div className="project-main"><p className="project-type">{project.type}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p></div><a className="project-arrow" href="#contact" aria-label={`Ask me about ${project.name}`}>↗</a></article>)}</div>
      </section>
      <section className="contact wrap" id="contact"><p className="section-label">HAVE A PROJECT IN MIND?</p><h2>Let’s make something<br /><em>good together.</em></h2><a className="button" href="mailto:hello@example.com">hello@example.com <span aria-hidden="true">↗</span></a></section>
      <footer className="footer wrap"><span>© 2026 Your Name</span><span>Made with care <span className="footer-heart">♥</span></span><div><a href="https://www.linkedin.com/">LinkedIn ↗</a><a href="https://github.com/">GitHub ↗</a></div></footer>
    </main>
  );
}
