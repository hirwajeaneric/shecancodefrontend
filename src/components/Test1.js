import { useState } from 'react';
import './test1.css';
import { FaTimes } from 'react-icons/fa';

let Test1 = () =>{

let [visible, setVisible] = useState(true);

return(
    <div className="Test1_container">
        <div className="navigation">
            <ul className='navDisa'>
                <li>blog</li>
                <li>stories</li>
                <li>stories</li>
                <li>stories</li> 
                <li>stories</li>
            </ul>
            {visible && <div class="bx bx-menu" id="menu-icon" onClick={() => {setVisible(false)}}></div>}
            {!visible && <FaTimes className='times'onClick={() => {setVisible(true)}}/>}
        </div>
        <div className="content"></div>
    </div>
);

}

export default Test1;
