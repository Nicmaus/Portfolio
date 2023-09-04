import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li>
          <NavLink to="/contact-me">Kontakt</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
