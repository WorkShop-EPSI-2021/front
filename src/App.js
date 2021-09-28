import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Index from "./Home";

function App() {
  return (
    <Router>
    <div className="App">
            <Switch>
          <Route path="/">
            <Index />
          </Route>
          </Switch>
    </div>

    </Router>
  );
}

export default App;
