import React from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../../services/axiosInstance'

const AddToCart = ({product}) => {
   const {selectedSize} = useSelector(state => state.selectedSize);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size.');
      return;
    }

    const cartProducts = {
      request_type: 'add',
      voucher: '',
      user_type: '',
      email: '',
      coupon: '',
      cart_products: [
        {
          giftcard_fields: '',
          product_type: 'configurable',
          id_product_attribute: [
            {
              qty: 0,
              value: selectedSize.id,
              id: product.options[0].id,
              required: '1',
              name: selectedSize.value,
              quantity: 1,
            },
          ],
          custom_options: [],
          quantity: 1,
          product_id: product.id_product,
          minimal_quantity: 0,
        },
      ],
      customization_details: [],
      session_id: localStorage.getItem('SID'),
    };

    const postData = {
      id_currency: 'INR',
      iso_code: '1',
      email: '',
      platform: 'web',
      device_is_mobile: false,
      cart_products: JSON.stringify(cartProducts),
    };

    const bodyFormData = new FormData();
    for (const key in postData) {
      bodyFormData.append(key, postData[key]);
    }

    axiosInstance
      .post('appAddToCart?version=1.11&__store=default', bodyFormData)
      .then(response => {
        console.log('Add to cart response:', response.data);
        alert('Product added to cart!');
      })
      .catch(err => {
        console.error('Failed to add to cart:', err);
        alert('Failed to add product to cart.');
      });
  };

  return (
    <div className="add-to-cart-btn mt-20">
      <button className="btn-primary" onClick={handleAddToCart}>ADD TO BAG</button>
      <button className="btn-blank"><img src="assets/images/icons/wishlist.svg" className="img-fluid mx-auto d-block" alt="wishlist" /></button>
    </div>
  );
};

export default AddToCart;