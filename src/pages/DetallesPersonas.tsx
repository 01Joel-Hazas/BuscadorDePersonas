import "bootstrap/dist/css/bootstrap.css";

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
            <p className="card-text">({persona["Rol"]})</p>

            <p className="card-text">
              <small className="text-muted">
                Desde <strong>{persona["Fecha incorporación a Biko"]}</strong>
              </small>
            </p>
            <div style={{ width: "900px" }}>
              <p className="card-text">{persona["Description"]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetallesForm;
