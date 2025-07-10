import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSize } from '../../redux/reducers/selectSize';
import SizeGuideModal from '../SizeGuideModal';

const SizeOptions = ({ options }) => {
  const dispatch = useDispatch();
  const { selectedSize } = useSelector(state => state.selectedSize);
  console.log("size: " + selectedSize?.value)
  const [isSizeGuideOpen, setSizeGuide] = useState(false);
  const option = options[0];

  const handleSelect = size => {
    dispatch(setSelectedSize(size));
  };

  return (
    <>
      <div className="size mt-30">
        <h6 className="text-black">
          <span>{option.title}-</span> UK/IND
        </h6>
        <button
          onClick={() => setSizeGuide(true)}
          className="btn-blank text-underline"
        >
          Size Guide
        </button>
        <SizeGuideModal
          isOpen={isSizeGuideOpen}
          onClose={() => setSizeGuide(false)}
        />
      </div>

      <ul className="size-button mt-10" id="main-size">
         {option?.items.map((item, index) => (          <li key={index}>
            <button
              onClick={() => handleSelect(item)}
              className={`btn-bordered-grey ${selectedSize?.id == item.id ? 'active' : ''}`}
            >
              {item.value}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SizeOptions;