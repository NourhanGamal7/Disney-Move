import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
        
      </Router>
    </div>
  );
}

export default App;


// WGiLI6gnG9t49fcbZQfr      ID firebase
// rTmspCyAxEGUWWZTrraP
// XaWBvqCYJHwRu9XKUOoH
// bPMfiPsdlL7e2SboHAn3
// Hr7CXa4dzIKU4OGuq7pO
// 1PldEekDlawXm7EQM463