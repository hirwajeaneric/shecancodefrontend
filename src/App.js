import Header from "./components/Header/index";
import Nav from "./components/Nav";
import WhatWeDo from "./components/section/WhatWeDo";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/index";
import Course from "./components/section/alumni/explore-course/course";
function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      {/* <Header/> */}
      {/* <Course/> */}
      <WhatWeDo />
    </div>

    // function App() {
    //   return (
    //     <div className="App">

    // // import Header from './components/Header/index';
    // function App() {
    //   return (
    //     <div className="App">
    //       {/* <Header /> */}

    //     </div>

    // // import Alumni from "./components/section/alumni/alumnisection";
    // function App() {
    //   return (
    //     <>
    //       <Router>
    //         <Routes></Routes>
    //       </Router>
    //     </>
  );
}
export default App;
