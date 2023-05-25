import './Home.css'
import Nav from '../../components/Nav/index';
import Program from '../../components/Section/alumni/Program/program';
import Explore from '../../components/Section/alumni/explore-course/course';
import Header from '../../components/Header/index';
import Alumni from '../../components/Section/alumni/alumnisection/index';
import FirstHome from '../../components/Section/alumni/firsthomesection/firstsection';

let Home = () =>{
return(
<>
<Nav /> 
<Header />
<FirstHome />
 <Explore />
<Alumni />
<Program />
</>
);
}

export default Home;
