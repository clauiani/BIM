import "./App.css";

import { BimPage } from "./Pages/BimPage/BimPage";
import { HomePage } from "./Pages/HomePage/HomePage";
import { HistoryPage } from "./Pages/HistoryPage/HistoryPage";
import { RegulationsPage } from "./Pages/RegulationsPage/RegulationsPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SubmitProjectPage } from "./Pages/SubmitProject/SubmitProject";
import { LoginPage } from "./Pages/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/History" component={HistoryPage} />
              <Route exact path="/Bim" component={BimPage} />
              <Route exact path="/Regulations" component={RegulationsPage} />
              <Route exact path="/Login" component={LoginPage} />
              <Route
                exact
                path="/SubmitProject"
                component={SubmitProjectPage}
              />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
