import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function DetallesForm({ location }: any) {
  const persona = location.state.persona;
  return (
    <div className="container">
      <div className="card align-items-center">
        <img
          src={persona["imgUrl"]}
          className="mx-auto"
          alt="..."
          style={{ width: "200px", height: "200px" }}
        />

        <div className="card-body">
          <h5 className="card-title">{persona["name"]}</h5>
          <p className="card-text">Descripción: {persona["description"]}</p>
          <p className="card-text">
            <small className="text-muted">{persona["date"]}</small>
          </p>
        </div>
      </div>
      <br />
      <div className="col text-center">
        <Link to="/" className="btn btn-primary">
          Volver
        </Link>
      </div>
    </div>
  );
}

export default DetallesForm;
