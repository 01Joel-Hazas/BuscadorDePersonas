import "bootstrap/dist/css/bootstrap.css";
import error404 from "../images/error404.png";
import { Link } from "react-router-dom";

function ErrorComponent() {
  return (
    <div className="container">
      <div style={{ margin: "0 auto" }}>
        <br />
        <div className="row g-0">
          <div className="col-md-4">
            <img alt="..." className="img-fluid" src={error404} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1>404</h1>
              <h2>¡OH NO! TE HAS PERDIDO</h2>
              <p className="card-text" id="redParagraph">
                La página a la que intentas acceder no existe. No sabemos como
                has llegado aqui. Pero puedes hacer click en el botón para
                volver al inicio.
              </p>
              <Link to="/">
                <button type="button" className="btn btn-info">
                  INICIO
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorComponent;
