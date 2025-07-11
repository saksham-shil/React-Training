import React from 'react';
import {Link} from 'react-router-dom'

const ProductShare = () => {
  return (
    <div className="share mt-30">
      <ul>
        <li><p className="text-black">Share:</p></li>
        <li><Link to="/#"><img src="assets/images/icons/Facebook.svg" className="img-fluid mx-auto d-block" alt="facebook"/></Link></li>
        <li><Link to="/#"><img src="assets/images/icons/Instagram.svg" className="img-fluid mx-auto d-block" alt="instagram"/></Link></li>
        <li><Link to="/#"><img src="assets/images/icons/Pinstrest.svg" className="img-fluid mx-auto d-block" alt="pinterest"/></Link></li>
        <li><Link to="/#"><img src="assets/images/icons/Twitter.svg" className="img-fluid mx-auto d-block" alt="twitter"/></Link></li>
      </ul>
    </div>
  );
};

export default ProductShare;