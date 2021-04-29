import "bootstrap/dist/css/bootstrap.css";
import Logo from "../images/logoBiko.png";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <Link to="/">
        <img src={Logo} alt="..." id="logo" />
      </Link>
    </div>
  );
}

export default Menu;
