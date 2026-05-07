import About from "./About";
import Skills from "./Skills";
import Projects from "./Project";
import Contact from "./Contact";


function Hero() {
  return (
    <div>
    <section className="hero">

      <div className="badge">FULL STACK DEVELOPER</div>

      <h1>
        Building <br />
        <span className="gradient-text">Modern.</span><br />
        Web Apps.
      </h1>

      <p>
        Hi, I'm  <b> Sajidha</b>. I craft high-performance MERN applications with 
        <span className="blue"> scalable architectures</span> and 
        <span className="purple"> stunning interfaces</span>.
      </p>
      <a href="/Resume.pdf" target="_blank">
  <button className="hire-btn">VIEW RESUME</button>
</a>
       </section>
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  );
}

export default Hero;
// 🚀 