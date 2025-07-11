import React, { useState, useEffect } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Breadcrumb from '../../components/common/Breadcrumb';
import ProductImages from '../../components/ProductImages';
import ProductDetails from '../../components/ProductDetails';
import axiosInstance from '../../services/axiosInstance';

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const postData = {
      id_currency: 'INR',
      iso_code: '1',
      email: '',
      platform: 'web',
      device_is_mobile: false,
      product_id: '2539205',
      product_url: 'green-embroidered-logo-polo-2539205',
    };

    const bodyFormData = new FormData();
    for (const key in postData) {
      bodyFormData.append(key, postData[key]);
    }

    axiosInstance
      .post('appGetProductDetails?version=1.11&__store=default', bodyFormData)
      .then(response => {
        console.log(response.data.product);
        if (response.data && response.data.product) {
          setProduct(response.data.product);
        } else {
          setError('Product not found.');
        }
      })
      .catch(err => {
        setError('Failed to fetch product details.');
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <>
      <Header />
      <div className="clearfix" />
      <Breadcrumb items={product.category_name} />
      <div className="clearfix" />
      <section className="products-main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <ProductImages images={product.images} />
            </div>
            <div className="col-md-4">
              <ProductDetails details={product} />
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix" />
      <Footer />
      <div className="clearfix" />
      <div className="bottom-buttton-prod d-mbl">
        <button className="btn-primary btn-fw">ADD TO BAG</button>
      </div>
    </>
  );
};

export default ProductPage;