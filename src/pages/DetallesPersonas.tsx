import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

function DetallesForm({ location }: any) {
  const persona = location.state.persona;
  return (
    <div style={{ margin: "0 auto" }}>
      <br />
      <div className="row g-0">
        <div className="col-md-4">
          <img src={persona["imgUrl"]} alt="..." className="img-fluid" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">{persona["Nombre"]}</h1>

            <h1 className="card-title">
              <strong> {persona["Apellidos"]} </strong>
            </h1>
            <p className="card-text" id="redParagraph">
              ({persona["Rol"]})
            </p>

            <p className="card-text">
              <small className="text-muted">
                <span className="pr-3">
                  {" "}
                  <FontAwesomeIcon icon={faRocket} />{" "}
                  <strong>{persona["Equipo"]}</strong>
                </span>
                <FontAwesomeIcon icon={faCalendar} />
                Desde <strong>{persona["Fecha incorporación a Biko"]}</strong>
              </small>
            </p>

            <span id="roundedCircle">
              <p id="redCircleContent"> react </p>
            </span>
            <span id="roundedCircle">
              <p id="redCircleContent"> symphony </p>
            </span>
            <span id="roundedCircle">
              <p id="redCircleContent"> drupal </p>
            </span>
            <span id="roundedCircle">
              <p id="redCircleContent"> componetización </p>
            </span>

            <div style={{ width: "900px" }}>
              <p className="card-text" id="montserrat">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                commodo nec lacus ut dignissim. Phasellus tempor pellentesque
                ante, at blandit elit elementum congue. Sed semper velit quis
                sagittis aliquet. Integer eget fermentum enim, sit amet
                fermentum dolor. Sed lobortis nibh vitae ex interdum egestas.
                Quisque commodo venenatis odio ac tristique. Vivamus imperdiet
                faucibus maximus. Aenean laoreet massa in blandit lacinia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetallesForm;
