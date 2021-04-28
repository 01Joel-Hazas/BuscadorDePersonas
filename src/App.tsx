import PersonaForm from "./pages/AppPersonas";
import DetallesForm from "./pages/DetallesPersonas";
import Menu from "./pages/Menu";
import ErrorComponent from "./pages/ErrorComponent";
import "./styles/styles.css";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu></Menu>
        <header className="App-header">
          <Switch>
            <Route path="/" component={PersonaForm} exact />
            <Switch>
              <Route path="/DetallesPersonas" component={DetallesForm} exact />
              <Route path="/404" component={ErrorComponent} />
              <Redirect to="/404" />
            </Switch>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
