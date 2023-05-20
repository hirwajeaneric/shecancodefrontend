import Header from "./components/Header/index";
import Firstsection from '../src/components/section/alumni/firsthomesection/firstsection'
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/index";
function App() {
  return (
    <Router>
      <Routes></Routes>
    </Router>
  );
}
export default App;
