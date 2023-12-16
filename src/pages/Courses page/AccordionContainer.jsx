import Accordion from '../../components/Accordion'; 
import { useState } from 'react'; 

const AccordionContainer = () => {
  const [accordions, setAccordion] = useState([ 
    { 
      key: 1, 
      title: 'What is Mobile Application Development?', 
      data: `Mobile application development is the art of creating software applications that run on mobile devices. In today's digital age, mobile apps play a crucial role in various aspects of our lives, from communication to entertainment, education, and business. Learning mobile app development equips you with the skills to shape the future and make a meaningful impact.`, 
      isOpen: false
    }, 
    { 
      key: 2, 
      title: 'Why Mobile Application Development Matters', 
      data: `Mobile applications are the heartbeat of innovation in today's digital landscape. From enhancing user experiences to shaping industries, mobile app development is a dynamic field with boundless possibilities. Embrace the future by acquiring the skills needed to create cutting-edge mobile solutions that address the demands of our fast-paced world.`, 
      isOpen: false
    }, 
    { 
      key: 3, 
      title: 'Who Should join?', 
      data: `This program is specifically designed for young girls and women who are passionate, determined, and creative individuals seeking empowerment in the tech industry. If you have a strong desire to excel in technology, innovate, and make a meaningful impact, this program is tailored to support and nurture your skills and ambitions.`, 
      isOpen: false
    }, 
  ]); 

  const toggleAccordion = (accordionkey) => { 
    const updatedAccordions = accordions.map((accord) => { 
      if (accord.key === accordionkey) { 
        return { ...accord, isOpen: !accord.isOpen }; 
      } else { 
        return { ...accord, isOpen: false }; 
      } 
    }); 

    setAccordion(updatedAccordions); 
  }; 

  return (
    <>
      {accordions.map((accordion) => ( 
        <Accordion 
          key={accordion.key} 
          title={accordion.title} 
          data={accordion.data} 
          isOpen={accordion.isOpen} 
          toggleAccordion={() => toggleAccordion(accordion.key)} 
        /> 
      ))}
    </>
  )
}

export default AccordionContainer