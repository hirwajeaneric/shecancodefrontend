import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/index";
// import Alumni from "./components/section/alumni/alumnisection";
function App() {
  return (
    <>
      <Router>
        <Routes></Routes>
      </Router>
    </>
  );
}
export default App;
