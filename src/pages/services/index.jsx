import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import amali from '../../assets/amali.png';
import img from '../../assets/Desktop - 1.png';
import hence from '../../assets/hence.png';
import thegym from '../../assets/thegym.jpeg';
import study from '../../assets/undraw_education_f8ru.png';
import job from '../../assets/undraw_Hire_re_gn5j.png';
import career from '../../assets/undraw_server_cluster_jwwq.png';
import Button from '../../components/Button';
import Footer from '../../components/Footers/footer';
import Header from '../../components/Header';
import graduatesData from './graduateData';
import umurava from "../../assets/umurava.png";

import './services.css';
const Services = () => {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);
  const [visible, setVisible] = useState(false);
  const [view, setView] = useState(false);
  const [item, setItem] = useState(false);
  const [selectedGraduate, setSelectedGraduate] = useState(graduatesData[0]);
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleGraduateClick = (graduate, index) => {
    setSelectedGraduate(graduate);
    setClickedIndex(index);
  };

  //   useEffect(()=>(
  // document.title="shecancode|service"
  //   ),[])
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="all-services">
      <Header />

      <div className="service-container">
        <div className="service-partOne">
          <h1 data-aos="fade-in">16 Weeks of coding career Training</h1>
          <p data-aos="fade-down">
            At Shecancode School, our Career Services team is committed to
            helping you get started your career in teck. Our proven job search
            framework includes up to 180 days of 1-on-1 coaching from our
            experienced Career Coaches after graduation.
          </p>
          <div className="service-btn">
            <Button btnTitle={'Apply Now'} />
          </div>
        </div>

        <div className="service-clipath"></div>
        <div class="custom-shape-divider-bottom-1689514587">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="next">
        <div data-aos="fade-right" className="next-partOne">
          <h2>
            Our Tachnical facilitators driven to your{' '}
            <span className="success">Success</span>{' '}
          </h2>
        </div>
        <div data-aos="fade-left" className="next-partTwo">
          <p>
            Every Shecancode School graduate is paired 1:1 with an experienced
            technical facilitators committed to helping YOU find a job you’re
            excited about.
            <br /> <br />
            We’ve tracked our outcomes since 2018, and continue to celebrate
            consistent edicating young women in doftware development.
            <br /> <br />
            There are so many interesting problems to solve, and companies need
            diverse and ambitious graduates like you to get to work on these
            challenges. <br /> <br />{' '}
          </p>
        </div>
      </div>
      <div>
        <div class="custom-shape-divider-bottom-1689517765">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="fluent-campany">
        <h1>

          Prepare yourself to work for some of the most influential companies.

        </h1>
        <div className="company-image" data-aos="fade-up">
          <img src={amali} alt="" />
          <img src={hence} alt="" />
          <img src={thegym} alt="" />

          <img src={umurava} alt="" />

        </div>
      </div>
      <div className="job">
        <h1>Proven Job Search</h1>
        <div className="job-search">
          <div data-aos="fade-right" className="job-partOne">
            <h1>16 weeks of career coaching</h1>
            <p>
              {' '}
              Join the bootcamp to get job-ready with practical, hands-on
              learning. You will learn the skills and gain experience the market
              demands. Learn from industry experts, and join the community of
              problem solvers. SheCanCODE curriculum focuses on real-world
              projects, skills, and labs to prepare you to become job ready
              after graduation
            </p>
          </div>
          <div data-aos="fade-left" className="job-partTwo">
            <img src={study} alt="" />
          </div>
        </div>
        <div className="job-search">
          <div data-aos="fade-right" className="job-partThree">
            <img src={job} alt="" />
          </div>
          <div data-aos="fade-left" className="job-partTwo">
            <h1>Career guidance and Technical Mentorship. </h1>
            <p>
              {' '}
              Work with our career support team to help you determine your next
              chapter after graduation. Our career team supports SheCanCODE
              students to write their technical resumes and conduct interview
              practices to prepare for job interviews. Have 1:1 mentors who are
              working industry to learn what it takes to be a successful
              software developer.{' '}
            </p>
          </div>
        </div>
        <div className="job-search">
          <div data-aos="fade-right" className="job-partOne">
            <h1>Joining SheCanCODE Community:</h1>
            <p>
              SheCanCODE has more than 400 alumni who have graduated from the
              program and currently working in the tech industry. By joining the
              program you build connection and sisterhood to support one another
              to secure the career of your dream.{' '}
            </p>
          </div>
          <div data-aos="fade-left" className="job-partTwo">
            <img src={career} alt="" style={{ height: '350px' }} />
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="job-container">
        <h1>
          <span>How will be ready for job a</span> Search?
        </h1>
        <div className="job-content">
          <p>
            Led by the Academic team, our in-program, job-readiness-focused
            Career Workshops will help you prepare for a successful job search
            and understand how you will work with your Career Coaching
            experience after graduation.
          </p>
          <ul>
            <li>
              <span>Phase 1:</span>Set your goals and abtain a relevant
              education{' '}
              <button onClick={() => setShow(!show)}>{show ? '-' : '+'}</button>
            </li>
            {show ? (
              <div className="hidden-content">
                <p>
                  {' '}
                  Determine why you want to become a software developer and
                  define your career goals. attend online courses, coding
                  bootcamps, or self-study to gain the necessary knowledge.
                </p>
              </div>
            ) : null}
            <li>
              <span>Phase 2:</span>Learn programming languages and Build your
              portifolio
              <button onClick={() => setHide(!hide)}>{hide ? '-' : '+'}</button>
            </li>
            {hide ? (
              <div className="hidden-content">
                <p>
                  {' '}
                  Gain proficiency in programming languages commonly used in
                  software development. Develop projects that showcase your
                  skills and understanding of programming concepts.{' '}
                </p>
              </div>
            ) : null}
            <li>
              <span>Phase 3:</span>Gain practical experience{' '}
              <button onClick={() => setVisible(!visible)}>
                {visible ? '-' : '+'}
              </button>
            </li>
            {visible ? (
              <div className="hidden-content">
                <p>
                  Seek internships, part-time jobs, or freelance opportunities
                  to gain real-world experience and understand how software
                  development works in professional settings. Software
                  developers need strong problem-solving skills. Practice by
                  participating in coding challenges, solving algorithmic
                  problems, or working on coding exercises.{' '}
                </p>
              </div>
            ) : null}
            <li>
              <span>Phase 4:</span>Stay updated with industry trends, Network
              and collaborate
              <button onClick={() => setView(!view)}>{view ? '-' : '+'}</button>
            </li>
            {view ? (
              <div className="hidden-content">
                <p>
                  {' '}
                  The field of software development is constantly evolving. Stay
                  abreast of new technologies, frameworks, Connect with other
                  developers, join professional communities, and attend meetups
                  or conferences
                </p>
              </div>
            ) : null}
            <li>
              <span>Phase 5:</span>Create strong resume and Apply for software
              development opt
              <button onClick={() => setItem(!item)}>{item ? '-' : '+'}</button>
            </li>
            {item ? (
              <div className="hidden-content">
                <p>
                  {' '}
                  Craft a well-designed resume that highlights your relevant
                  skills, projects, and experience.Start applying for
                  entry-level or junior software developer positions.
                </p>
              </div>
            ) : null}
          </ul>
          <p>
            *Alongside the workshops in Phase 2 and Phase 4 you will complete
            and submit a Linkedin and Resume Career Assignment. Once submitted,
            a Career Coach will review them and share feedback to help you get a
            head start on your career journey.
          </p>
        </div>
      </div>

      <div data-aos="fade-in" className="schedule-footer">
        <div className="schedule">
          <img src={img} alt="" />
        </div>
      </div>

      <div className="graduates">
        <div className="graduates-container">
          <div data-aos="fade-right">
            <h1>From Our graduates</h1>
            <ul>
              {graduatesData.map((graduate, index) => (
                <React.Fragment key={index}>
                  <li onClick={() => handleGraduateClick(graduate, index)}>
                    {graduate.name}
                  </li>
                  {clickedIndex === index &&
                    index !== graduatesData.length - 1 && <hr />}
                </React.Fragment>
              ))}
            </ul>
          </div>
          <div data-aos="flip-left" className="graduate-said">
            <div className="graduate-image">
              <img src={selectedGraduate.imageSrc} alt="" />
            </div>
            <div className="graduate-content">
              <p>{selectedGraduate.content}</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Services;
