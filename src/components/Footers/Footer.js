import "./footer.css";
import { FaArrowRight } from 'react-icons/fa';
import { AiOutlineCopyright } from 'react-icons/ai';
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';

let Footer = () =>{

return(
    <div className="allFooter">
    <div className="footer_container">
       <div className="footer_one">
        <div className="f_one">
            <ul>
            <li><FaPhone /></li>
            <li>0780417287</li>
            </ul>
        </div>
        <div className="f_two">
        <ul>
            <li><FaEnvelope /></li>
            <li>igirerwanda@gmail.com</li>
        </ul>
        </div>
        <div className="f_three">
        <ul>
            <li><FaMapMarker /></li>
            <li>Kacyiru</li>
        </ul>
        </div>
       </div>
       {/* <hr /> */}
       <div className="footer_two">
        <div className="fo_one">
        <div className="center_footer">
            <h2>Be Future-Ready</h2>
            <p>Get exclusive <span>Technological updates<br />straignt to your inbox</span></p>
            <div className="subscribe">
                <div className="inputs">
                    <input type="text" id="input_footer" placeholder="Email address"/>
                </div>
                <div className="footer_button">
                    <FaArrowRight id="email_button"/>
                </div>
            </div>
            </div>
        </div>
        <div className="fo_two">
            <div className="about_footer">
                <p className="center_text">About</p>
                <ul>
                    <li>Our Story</li>
                    <li>Awards</li>
                    <li>Our Team</li>
                    <li>Career</li>
                </ul>
            </div>
            <div className="training_footer">
            <p className="center_text">Company</p>
            <ul>
                    <li>Our Service</li>
                    <li>Alumni</li>
                    <li>Contact</li>
                    <li>Reputation</li>
            </ul>
            </div>
            <div className="resource_footer">
            <p className="center_text">Resources</p>
            <ul>
                    <li>Blogs</li>
                    <li>Newsletter</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
       </div>
       <hr />
       <div className="footer_three">
        <div className="three_one">
            <p><AiOutlineCopyright />2023 IGIRE RWANDA ORGANIZATION.all right reverved</p>
        </div>
        <div className="three_two">
            <ul className="unOrder">
                <li><FaFacebook id="icons_footer"/></li>
                <li><FaLinkedin id="icons_footer"/></li>
                <li><FaTwitter id="icons_footer"/></li>
                <li><FaGithub id="icons_footer"/></li>
            </ul>
        </div>
        <div className="three_three">
        <ul className="unOrder2">
                <li>Terms of Service</li>
                <li>privacy Policy</li>
        </ul>
        </div>
       </div>
    </div></div>
);

}

export default Footer;
