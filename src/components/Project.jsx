function Projects() {
 const projects = [
  {
    title: "Hotel Booking App",
    desc: "A responsive web application that allows users to search, view, and book hotel rooms with real-time date selection and booking management features.",
    img: "/hotel.jpeg",
    link: "https://sajida216.github.io/room-booking/"
  },

  {
    title: "Equipment Rental",
    desc: "A web-based rental system that enables users to book equipment with date tracking, while admins can manage availability and bookings efficiently.",
    img: "/eqpment.jpg",
    link: "https://github.com/sajida216/Project"
  },
  {
    title: "Expense Tracker",
    desc: "A responsive frontend expense tracker application that helps users manage daily expenses, track spending, and view financial records through a clean and user-friendly interface.",
    img: "/expence_traker.png",
    link: "https://expense-tracker-umber-omega-54.vercel.app/"
  },
  {
    title: "MYG App",
    desc: "A modern React-based application designed with user-friendly UI components, focusing on responsive design and smooth navigation experience.",
    img: "/MYG.png",
    link: "https://github.com/sajida216/MYG"
  },
    {
    title: "Wedding Invitation",
    desc: " A responsive wedding invitation UI created using React and Tailwind CSS, showcasing modern design principles, reusable components, and an intuitive user interface",
    img: "/sali's wedding.png",
    link: "https://sajida216.github.io/sali-wedding/"
  },
  
  {
    title: "Food Ordering App",
    desc: "A full-stack MERN application where users can browse food items, add them to cart, and place orders with a smooth and interactive user experience.",
    img: "/Food.jpeg",
    link: "#"
  },
];

  return (
    <section className="projects-section" >

      <h1 className="projects-title">
        My <span className="gradient-text">Projects</span>
      </h1>

      <div className="projects-container" data-aos="fade-up">
        {projects.map((project, index) => (
          <div key={index} className="project-card">

            <img src={project.img} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

             <a href={project.link} target="_blank">
                View Project →
              </a> 
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Projects;