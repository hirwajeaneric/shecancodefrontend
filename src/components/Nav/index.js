import "./bar.css"

let Bar =()=>{
    return(
        <>
        <div className="mycontainer">
        <div className="first">
          <h4>Follow us:</h4>
          <p>
          <a href="#"><i className='bx bxl-twitter'></i></a>
          <a href="#"><i className='bx bxl-facebook-circle'></i></a>
          <a href="#"><i className='bx bxl-instagram-alt'></i></a>
          <a href="#"><i className='bx bxl-linkedin-square' ></i></a>
          </p>
        </div>
        <div className="seconds">
          <div className="second">
           <div className="icon">
           <i className='bx bxs-phone-call'></i>
           </div>
           <div className="text">
            <p>Call Now! <br/> 0788473533</p>
           </div>
           <div className="line"></div>
           <div className="icon">
           <i className='bx bx-envelope'></i>
           </div>
           <div className="text">
            <p>Email Now! <br/>igirerwanda@gmail.com</p>
           </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Bar
