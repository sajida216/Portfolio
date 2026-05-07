function About() {
  return (
    <section className="about">

      <div className="about-container">

        {/* LEFT SIDE (TEXT) */}
        <div className="about-text"  data-aos="zoom-in">
          <h1 className="about-title">
            WHO <span className="gradient-text">I AM</span>
          </h1>

          <p className="about-desc">
         Hi, I am<b> Sajidha</b>, a MERN Full Stack Developer with a strong passion for building modern, scalable, and user-friendly web applications. I specialize in developing responsive frontend interfaces using React and creating efficient backend systems using Node.js, Express, and MongoDB.

I have experience in building real-world projects such as food ordering systems, hotel booking applications, and rental platforms. I focus on writing clean, maintainable code and delivering smooth user experiences.

I am continuously learning new technologies and improving my skills to stay updated with industry trends. I am highly motivated to work in a professional environment where I can contribute, grow, and build impactful applications.
          </p>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="about-image" data-aos="zoom-in">
          <img src="/saji_imgblack.png" alt="Sajidha" />
        </div>

      </div>

    </section>
  );
}

export default About;