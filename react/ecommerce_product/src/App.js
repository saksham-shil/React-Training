import React, { useState } from 'react';

const App = () => {
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [fullSizeGuideOpen, setFullSizeGuideOpen] = useState(false);

  const openSizeGuide = () => setSizeGuideOpen(true);
  const closeSizeGuide = () => setSizeGuideOpen(false);
  const openFullSizeGuide = () => setFullSizeGuideOpen(true);
  const closeFullSizeGuide = () => setFullSizeGuideOpen(false);
  const backToSizeGuide = () => {
    setFullSizeGuideOpen(false);
    setSizeGuideOpen(true);
  };

  return (
    <>
    
    </>
  )


  return (
    <>
      {/* HEADER */}
      

      {/* BREADCRUMB */}
      

      {/* PRODUCTS-MAIN */}
      <section className="products-main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="elevate-zoom">
                <img 
                  id="img_01" 
                  src="../assets/images/product_image_small.jpg" 
                  data-zoom-image="../assets/images/product_image.png" 
                  className="d-dsk"
                />
                <img 
                  src="../assets/images/product_image.png" 
                  className="d-mbl" 
                  data-zoom-image="../assets/images/product_image.png"
                />
                <div id="gal1" className="d-dsk">
                  <a href="#" data-image="../assets/images/product_image_small.jpg" data-zoom-image="../assets/images/product_image.png">
                    <img src="../assets/images/search-img-1.png" />
                  </a>
                  <a href="#" data-image="../assets/images/product_image_small.jpg" data-zoom-image="../assets/images/product_image.png">
                    <img src="../assets/images/search-img-1.png" />
                  </a>
                  <a href="#" data-image="../assets/images/product_image_small.jpg" data-zoom-image="../assets/images/product_image.png">
                    <img src="../assets/images/search-img-1.png" />
                  </a>
                </div>
              </div>
              <div className="authentication-text mt-40 d-dsk">
                <p className="text-black">Authenticated by:</p>
                <img src="../assets/images/authenticated-img.png" alt="" className="d-block img-fluid" />
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="product-desc d-dsk">
                <h3>Versache Collection</h3>
                <p className="text-black">Orange graphic print polo</p>
                <div className="price mt-30">
                  <p>
                    <del><i className="fas fa-rupee-sign"></i> 26,500</del>&nbsp;&nbsp; 
                    <span className="text-black"><i className="fas fa-rupee-sign"></i> 15,950</span> &nbsp; 
                    <span className="text-error">(40% off)</span>
                  </p>
                  <span className="text-grey">Incl. Duties & GST, EMI starts @ 887/month</span>
                </div>
                <div className="size mt-30">
                  <h6 className="text-black"><span>Size -</span> UK/IND</h6>
                  <button onClick={openSizeGuide} className="btn-blank text-underline">Size Guide</button>
                </div>
                <ul className="size-button mt-10" id="main-size">
                  <li><button className="btn-bordered-grey">S</button></li>
                  <li><button className="btn-bordered-grey">M</button></li>
                  <li><button className="btn-bordered-grey">L</button></li>
                </ul>
                <div className="add-to-cart-btn mt-20">
                  <button className="btn-primary">ADD TO BAG</button>
                  <button className="btn-blank">
                    <img src="../assets/images/icons/wishlist.svg" className="img-fluid mx-auto d-block" />
                  </button>
                </div>
                
                {/* Accordion */}
                <div className="accordion mt-30" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <b>Description</b>
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Amp up your wardrobe with this orange classic fit mesh polo from Ralph Lauren crafted in cotton featuring short sleeves, spread collar and button placket.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <b>Delivery Timeline</b>
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <b>Authencity Guarantee</b>
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        <b>Style Code & Color</b>
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="style-box">
                          <p>Style Code: &nbsp;&nbsp;106-lot4932</p>
                          <p className="color">Color: &nbsp;&nbsp;<span className="red-box">&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        <b>5% Cashback</b>
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <div className="style-box">
                          <p>Style Code: &nbsp;&nbsp;106-lot4932</p>
                          <p className="color">Color: &nbsp;&nbsp;<span className="red-box">&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="share mt-30">
                  <ul>
                    <li><p className="text-black">Share:</p></li>
                    <li><a href=""><img src="../assets/images/icons/Facebook.svg" className="img-fluid mx-auto d-block" /></a></li>
                    <li><a href=""><img src="../assets/images/icons/Instagram.svg" className="img-fluid mx-auto d-block" /></a></li>
                    <li><a href=""><img src="../assets/images/icons/Pinstrest.svg" className="img-fluid mx-auto d-block" /></a></li>
                    <li><a href=""><img src="../assets/images/icons/Twitter.svg" className="img-fluid mx-auto d-block" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Mobile Product Info */}
            <div className="col-12 p-0">
              <section className="product-name bg-mobile-light mt-sm-20 text-center d-mbl">
                <div className="container-fluid">
                  <div className="row">
                    <h3 className="text-black">Ralph Lauren</h3>
                    <p className="desc-text">Aqua classic fit mesh polo</p>
                    <p className="text">
                      <i className="fas fa-rupee-sign"></i> <del>14,500</del>&nbsp;
                      <span className="text-black"><i className="fas fa-rupee-sign"></i> 8,950</span>
                      <span className="text-error">(83%)</span>
                    </p>
                    <span className="text-black">Incl. GST & Duties, EMI starts @ <i className="fas fa-rupee-sign"></i> 498/month</span>
                    <div className="share-button">
                      <img src="../assets/images/icons/Share-Icon.png" alt="" className="img-fluid mx-auto d-block" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
            
            {/* Mobile Product Details */}
            <div className="col-12">
              <section className="products-main mt-25 d-mbl">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="product-desc">
                        <div id="app" className="d-mbl">
                          <div className="test" id="size_prod">
                            Select Size
                          </div>
                        </div>
                        {/* Mobile Accordion - same structure as desktop */}
                        <div className="accordion mt-20" id="accordionExampleMobile">
                          {/* Same accordion items as desktop */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Authenticated By Mobile */}
              <section className="authenticated-by spacer d-mbl">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <h5 className="text-black text-center">Authenticated By:</h5>
                      <img src="../assets/images/authenticated-img.png" className="img-fluid mx-auto d-block mt-25" alt="" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <div className="clearfix"></div>

      {/* FOOTER */}
      

      {/* Mobile Bottom Button */}
      <div className="bottom-buttton-prod d-mbl">
        <button className="btn-primary btn-fw">ADD TO BAG</button>
      </div>

      {/* SIZE GUIDE MODAL */}
      {sizeGuideOpen && (
        <div className="newsletter fp size-guide">
          <div className="bg"></div>
          <div className="center-box">
            <div className="newsletter-heading">
              <h3>SIZE GUIDE</h3>
              <button onClick={closeSizeGuide} className="btn-blank">
                <img src="../assets/images/icons/Cross-Button.png" className="close-btn-newsletter" alt="" />
              </button>
            </div>
            <div className="newsletter-body">
              <div className="product-info">
                <div className="row">
                  <div className="col-12">
                    <div className="heading bg-light mt-20">
                      <h4 className="text-black">Men's Clothing Top Wear</h4>
                    </div>
                  </div>
                  <div className="col-md-5 col-5 mt-25">
                    <img src="../assets/images/product_image.png" className="img-fluid mx-auto d-block" alt="" />
                  </div>
                  <div className="col-md-7 col-7 mt-25">
                    <div className="text">
                      <h5 className="text-black text-left">Versache Collection</h5>
                      <p className="text-left">Orange graphic print polo</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="table-responsive mt-25">
                      <table className="table text-center">
                        <thead>
                          <tr>
                            <th>Standard</th>
                            <th>IT Size</th>
                            <th>Collar Size (IN)</th>
                            <th>UK/US/IN</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>XXS</td><td>42</td><td>12-12.5</td><td>32,33</td></tr>
                          <tr><td>XS</td><td>44</td><td>13-13.5</td><td>34,35</td></tr>
                          <tr><td>S</td><td>46</td><td>14-14.5</td><td>36,37</td></tr>
                          <tr><td>M</td><td>48</td><td>15-15.5</td><td>38,39</td></tr>
                          <tr><td>L</td><td>50</td><td>16-16.5</td><td>40,41</td></tr>
                          <tr><td>XL</td><td>52</td><td>17-17.5</td><td>42,43</td></tr>
                          <tr><td>XXL</td><td>54</td><td>18-18.5</td><td>44,45</td></tr>
                          <tr><td>XXXL</td><td>56</td><td>19-19.5</td><td>46,47</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-md-6 mx-auto">
                    <button onClick={openFullSizeGuide} className="btn-primary mt-20">VIEW FULL SIZE GUIDE</button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-10 mx-auto">
                    <div className="bt-blck"></div>
                  </div>
                  <div className="col-12">
                    <section className="contact-section">
                      <div className="container">
                        <div className="row">
                          <div className="contact-us-section">
                            <div className="container-fluid">
                              <div className="row">
                                <div className="col-lg-4 col-md-6 col-6">
                                  <div className="content-box">
                                    <h6 className="text-black">Whatsapp</h6>
                                    <img src="../assets/images/icons/Whatsapp.svg" className="d-block img-fluid mx-auto mb-3" alt="Whats App" />
                                    <p><a href="https://wa.me/+918810420296" className="hidden-link">+91 88104 20296</a></p>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-6">
                                  <div className="content-box br-none">
                                    <h6 className="text-black">Email</h6>
                                    <img src="../assets/images/icons/Email.svg" className="d-block img-fluid mx-auto mb-3" alt="Email" />
                                    <p><a href="mailto:assistance@darveys.com" className="hidden-link">assistance@darveys.com</a></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="col-md-8 mx-auto">
                    <div className="disclaimer-text">
                      <p className="text-black">*Please note the measurements may vary according to different brand and styles.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FULL SIZE GUIDE MODAL */}
      {fullSizeGuideOpen && (
        <div className="newsletter fp size-guide">
          <div className="bg"></div>
          <div className="center-box">
            <div className="newsletter-heading">
              <h3>VIEW FULL SIZE GUIDE</h3>
              <button onClick={backToSizeGuide} className="btn-blank">
                <img src="../assets/images/icons/left-arrow-black.svg" className="back-btn-newsletter" alt="" />
              </button>
              <button onClick={closeFullSizeGuide} className="btn-blank">
                <img src="../assets/images/icons/Cross-Button.png" className="close-btn-newsletter" alt="" />
              </button>
            </div>
            <div className="newsletter-body">
              <div className="accordion" id="sizeGuideFullMain">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="MenSizeGuide">
                    <button className="accordion-button collapsed text-underline" type="button" data-bs-toggle="collapse" data-bs-target="#MenSizeGuideCollapse" aria-expanded="false" aria-controls="MenSizeGuideCollapse">
                      Men
                    </button>
                  </h2>
                  <div id="MenSizeGuideCollapse" className="accordion-collapse collapse" aria-labelledby="MenSizeGuide" data-bs-parent="#sizeGuideFullMain">
                    <div className="accordion-body">
                      {/* Nested accordion content */}
                      <div className="accordion" id="Meninner">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="topwear">
                            <button className="accordion-button text-grey" type="button" data-bs-toggle="collapse" data-bs-target="#topwearcollapse" aria-expanded="true" aria-controls="topwearcollapse">
                              Topwear
                            </button>
                          </h2>
                          <div id="topwearcollapse" className="accordion-collapse collapse show" aria-labelledby="topwear" data-bs-parent="#Meninner">
                            <div className="accordion-body">
                              {/* Size table */}
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="table-responsive mt-25">
                                    <table className="table text-center">
                                      <thead>
                                        <tr>
                                          <th>Standard</th>
                                          <th>IT Size</th>
                                          <th>Collar Size (IN)</th>
                                          <th>UK/US/IN</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr><td>XXS</td><td>42</td><td>12-12.5</td><td>32,33</td></tr>
                                        <tr><td>XS</td><td>44</td><td>13-13.5</td><td>34,35</td></tr>
                                        <tr><td>S</td><td>46</td><td>14-14.5</td><td>36,37</td></tr>
                                        <tr><td>M</td><td>48</td><td>15-15.5</td><td>38,39</td></tr>
                                        <tr><td>L</td><td>50</td><td>16-16.5</td><td>40,41</td></tr>
                                        <tr><td>XL</td><td>52</td><td>17-17.5</td><td>42,43</td></tr>
                                        <tr><td>XXL</td><td>54</td><td>18-18.5</td><td>44,45</td></tr>
                                        <tr><td>XXXL</td><td>56</td><td>19-19.5</td><td>46,47</td></tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Add other nested accordion items (Bottomwear, Activewear) here */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Add Women and Kids accordion items here */}
              </div>
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <div className="bt-blck"></div>
                </div>
                <div className="col-md-8 mx-auto">
                  <div className="disclaimer-text">
                    <p className="text-black">*Please note the measurements may vary according to different brand and styles.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;