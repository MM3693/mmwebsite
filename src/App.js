import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import Legal from "./pages/Legal/Legal";
import Contact from "./pages/Contact/Contact";
import Team from "./pages/Team/Team";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stats from "./pages/Stats/Stats";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route path="/legal">
          <Legal />
        </Route>
        <Route path="/stats">
          <Stats />
        </Route>
      </Router>
    </>
  );
}

export default App;
