import React, { useState, useEffect } from 'react';

const ProductImages = ({ images = [] }) => {
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    if (images.length > 0) {
      setMainImage(images[0].src);
    }
  }, [images]);

  if (!images.length) {
    return null;
  }

  return (
    <div className="product-images">
      <div className="row">
        <div className="col-md-12">
          <div className="product-image-main">
            {mainImage && (
              <img
                src={mainImage}
                alt="Main product"
                style={{ maxWidth: '500px', width: '100%' }}
              />
            )}
          </div>
        </div>
      </div>

      {/* --- Thumbnails --- */}
      <div className="row">
        <div className="col-md-12">
          <div className="product-image-thumbnails" style={{ marginTop: '1rem' }}>
             {images?.map((image, index) => (              <img
                key={index}
                src={image.src}
                style={{width: '80px',height: '80px'}}
                onClick={() => setMainImage(image.src)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImages;