import "bootstrap/dist/css/bootstrap.css";
import "../styles/cardHover.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

function PersonaForm() {
  const [personsData, setpersonsData] = useState<any[]>([]);
  const [searchpersonsData, setSearchedPersonsData] = useState<any[]>([]);
  const [hasError, setHasError] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("jsonPersona.json");
      setpersonsData(data);
    };
    fetchData();
  }, []);

  function filterSearchedData(event: any) {
    event.preventDefault();
    let searchedData: any = event.target.elements.searchInput.value;
    let searchingPersons: any[] = [];
    personsData.map((person) => {
      if (person["Nombre"].toString().toLowerCase().includes(searchedData)) {
        searchingPersons.push(person);
        setHasError(false);
        let errorItem: any = <p></p>;
        ReactDOM.render(errorItem, document.getElementById("errorMessage"));
        setHasValue(true);
      }
    });

    if (searchingPersons.length === 0) {
      setHasError(true);
    }

    setSearchedPersonsData(searchingPersons);
  }

  function printAllPeople() {
    let AllPersons: any = personsData.map((persona) => {
      return (
        <div className="col-sm-3">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={persona["imgUrl"]}
              className="mx-auto"
              alt="..."
              style={{ width: "200px", height: "200px" }}
            />

            <div className="card-body">
              <h6>{persona["Nombre"]}</h6>
              <h6>{persona["Apellidos"]}</h6>
              <p>{persona["Rol"]}</p>
              <div>
                <Link
                  to={{
                    pathname: "/DetallesPersonas",
                    state: { persona: persona },
                  }}
                >
                  Detalles
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return AllPersons;
  }

  function showErrorMessage() {
    let errorMessage = "No se ha encontrado ningúna persona con ese criterio";
    let errorItem: any = <p>{errorMessage}</p>;
    ReactDOM.render(errorItem, document.getElementById("errorMessage"));
  }

  function printSearchedPeople() {
    if (hasError) {
      showErrorMessage();
    } else {
      let SearchedPeople: any = searchpersonsData.map((persona) => {
        return (
          <div className="col-sm-3">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={persona["imgUrl"]}
                className="mx-auto"
                alt="..."
                style={{ width: "200px", height: "200px" }}
              />

              <div className="card-body">
                <h6>{persona["Nombre"]}</h6>
                <h6>{persona["Apellidos"]}</h6>
                <p>{persona["Rol"]}</p>
                <div>
                  <Link
                    to={{
                      pathname: "/DetallesPersonas",
                      state: { persona: persona },
                    }}
                  >
                    Detalles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      });
      return SearchedPeople;
    }
  }

  return (
    <div className="container">
      <div>
        <p className="text-center" id="redParagraph">
          (lorem ipsum dolor set)
        </p>
        <p className="text-center" id="normalParagraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
          pretium tellus.
        </p>
      </div>

      <form onSubmit={filterSearchedData}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre Bikoniano"
            id="searchInput"
          />
          <span className="input-group-btn">
            <button className="btn btn-danger" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </span>
        </div>
      </form>
      <br />
      <div className="row">
        <p id="errorMessage"> </p>
        {hasValue ? printSearchedPeople() : printAllPeople()}
      </div>
    </div>
  );
}

export default PersonaForm;
