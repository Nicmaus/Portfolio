// import { useNavigate } from "react-router-dom";
import profilbild from "../assets/me.jpg";
import "../style/image.css";

const person = {
  name: "Nicole",
  image: profilbild,
};

const Homepage = () => {
  // const navigate = useNavigate();
  return (
    <div className="home">
      <div>
        <img className="profilPic" src={person.image} alt={person.name} />
      </div>
      <div>
        <p className="hallo">Herzlich Willkommen!  </p>
       
        <p className="text">
        Ich bin Nicole, eine angehende Web-Entwicklerin,
        </p>
        <p className="text"> die sich darauf freut, die digitale Landschaft zu gestalten. Diese Seite dient als Fenster zu meiner Arbeit,</p>
        <p className="text"> meinen Fähigkeiten und meiner Reise in der Welt des Web-Developments. </p>
        <p className="text"> Tauchen Sie ein und zögern Sie nicht, mich zu kontaktieren, wenn Sie mehr wissen möchten.</p>
      </div>
    </div>
  );
};

export default Homepage;
