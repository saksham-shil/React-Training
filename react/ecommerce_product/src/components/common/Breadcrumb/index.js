import React from 'react'

const Breadcrumb = () => {
  return (
    <>
     <section className="mt-10 d-dsk">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb">
                <ul>
                  <li>Home</li>
                  <li><a href="#">Men</a></li>
                  <li><a href="#">Clothing</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="clearfix"></div> 
    </>
  )
}

export default Breadcrumb
