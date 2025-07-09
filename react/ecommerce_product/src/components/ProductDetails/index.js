import React from 'react';
import SizeOptions from '../SizeOptions';
import AddToCart from '../AddToCart';
import AdditionalInfo from '../AdditionalInfo';
import ProductShare from '../ProductShare';

const ProductDetails = ({details}) => {
  
  return (
    <div className="product-desc d-dsk">
      <h3>{details.designer_name}</h3>
      <p className="text-black">{details.name}</p>
      <div className="price mt-30">
        <p><del><i className="fas fa-rupee-sign"></i> {details.price}</del>&nbsp;&nbsp; <span className="text-black"><i className="fas fa-rupee-sign"></i> {details.discount_price}</span> &nbsp; <span className="text-error">({details.discount_percentage} % off)</span></p>
        <span className="text-grey">{details.product_info[1].value}</span>
      </div>
      <SizeOptions options={details.options}/>
      <AddToCart product={details} />
      <AdditionalInfo info={details.product_additional_info} description={details.description}/>
      <ProductShare />
    </div>
  );
};

export default ProductDetails;