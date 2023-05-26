import "./footer.css";
import { FaArrowRight } from 'react-icons/fa';

let Footer = () =>{

return(
    <div className="footer_container">
       <div className="footer_one">
        <div className="f_one"><h2>brown</h2></div>
        <div className="f_two">halloo@gmail.com</div>
        <div className="f_three">place</div>
       </div>
       <div className="footer_two">
        <div className="fo_one">
            <h2>Be Future-Ready</h2>
            <p>Get exclusive <span>Technological updates<br />straignt to your inbox</span></p>
            <div>
                <input type="text"/>
                <FaArrowRight />
            </div>
        </div>
        <div className="fo_two"></div>
        <div className="fo_three"></div>
       </div>
       <div className="footer_three"></div>
    </div>
);

}

export default Footer;
