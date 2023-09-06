import gitPic from "../assets/githubLogo.png";

function goGithub() {
  window.open("https://github.com/Nicmaus", "_blank");
}

const footer = {
  gitHub: gitPic,
};

const Footer = () => {
  return (
    <footer>
      <img onClick={goGithub} className="footerImg" src={footer.gitHub} />
    </footer>
  );
};

export default Footer;
