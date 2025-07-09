import React from 'react';

const Breadcrumb = ({ items }) => {
  return (
    <section className="mt-10 d-dsk">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="breadcrumb">
              <ul>
                {items.map((item, index) => (
                  <li key={index}>
                    {item.last === '1' ? (item.label) 
                    : (<a href={item.link}>{item.label}</a>)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;