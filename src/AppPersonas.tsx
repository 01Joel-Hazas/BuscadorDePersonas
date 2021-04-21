import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link } from "react-router-dom";

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

  function filterSearchedData(searchData: any) {
    let searchingPersons: any[] = [];
    personsData.map((person) => {
      if (person["name"].toString().toLowerCase().includes(searchData)) {
        searchingPersons.push(person);
        setHasError(false);
        // @ts-ignore: Object is possibly 'null'.
        document.getElementById("errorMessage").innerHTML = "";
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

            <Link
              to={{
                pathname: "/DetallesPersonas",
                state: { persona: persona },
              }}
              className="btn btn-primary"
            >
              Detalles
            </Link>
          </div>
        </div>
      );
    });
    return AllPersons;
  }

  function showErrorMessage() {
    let errorMessage = "No se ha encontrado ningúna persona con ese criterio";
    // @ts-ignore: Object is possibly 'null'.
    document.getElementById("errorMessage").innerHTML = errorMessage;
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

              <Link
                to={{
                  pathname: "/DetallesPersonas",
                  state: { persona: persona },
                }}
                className="btn btn-primary"
              >
                Detalles
              </Link>
            </div>
          </div>
        );
      });
      return SearchedPeople;
    }
  }

  return (
    <div className="container">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar aqui"
          onChange={(event) => {
            filterSearchedData(event.target.value);
          }}
        />
        <div className="input-group-append"></div>
      </div>
      <br />
      <div className="row">
        <p id="errorMessage"> </p>
        {hasValue ? printSearchedPeople() : printAllPeople()}
      </div>
    </div>
  );
}

export default PersonaForm;
