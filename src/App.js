import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import PaidSubDash from "./pages/PaidSubDash/PaidSubDash";
import FreeSubDash from "./pages/FreeSubDash/FreeSubDash";
import CloudDash from "./pages/CloudDash/CloudDash";
import RevTrkDash from "./pages/RevTrkDash/RevTrkDash";
import InfoDash from "./pages/InfoDash/InfoDash";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/PaidSubDash" component={PaidSubDash} />
        <Route path="/FreeSubDash" component={FreeSubDash} />
        <Route path="/CloudDash" component={CloudDash} />
        <Route path="/RevTrkDash" component={RevTrkDash} />
        <Route path="/InfoDash" component={InfoDash} />
      </Switch>
    </Router>
  );
}

export default App;
