import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axiosInstance from '../../services/axiosInstance';

const SizeGuideModal = ({ isOpen, onClose }) => {
  const [isFullGuideOpen, setFullGuide] = useState(false);
  const [size, setSize] = useState();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true)

  const handleViewFullGuide = () => {
    setFullGuide(true);
  };

  const handleBackToMain = () => {
    setFullGuide(false);
  };

  const handleClose = () => {
    setFullGuide(false);
    onClose();
  };

  useEffect(() => {
    const postData = {
      id_currency: 'INR',
      iso_code: '1',
      email: '',
      platform: 'web',
      device_is_mobile: false,
      product_id: '2539205',
    };

    const bodyFormData = new FormData();
    for (const key in postData) {
      bodyFormData.append(key, postData[key]);
    }

    axiosInstance
      .post('appGetSizeChart?version=1.11&__store=default', bodyFormData)
      .then(response => {
        console.log(response);
        setSize(response.data);
      })
      .catch(err => {
        setError('Failed to fetch product details.');
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (!isOpen) return null;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!size) {
    return <div>size not found.</div>;
  }

  return ReactDOM.createPortal(
    <>
      {!isFullGuideOpen && (
        <div className="newsletter fp size-guide" id="size-guide-form">
          <div className="bg"></div>
          <div className="center-box">
            <div className="newsletter-heading">
              <h3>{size.title_text}</h3>
              <button onClick={handleClose} className="btn-blank">
                <img
                  src="assets/images/icons/Cross-Button.png"
                  className="close-btn-newsletter"
                  alt=""
                />
              </button>
            </div>
            <div className="newsletter-body">
              <div className="product-info">
                <div className="row">
                  <div className="col-12">
                    <div className="heading bg-light mt-20">
                      <h4 className="text-black">{size.subtitle_text}</h4>
                    </div>
                  </div>
                  <div className="col-md-5 col-5 mt-25">
                    <img
                      src={size.product_details.image_src}
                      className="img-fluid mx-auto d-block"
                      alt=""
                    />
                  </div>
                  <div className="col-md-7 col-7 mt-25">
                    <div className="text">
                      <h5 className="text-black text-left">
                        {size.product_details.designer_name}
                      </h5>
                      <p className="text-left">{size.product_details.name}</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="table-responsive mt-25">
                      <table className="table text-center">
                        <thead>
                          <tr>
                            {size.row_header_text.map((item, index) => (
                              <th key = {index}>{item}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {size.row_data.map((item, index) => (
                            <tr key = {index}>
                              {item.map((item2, index2) => (
                                <td key = {index}>{item2}</td>
                              ))}
                            </tr>
                          ))}
                          {/* <tr>
                            <td>XXS</td>
                            <td>42</td>
                            <td>12-12.5</td>
                            <td>32,33</td>
                          </tr>
                          <tr>
                            <td>XS</td>
                            <td>44</td>
                            <td>13-13.5</td>
                            <td>34,35</td>
                          </tr>
                          <tr>
                            <td>S</td>
                            <td>46</td>
                            <td>14-14.5</td>
                            <td>36,37</td>
                          </tr>
                          <tr>
                            <td>M</td>
                            <td>48</td>
                            <td>15-15.5</td>
                            <td>38,39</td>
                          </tr>
                          <tr>
                            <td>L</td>
                            <td>50</td>
                            <td>16-16.5</td>
                            <td>40,41</td>
                          </tr>
                          <tr>
                            <td>XL</td>
                            <td>52</td>
                            <td>17-17.5</td>
                            <td>42,43</td>
                          </tr>
                          <tr>
                            <td>XXL</td>
                            <td>54</td>
                            <td>18-18.5</td>
                            <td>44,45</td>
                          </tr>
                          <tr>
                            <td>XXXL</td>
                            <td>56</td>
                            <td>19-19.5</td>
                            <td>46,47</td>
                          </tr> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-md-6 mx-auto">
                    <button className="btn-primary mt-20" onClick={handleViewFullGuide}>
                      VIEW FULL SIZE GUIDE
                    </button>
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
                                    <img
                                      src="assets/images/icons/Whatsapp.svg"
                                      className="d-block img-fluid mx-auto mb-3"
                                      alt="Whats App"
                                    />
                                    <p>
                                      <a
                                        href="https://wa.me/+918810420296"
                                        className="hidden-link"
                                      >
                                        +91 88104 20296
                                      </a>
                                    </p>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-6">
                                  <div className="content-box br-none">
                                    <h6 className="text-black">Email</h6>
                                    <img
                                      src="assets/images/icons/Email.svg"
                                      className="d-block img-fluid mx-auto mb-3"
                                      alt="Email"
                                    />
                                    <p>
                                      <a
                                        href="mailto:assistance@darveys.com"
                                        className="hidden-link"
                                      >
                                        assistance@darveys.com
                                      </a>
                                    </p>
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
                      <p className="text-black">
                        {size.help_subtitle_text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isFullGuideOpen && (
        <div className="newsletter fp size-guide" id="size-guide-full-form">
          <div className="bg"></div>
          <div className="center-box">
            <div className="newsletter-heading">
              <h3>VIEW FULL SIZE GUIDE</h3>
              <button className="btn-blank" onClick={handleBackToMain}>
                <img
                  src="assets/images/icons/left-arrow-black.svg"
                  className="back-btn-newsletter"
                  alt=""
                />
              </button>
              <button className="btn-blank" onClick={handleClose}>
                <img
                  src="assets/images/icons/Cross-Button.png"
                  className="close-btn-newsletter"
                  alt=""
                />
              </button>
            </div>
            <div className="newsletter-body">
              <div className="accordion" id="sizeGuideFullMain">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="MenSizeGuide">
                    <button
                      className="accordion-button collapsed text-underline"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#MenSizeGuideCollapse"
                      aria-expanded="false"
                      aria-controls="MenSizeGuideCollapse"
                    >
                      Men
                    </button>
                  </h2>
                  <div
                    id="MenSizeGuideCollapse"
                    className="accordion-collapse collapse"
                    aria-labelledby="MenSizeGuide"
                    data-bs-parent="#sizeGuideFullMain"
                  >
                    <div className="accordion-body">
                      <div className="accordion" id="Meninner">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="topwear">
                            <button
                              className="accordion-button text-grey"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#topwearcollapse"
                              aria-expanded="true"
                              aria-controls="topwearcollapse"
                            >
                              Topwear
                            </button>
                          </h2>
                          <div
                            id="topwearcollapse"
                            className="accordion-collapse collapse show"
                            aria-labelledby="topwear"
                            data-bs-parent="#Meninner"
                          >
                            <div className="accordion-body">
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
                                        <tr>
                                          <td>XXS</td>
                                          <td>42</td>
                                          <td>12-12.5</td>
                                          <td>32,33</td>
                                        </tr>
                                        <tr>
                                          <td>XS</td>
                                          <td>44</td>
                                          <td>13-13.5</td>
                                          <td>34,35</td>
                                        </tr>
                                        <tr>
                                          <td>S</td>
                                          <td>46</td>
                                          <td>14-14.5</td>
                                          <td>36,37</td>
                                        </tr>
                                        <tr>
                                          <td>M</td>
                                          <td>48</td>
                                          <td>15-15.5</td>
                                          <td>38,39</td>
                                        </tr>
                                        <tr>
                                          <td>L</td>
                                          <td>50</td>
                                          <td>16-16.5</td>
                                          <td>40,41</td>
                                        </tr>
                                        <tr>
                                          <td>XL</td>
                                          <td>52</td>
                                          <td>17-17.5</td>
                                          <td>42,43</td>
                                        </tr>
                                        <tr>
                                          <td>XXL</td>
                                          <td>54</td>
                                          <td>18-18.5</td>
                                          <td>44,45</td>
                                        </tr>
                                        <tr>
                                          <td>XXXL</td>
                                          <td>56</td>
                                          <td>19-19.5</td>
                                          <td>46,47</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="bottomwear">
                            <button
                              className="accordion-button text-grey collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#bottomwearcollapse"
                              aria-expanded="false"
                              aria-controls="bottomwearcollapse"
                            >
                              Bottomwear
                            </button>
                          </h2>
                          <div
                            id="bottomwearcollapse"
                            className="accordion-collapse collapse"
                            aria-labelledby="bottomwear"
                            data-bs-parent="#Meninner"
                          >
                            <div className="accordion-body">
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
                                        <tr>
                                          <td>XXS</td>
                                          <td>42</td>
                                          <td>12-12.5</td>
                                          <td>32,33</td>
                                        </tr>
                                        <tr>
                                          <td>XS</td>
                                          <td>44</td>
                                          <td>13-13.5</td>
                                          <td>34,35</td>
                                        </tr>
                                        <tr>
                                          <td>S</td>
                                          <td>46</td>
                                          <td>14-14.5</td>
                                          <td>36,37</td>
                                        </tr>
                                        <tr>
                                          <td>M</td>
                                          <td>48</td>
                                          <td>15-15.5</td>
                                          <td>38,39</td>
                                        </tr>
                                        <tr>
                                          <td>L</td>
                                          <td>50</td>
                                          <td>16-16.5</td>
                                          <td>40,41</td>
                                        </tr>
                                        <tr>
                                          <td>XL</td>
                                          <td>52</td>
                                          <td>17-17.5</td>
                                          <td>42,43</td>
                                        </tr>
                                        <tr>
                                          <td>XXL</td>
                                          <td>54</td>
                                          <td>18-18.5</td>
                                          <td>44,45</td>
                                        </tr>
                                        <tr>
                                          <td>XXXL</td>
                                          <td>56</td>
                                          <td>19-19.5</td>
                                          <td>46,47</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="activewear">
                            <button
                              className="accordion-button collapsed text-grey"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#activewearcollapse"
                              aria-expanded="false"
                              aria-controls="activewearcollapse"
                            >
                              Activewear
                            </button>
                          </h2>
                          <div
                            id="activewearcollapse"
                            className="accordion-collapse collapse"
                            aria-labelledby="activewear"
                            data-bs-parent="#Meninner"
                          >
                            <div className="accordion-body">
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
                                        <tr>
                                          <td>XXS</td>
                                          <td>42</td>
                                          <td>12-12.5</td>
                                          <td>32,33</td>
                                        </tr>
                                        <tr>
                                          <td>XS</td>
                                          <td>44</td>
                                          <td>13-13.5</td>
                                          <td>34,35</td>
                                        </tr>
                                        <tr>
                                          <td>S</td>
                                          <td>46</td>
                                          <td>14-14.5</td>
                                          <td>36,37</td>
                                        </tr>
                                        <tr>
                                          <td>M</td>
                                          <td>48</td>
                                          <td>15-15.5</td>
                                          <td>38,39</td>
                                        </tr>
                                        <tr>
                                          <td>L</td>
                                          <td>50</td>
                                          <td>16-16.5</td>
                                          <td>40,41</td>
                                        </tr>
                                        <tr>
                                          <td>XL</td>
                                          <td>52</td>
                                          <td>17-17.5</td>
                                          <td>42,43</td>
                                        </tr>
                                        <tr>
                                          <td>XXL</td>
                                          <td>54</td>
                                          <td>18-18.5</td>
                                          <td>44,45</td>
                                        </tr>
                                        <tr>
                                          <td>XXXL</td>
                                          <td>56</td>
                                          <td>19-19.5</td>
                                          <td>46,47</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="WomenSizeGuide">
                    <button
                      className="accordion-button collapsed text-underline"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#WomenSizeGuideCollapse"
                      aria-expanded="false"
                      aria-controls="WomenSizeGuideCollapse"
                    >
                      Women
                    </button>
                  </h2>
                  <div
                    id="WomenSizeGuideCollapse"
                    className="accordion-collapse collapse"
                    aria-labelledby="WomenSizeGuide"
                    data-bs-parent="#sizeGuideFullMain"
                  >
                    <div className="accordion-body">
                      <p className="text-black">
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris viverra veniam sit amet lacus cursus. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin ante orci ut nulla. Sed non pretium magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque sagittis lacus eu eros bibendum imperdiet. Nullam ut convallis tortor. Donec sit amet dolor in ligula faucibus consequat. Ut convallis eleifend dolor. Nunc cursus suscipit interdum. Vestibulum ut aliquet risus. In hac habitasse platea dictumst. Ut in turpis consequat, porta velit a, faucibus nunc. Tres faucibus ornare suscipit lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="KidsSizeGuide">
                    <button
                      className="accordion-button collapsed text-underline"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#KidsSizeGuideCollapse"
                      aria-expanded="false"
                      aria-controls="KidsSizeGuideCollapse"
                    >
                      Kids
                    </button>
                  </h2>
                  <div
                    id="KidsSizeGuideCollapse"
                    className="accordion-collapse collapse"
                    aria-labelledby="KidsSizeGuide"
                    data-bs-parent="#sizeGuideFullMain"
                  >
                    <div className="accordion-body">
                      <p className="text-black">
                        Curabitur blandit tempus ardua ridiculus mus mauris. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna mollis ornare vel eu leo. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <div className="bt-blck"></div>
                </div>
                <div className="col-md-8 mx-auto">
                  <div className="disclaimer-text">
                    <p className="text-black">
                      {size.help_subtitle_text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>,
    document.getElementById('modal-root')
  );
};

export default SizeGuideModal;