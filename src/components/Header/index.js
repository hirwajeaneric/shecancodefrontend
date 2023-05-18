 
import Image from "./images/logoscc.png"
import "./nav.css"
let Index = () => {
    return(
        <div>
          <div class="all">
            <img src={Image} alt='scc-logo'/>
          <ul class="navbar">
            <li><a href="#" class="active">Home</a></li>
            <li><a href="#">About <i class='bx bx-chevron-down'></i></a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Program</a></li>
            <li><a href="#">Login</a></li>
          </ul>
          <div class="menu">
            <button class="btn">Apply</button>
             <div class= "bx bx-menu" id="menu-icon"></div>
          </div>
          </div>
          </div>
    );
}
export default Index;
 
 
