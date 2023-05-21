import React from 'react'
// import Image from './undraw.png'
import './login.css'

const Login = () => {
return(
    <div className='container'>
<div className='content'>
<div className='image'>
    {/* <img src={Image}></img> */}
    </div>
    <div className='contform'>
    <form>
        <h2>Already Members!<a href=''>Need help?</a></h2>
        <input type="email" placeholder='example@gmail.com'></input><br></br><br></br>
        <input type="password" placeholder='Enter Your Password'></input><br></br><br></br>
        <input type='submit'id='submit' value='Sign in'></input>
    </form>
    <h3>Don't have an account Yet?<br></br> <a href=''>Create an account</a></h3>
    </div>
</div>
    </div>
)
}
export default Login;