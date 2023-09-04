// import { useNavigate } from "react-router-dom";
import profilbild from "../assets/profilbild.jpg";
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
        <img src={person.image} alt={person.name} />
      </div>
      <div>
        <p className="hallo">Hallo. 😊 </p>
        <p className="text">Mein Name ist Nicole 😊</p>
        <p className="text">
          Ich bin derzeit Studentin beim DCI und lerne Web Dev 😊
        </p>
      </div>
    </div>
  );
};

export default Homepage;
