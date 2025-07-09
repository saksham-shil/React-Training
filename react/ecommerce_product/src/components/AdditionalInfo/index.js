import React, { useState } from 'react';

const AdditionalInfo = ({info, description}) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const accordionItems = [
    {
      name:"Description",
      value:description
    },
    ...info
  ]
  console.log(accordionItems)

  return (
    <div className="accordion mt-30" id="accordionExample">
      {accordionItems.map((item, index) => (
        <div className="accordion-item" key={item.name}>
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className={`accordion-button ${openIndex !== index ? 'collapsed' : ''}`}
              type="button"
              onClick={() => handleToggle(index)}
              aria-expanded={openIndex === index}
              aria-controls={`collapse${index}`}>
              <b>{item.name}</b>
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionExample">
            <div className="accordion-body" dangerouslySetInnerHTML={{ __html: item.value }}>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdditionalInfo;