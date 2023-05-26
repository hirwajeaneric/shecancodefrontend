import './Test.css';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';

let Test = () =>{

let [visible, setVisible] = useState(true);

return(
<div className="test_container">
<div className='test_one'>
    <div className='test_logo'>
        <h1>logo</h1>
    </div>
    <div className='test_nav'>
        <ul>
            <li>Home</li>
            <li>About</li>
        </ul>
    </div>
    <div className='test_login'>
        <p>{true == false ? "closed": "not closed"}</p>
        {!visible && <FaTimes className='times' onClick={() => setVisible(true)}/>}
        {visible && <div class="bx bx-menu" id="menu-icon" onClick={() => setVisible(false)}/>}
    </div>
</div>
<div className='test_two'></div>
<div className='test_three'>
    <div>
    <h1>footer</h1>
    </div>
</div>
</div>
)
}

export default Test 
