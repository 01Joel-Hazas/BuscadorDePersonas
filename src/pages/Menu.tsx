import "bootstrap/dist/css/bootstrap.css";
import Logo from "../images/logoBiko.png";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <h1 className="text-center" id="header">
        Busca Bikonianos
      </h1>
      <Link to="/">
        <img src={Logo} className="mx-auto" alt="..." id="logo" />
      </Link>
    </div>
  );
}

export default Menu;
