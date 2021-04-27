import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

function DetallesForm({ location }: any) {
  const persona = location.state.persona;
  const todasLasPersonas: any[] = location.state.AllPersons;
  let splitedAbility: any = persona["Habilidades"].split(",");

  function showDateYear(date: any) {
    let year: any = date.split("/", 3);
    return year[2];
  }

  function getAbilities() {
    return splitedAbility.map((ability: any) => {
      return (
        <div>
          <div className="m-2">
            <span id="roundedCircle">
              <p id="redCircleContent"> {ability} </p>
            </span>
          </div>
        </div>
      );
    });
  }
  function getPeopleOfAbilities() {
    return todasLasPersonas.map((person: any) => {
      let Habilidades: string[] = person["Habilidades"].split(",");

      if (Habilidades.indexOf(splitedAbility[0]) > -1 && person !== persona) {
        return (
          <div className="col-sm-3">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={person["imgUrl"]}
                className="mx-auto"
                alt="..."
                style={{ width: "200px", height: "200px" }}
              />
              <div className="card-body">
                <h6>{person["Nombre"]}</h6>
                <h6>{person["Apellidos"]}</h6>
                <p>{person["Rol"]}</p>
              </div>
            </div>
          </div>
        );
      } else {
        return "";
      }
    });
  }

  function getPeopleOfTeam(equipo: any) {
    return todasLasPersonas.map((person: any) => {
      if (person["Equipo"].toString() === equipo && person !== persona) {
        return (
          <div className="col-sm-3">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={person["imgUrl"]}
                className="mx-auto"
                alt="..."
                style={{ width: "200px", height: "200px" }}
              />
              <div className="card-body">
                <h6>{person["Nombre"]}</h6>
                <h6>{person["Apellidos"]}</h6>
                <p>{person["Rol"]}</p>
              </div>
            </div>
          </div>
        );
      } else {
        return "";
      }
    });
  }

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
                <span className="pr-2">
                  <FontAwesomeIcon icon={faRocket} />
                </span>

                <span className="pr-4">
                  <strong>{persona["Equipo"]}</strong>
                </span>

                <span className="pr-2">
                  <FontAwesomeIcon icon={faCalendar} />
                </span>

                <span className="pr-2">
                  Desde
                  <strong>
                    {showDateYear(persona["Fecha incorporación a Biko"])}
                  </strong>
                </span>
              </small>
            </p>

            <div>
              <div className="row">{getAbilities()}</div>
            </div>
            <br />
            <div style={{ width: "900px" }}>
              <p className="card-text" id="montserrat">
                {persona["Sobre mí"]}
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container" style={{ marginTop: "5rem" }}>
        <h1 id="HeaderDetails"> Miembros de {splitedAbility[0]}</h1>
        <div className="row">{getPeopleOfAbilities()}</div>
      </div>
      <p>
        <i id="arrow-line"></i>
      </p>
      <p>
        <i className="arrow down"></i>
      </p>
      <div className="container" style={{ marginTop: "10rem" }}>
        <h1 id="HeaderDetails">Contamos en el blog</h1>
        <p id="redParagraph">(y mucho más que proyectos)</p>

        <div className="row">
          <div className="col-sm-3">
            <div>
              <img
                className="card-img-top img-fluid"
                style={{ width: "300px", height: "200px" }}
                src="https://www.travelonart.com/wp-content/uploads/2017/12/arte-contemporanea-a-gennaio-2018-copertina.jpg"
                alt="Imagen Museo"
              />
              <div className="card-block">
                <p className="card-title">
                  <strong>
                    ¿Qué podemos aprender de las estrategias digitales de un
                    museo?
                  </strong>
                </p>
                <p className="card-text" id="blogText">
                  Aunque parezcan instituciones clásicas y generalmente ancladas
                  en el pasado, muchos museos están abrazando el mundo digital
                  de forma decidida y audaz, hasta el punto de haber
                  desarrollado iniciativas muy exitosas, con alcance masivo e
                  internacional, […]
                </p>
                <p className="card-text">
                  <small className="text-muted">Por Diego Cenzano</small>
                </p>
                <div className="row">
                  <div className="m-2">
                    <span id="roundedCircle">
                      <p id="redCircleContent"> componetización </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div>
              <img
                className="card-img-top img-fluid"
                style={{ width: "300px", height: "200px" }}
                src="https://s3-alpha-sig.figma.com/img/5129/a7fa/b2e7d1f8f47c08cd276aa5de676ab521?Expires=1620604800&Signature=L4eK~LDsyEZl9Qjrqw126lXs~x-hY~-tx9eDdzx8oDV2jnAJ7HCe5I2Qyz5qUoJRAjBVlJccU7Zur7yOyEeRuj8R9VK1xxgKyWYktyJOS34uCsB26vXkVxbTOEz~iM86wZkfwZCoFyk1b2ZRZnT7NRJhUHbJG95bXL4wIJtXT0yv3YEZuKnKKS6HF7KxusFpok2lrYNfLOM8ghv-vi8Iiw0dGpGQ6iOwFc3uVnlzp8n0M9ozGTbQuLXuBwf1NJO3mnYqHLfrdOQQzbofytfauJQOytRdZJHL2YBBFsZwt0rq0xr~CorSahzVtrowH7JRkZrUrS~kXHXQoH2AtfKclQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="Imagen geometrica abstracta "
              />
              <div className="card-block">
                <p className="card-title">
                  <strong>
                    Cómo trabajamos -desde hace años- en remoto: pistas y
                    herramientas
                  </strong>
                </p>
                <p className="card-text" id="blogText">
                  En Biko llevamos ya bastantes años trabajando en remoto. Es
                  más, en ocasiones, combinamos el trabajo remoto con el
                  presencial; hacemos trabajo 100% presencial o tenemos personas
                  que trabajan 100 % a distancia. En definitiva: si la
                  experiencia es un grado, nosotros tenemos un Doctorado […]
                </p>
                <p className="card-text">
                  <small className="text-muted">Por Biko</small>
                </p>
                <div className="row">
                  <div className="m-2">
                    <span id="roundedCircle">
                      <p id="redCircleContent"> actualidad </p>
                    </span>
                  </div>
                  <div className="m-2">
                    <span id="roundedCircle">
                      <p id="redCircleContent"> react </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /> <br />
      <div className="container">
        <h1 id="HeaderDetails">Otra gente de {persona["Equipo"]}</h1>
        <br />
        <div className="row"> {getPeopleOfTeam(persona["Equipo"])} </div>
      </div>
    </div>
  );
}

export default DetallesForm;
