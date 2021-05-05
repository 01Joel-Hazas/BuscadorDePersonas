import "bootstrap/dist/css/bootstrap.css";
import "../styles/cardHover.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
let hasValue: boolean = false;
let hasError: boolean = false;
function PersonaForm() {
  const [AllPeopleData, setAllPeopleData] = useState<any[]>([]);
  const [searchedInputValue, setSearchedInputValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("jsonPersona.json");
      setAllPeopleData(data);
    };
    fetchData();
  }, []);

  function filterSearchedData(event: any) {
    event.preventDefault();
    setSearchedInputValue(event.target.elements.searchInput.value);
    hasValue = true;
  }

  function printAllPeople() {
    let AllPeople: any = AllPeopleData.map((person) => {
      return (
        <div className="col-sm-3">
          <Link
            to={{
              pathname: "/DetallesPersonas",
              state: { persona: person, AllPersons: AllPeopleData },
            }}
          >
            <div className="card">
              <img
                src={person["imgUrl"]}
                alt="..."
                style={{ width: "200px", height: "200px" }}
              />

              <div className="card-body">
                <h6>{person["Nombre"]}</h6>
                <h6>{person["Apellidos"]}</h6>
                <p>{person["Rol"]}</p>
              </div>
            </div>
          </Link>
        </div>
      );
    });
    return AllPeople;
  }

  function showErrorMessage() {
    let errorMessage = "No se ha encontrado ningúna persona con ese criterio";
    let errorItem: any = <p>{errorMessage}</p>;
    ReactDOM.render(errorItem, document.getElementById("errorMessage"));
  }

  function printSearchedPeople() {
    let searchedPeopleData: any[] = [];
    AllPeopleData.forEach((person) => {
      if (
        person["Nombre"]
          .toString()
          .toLowerCase()
          .includes(searchedInputValue.toLowerCase())
      ) {
        searchedPeopleData.push(person);
        hasError = false;
        let errorItem: any = <p></p>;
        ReactDOM.render(errorItem, document.getElementById("errorMessage"));
      }
    });

    if (searchedPeopleData.length === 0) {
      hasError = true;
    }

    if (hasError) {
      showErrorMessage();
    } else {
      let SearchedPeople: any = searchedPeopleData.map((person: any) => {
        return (
          <div className="col-sm-3">
            <Link
              to={{
                pathname: "/DetallesPersonas",
                state: { persona: person, AllPersons: AllPeopleData },
              }}
            >
              <div className="card">
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
            </Link>
          </div>
        );
      });
      return SearchedPeople;
    }
  }

  return (
    <div className="container">
      <div style={{ marginTop: "20px" }}>
        <br />
        <br />
        <h1 id="header">Busca Bikonianos</h1>
        <p className="text-center" id="redParagraphPositioned">
          (lorem ipsum dolor set)
        </p>
        <p style={{ marginTop: "50px" }} id="normalParagraph">
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
      <div className="container">
        <div className="row mx-0">
          <p id="errorMessage"> </p>
          {hasValue ? printSearchedPeople() : printAllPeople()}
        </div>
      </div>
    </div>
  );
}

export default PersonaForm;
