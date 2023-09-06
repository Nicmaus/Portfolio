import "../style/skills.css";
import htmlPic from "../assets/logoHtml.png"
import cssPic from "../assets/css3logo.jpg"
import jsPic from "../assets/logoJs.png"
import reactPic from "../assets/logoReact.jpg"
import tailwindPic from "../assets/logoTailwind.png"


const pics = {
  html: htmlPic,
  css: cssPic,
  js: jsPic,
  react: reactPic,
  tailwind: tailwindPic,

}

const Skills = () => {
  return (
    <div className="skillContainer">
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
    </div>
  );
};

export default Skills;
