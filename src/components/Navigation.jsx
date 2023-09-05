import { NavLink } from "react-router-dom";
import styles from "../style/Navigation.module.css";


const Navigation = () => {
  const items = [
    { name: "Home", to: "/", id: 1 },
    { name: "Contact", to: "/contact-me", id: 2 },
    { name: "Projects", to: "/projects", id: 3 },
    { name: "Info", to: "/info", id: 4 },
    { name: "Skills", to: "/skills", id: 5 },

  ];
  return (
    <nav className={styles.navContainer}>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navigation;