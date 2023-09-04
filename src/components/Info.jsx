import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faLaptopFile,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import "../style/info.css";
import { useNavigate } from "react-router-dom";

const Info = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="infoContainer">
        <div className="box1">
          <p onClick={()=> navigate("/contact-me")} title="Klick für Infos">
            <FontAwesomeIcon icon={faIdCard} beat />
          </p>
        </div>
        <div className="box2">
          <p onClick={()=> navigate("/skills")} title="Skills">
            <FontAwesomeIcon icon={faLaptopFile} beat />
          </p>
        </div>
        <div className="box3">
          <p onClick={() => navigate("/projects")} title="Klick für die Projekte">
            <FontAwesomeIcon icon={faCode} beat />
          </p>
        </div>

      </div>

    </>
  );
};

export default Info;
