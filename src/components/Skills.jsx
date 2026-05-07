import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faGit, faJs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faCss3Alt, faBootstrap } from "@fortawesome/free-brands-svg-icons";

function Skills() {
  const skills = [
    { name: "React", icon: faReact, color: "#61DBFB" },
    { name: "Node.js", icon: faNodeJs, color: "#68A063" },
    { name: "MongoDB", icon: faDatabase, color: "#4DB33D" },
    { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
    { name: "Git", icon: faGit, color: "#F1502F" },
    { name: "CSS", icon: faCss3Alt, color: "#264de4" },
    { name: "Bootstrap", icon: faBootstrap, color: "#7952B3" },
    { name: "SQL", icon: faDatabase, color: "#f29111" },
  ];

  return (
    <section className="skills-section" >

      <div className="skills-title">
        <span>Skills</span>
      </div>

      {/* Moving container */}
      <div className="slider">
        <div className="slide-track">   {/* ✅ ADD THIS */}

          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="skill-card">

              <FontAwesomeIcon
                icon={skill.icon}
                size="2x"
                style={{ color: skill.color }}
              />

              <p>{skill.name}</p>

            </div>
          ))}

        </div>


      </div>


    </section>
  );
}

export default Skills;