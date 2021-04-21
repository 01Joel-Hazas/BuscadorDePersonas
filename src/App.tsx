import PersonaForm from "./AppPersonas";
import DetallesForm from "./DetallesPersonas";
import Menu from "./Menu";
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
