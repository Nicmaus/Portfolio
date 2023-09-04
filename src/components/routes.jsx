import Homepage from "../pages/Homepage";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Info from "./Info";
import Skills from "../pages/Skills";
import NotFound from "../pages/NotFound";


const routes = [
  { path: "/", element: <Homepage />, id: 1 },
  { path: "contact-me", element: <Contact />, id: 2 },
  { path: "projects", element: <Projects />, id: 3 },
  { path: "info", element: <Info />, id: 4 },
  { path: "skills", element: <Skills />, id: 5 },
  { path: "*", element: <NotFound />, id: 6 },
  { path: "/portfolio", element: <Homepage />, id: 7 },

];

export default routes;
