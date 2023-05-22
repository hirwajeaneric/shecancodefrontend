import "./bar.css"
let Bar =()=>{
    return(
        <>
        <div class="mycontainer">
        <div class="first">
          <h4>Follow us:</h4>
          <p>
          <a href="#"><i class='bx bxl-twitter'></i></a>
          <a href="#"><i class='bx bxl-facebook-circle'></i></a>
          <a href="#"><i class='bx bxl-instagram-alt'></i></a>
          <a href="#"><i class='bx bxl-linkedin-square' ></i></a>
          </p>
        </div>
        <div class="second">
           <div class="icon">
           <i class='bx bxs-phone-call'></i>
           </div>
           <div class="text">
            <p>Call Now! <br/> 0788473533</p>
           </div>
           <div class="line"></div>
           <div class="icon">
           <i class='bx bx-envelope'></i>
           </div>
           <div class="text">
            <p>Email Now! <br/>igirerwanda@gmail.com</p>
           </div>
        </div>
        </div>
        </>
    )
}
export default Bar