import Homepage from "../pages/Homepage";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import NotFound from "../pages/NotFound";


const routes = [
  { path: "/", element: <Homepage />, id: 1 },
  { path: "contact-me", element: <Contact />, id: 2 },
  { path: "projects", element: <Projects />, id: 3 },
  { path: "skills", element: <Skills />, id: 4 },
  { path: "*", element: <NotFound />, id: 5 },
  { path: "/portfolio", element: <Homepage />, id: 6 },

];

export default routes;
