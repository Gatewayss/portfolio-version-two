import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar ">
      <h1>Gage Norton</h1>
      <div className="links">
        <Link to="/about" style={{color: "var(--purple)"}}>About me</Link>
        <Link to="/portfolio" style={{color: "var(--blue)"}}>Portfolio</Link>
        <Link to="/contact" style={{color: "var(--green)"}}>Contact</Link>
        <Link to="/resume" style={{color: "var(--orange)"}}>Resume</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;