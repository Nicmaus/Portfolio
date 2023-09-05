const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <div className="allProjects">
        <a
          className="project"
          href="https://main--first-project-html-css-nicole.netlify.app/"
          target="blank"
        >
          Erstes HTML/CSS Projekt
        </a>
        <a
          className="project"
          href="https://github.com/Nicmaus/firstJava"
          target="blank"
        >
          Erstes JavaScript Projekt
        </a>
        <a
          className="project"
          href="https://master--first-react-preject-nicole.netlify.app/"
          target="blank"
        >
          Erstes JavaScript Projekt
        </a>
      </div>

      <marquee style={{ fontSize: "25px" }} direction="left" speed="slow">
        Diese Seite ist weiterhin noch im Aufbau .....
      </marquee>
    </>
  );
};

export default Projects;
