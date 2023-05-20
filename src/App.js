import Header from "./components/Header/index";
import Firstsection from "../src/components/section/alumni/firsthomesection/firstsection";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/index";
import Alumni from "./components/section/alumni/alumnisection";
function App() {
  return (
    <div className="App">
      <Alumni />

      <Router>{/* <Routes></Routes> */}</Router>
    </div>
  );
}
export default App;
