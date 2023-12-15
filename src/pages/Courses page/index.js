import Header from "../../components/Header/index";
import Nav from "../../components/Nav/index";
import Footer from "../../components/Footers/footer";
import { useNavigate } from "react-router-dom";

const COURSES = [
  {
    image: "/images/webdevelopment.jpg",
    title: "Mobile Application Development",
    description: "Unlock the world of possibilities with our SheCanCode Bootcamp's Mobile Application Development program, designed to empower young girls and women in the exciting realm of technology. In this transformative journey, participants will delve into the art of crafting mobile applications, gaining hands-on experience in coding, design, and problem-solving. Our supportive and inclusive learning environment fosters creativity and collaboration, ensuring that every aspiring tech enthusiast can thrive.",
    destination: "/mobiledevelopment"
  },
  {
    image: "/images/softwareEng.jpeg",
    title: "Software Engineering Program",
    description: "Calling all aspiring tech trailblazers! Embark on a transformative journey with our Software Engineering Program, crafted especially for young girls and women eager to dive into the dynamic world of technology.",
    destination: "/softwareengineering"
  },
  {
    image: "/images/holidaysBootcamp.jpg",
    title: "High School holidays tech bootcamp",
    description: "Unlock the world of technology for your child this holiday season with our dynamic High School Holidays Tech Bootcamp! Youngsters aged 13-18, are welcome to join our boot camp if they have a curious mindset, a passion for technology, a community-oriented attitude, and excitement about the evolving tech landscape!",
    destination: ""
  },  
  {
    image: "/images/partTimeImg.jpeg",
    title: "Part Time Software Engineering",
    description: "Seize the opportunity to transform your passion for technology into a rewarding career through our evening software development program. Whether you're a working professional looking to upskill or someone navigating a career change, our doors are open to all determined individuals ready to embark on a journey of learning and growth.",
    destination: ""
  },
];

const Courses = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col justify-start">
      <Nav />
      <Header />
      <div className="w-full flex flex-col mt-8 justify-center items-center">
        <section className="flex w-full md:w-10/12 justify-between flex-wrap">
          {COURSES.map((course, id) => (
            <div className="flex flex-col rounded-lg shadow-lg mb-8 w-full md:w-2/5 ">
              <img src={`${course.image}`} alt="" style={{ borderRadius: "1px 1px 0 0" }} className="w-full"/>
              <div className="flex flex-col px-6 pb-6 gap-4">
                <h1 className="text-xl" style={{ color: "#33d4d6" }}>{course.title}</h1>
                <p>{course.description}</p>
                <button onClick={() => navigate(course.destination)} style={{ backgroundColor: "#33d4d6", color: "white" }} className="py-3 px-2 mt-8 rounded-lg hover:bg-cyan-200">Explore Course</button>
              </div>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Courses