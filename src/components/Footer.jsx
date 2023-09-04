import gitPic from "../assets/githubLogo.png";

function goGithub() {
  window.open("https://github.com/Nicmaus", "_blank");
}

const footer = {
  gitHub: gitPic,
};

const Footer = () => {
  return (
    <div>
      <img onClick={goGithub} className="footer" src={footer.gitHub} />
    </div>
  );
};

export default Footer;
