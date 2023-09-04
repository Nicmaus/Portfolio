import "../style/skills.css";
import htmlPic from "../assets/html.jpg"
import cssPic from "../assets/css.jpg"
import jsPic from "../assets/JS.png"
import reactPic from "../assets/react.jpg"
import tailwindPic from "../assets/tailwind.png"


const pics = {
  html: htmlPic,
  css: cssPic,
  js: jsPic,
  react: reactPic,
  tailwind: tailwindPic,

}

const Skills = () => {
  return (
    <>
      <h1>Skills!</h1>
      <div className="divContainer">
        <div className="skill">
          <span>- HTML</span>
          <img src={pics.html} alt="Html-Image" />
        </div>
        <div className="skill">
          <span>- CSS</span>
          <img src={pics.css} alt="Css-Image" />

        </div>
        <div className="skill">
          <span>- JavaScript</span>
          <img src={pics.js} alt="KavaScript-Image" />

        </div>
        <div className="skill">
          <span>- React</span>
          <img src={pics.react} alt="React-Image" />

        </div>
        <div className="skill">
          <span>- TailwindCss</span>
          <img src={pics.tailwind} alt="TailwindCss-Image" />

        </div>
      </div>
    </>
  );
};

export default Skills;
