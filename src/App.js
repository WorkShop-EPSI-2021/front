import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Index from "./Home";
import Result from "./Result";
import react, { Fragment} from "react";
import AppAppBar from './modules/views/AppAppBar';


function App() {
  return (
    <Router>
    <div className="App">
      <Fragment>
      <AppAppBar />
            <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route exact path="/result/:id">
            <Result />
          </Route>
          </Switch>
          </Fragment>
    </div>

    </Router>
  );
}

export default App;
