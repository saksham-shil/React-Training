import React from 'react';

const ProductShare = () => {
  return (
    <div className="share mt-30">
      <ul>
        <li><p className="text-black">Share:</p></li>
        <li><a href="/#"><img src="assets/images/icons/Facebook.svg" className="img-fluid mx-auto d-block" alt="facebook"/></a></li>
        <li><a href="/#"><img src="assets/images/icons/Instagram.svg" className="img-fluid mx-auto d-block" alt="instagram"/></a></li>
        <li><a href="/#"><img src="assets/images/icons/Pinstrest.svg" className="img-fluid mx-auto d-block" alt="pinterest"/></a></li>
        <li><a href="/#"><img src="assets/images/icons/Twitter.svg" className="img-fluid mx-auto d-block" alt="twitter"/></a></li>
      </ul>
    </div>
  );
};

export default ProductShare;