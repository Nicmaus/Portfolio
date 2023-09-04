// /* eslint-disable react/prop-types */
import  Header  from "../components/Header";
import  PropTypes  from "prop-types";

const Layout = ({children}) => {
  
    return <>
    <Header/>
    {children}
    
    </>;
  };
  
  Layout.propTypes = {
    children: PropTypes.node.isRequired
  };
  
  export default Layout;