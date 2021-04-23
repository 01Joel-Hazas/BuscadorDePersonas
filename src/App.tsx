import PersonaForm from "./pages/AppPersonas";
import DetallesForm from "./pages/DetallesPersonas";
import Menu from "./pages/Menu";
import "./styles/styles.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu></Menu>
        <header className="App-header">
          <Switch>
            <Route path="/" component={PersonaForm} exact />
            <Route path="/DetallesPersonas" component={DetallesForm} exact />
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
