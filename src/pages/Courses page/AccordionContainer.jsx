import Accordion from '../../components/Accordion'; 

const AccordionContainer = (props) => {
  const {accordions, setAccordions } = props;

  
  const toggleAccordion = (accordionkey) => { 
    const updatedAccordions = accordions.map((accord) => { 
      if (accord.key === accordionkey) { 
        return { ...accord, isOpen: !accord.isOpen }; 
      } else { 
        return { ...accord, isOpen: false }; 
      } 
    }); 

    setAccordions(updatedAccordions); 
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