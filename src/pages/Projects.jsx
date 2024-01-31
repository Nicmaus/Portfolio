import Brot from "../assets/Brot.png";
import Pokemon from "../assets/Pokemon.png";
import Oldtimer from "../assets/Oldtimer.png";

const projects = {
  img: Brot,
  img2: Pokemon,
  img3: Oldtimer,
};

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <div className="allProjects">
        <div className="first">
          <a
            className="project"
            href="https://main--first-project-html-css-nicole.netlify.app/"
            target="blank"
            >
            Erstes HTML/CSS Projekt
          </a>
          <img className="project1" src={projects.img} />
        </div>
        <div className="first">
          <a
            className="project"
            href="https://github.com/Nicmaus/firstJava"
            target="blank"
            >
            Erstes JavaScript Projekt
          </a>
          <img className="project1" src={projects.img2} />
        </div>
        <div className="first">
          <a
            className="project"
            href="https://master--first-react-preject-nicole.netlify.app/"
            target="blank"
          >
            Erstes React Projekt
          </a>
          <img className="project1" src={projects.img3} />
        </div>
      </div>

      <marquee style={{ fontSize: "25px" }} direction="left" speed="slow">
        Diese Seite ist weiterhin im Aufbau .....
      </marquee>
    </>
  );
};

export default Projects;
