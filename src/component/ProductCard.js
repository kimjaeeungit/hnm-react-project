import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item?.id}`);
    console.log('item', item);
  };
  return (
    <div className="card-wrap" onClick={showDetail}>
      <img className="card-img" src={item?.img} />
      <div className="choice">
        {item?.choice == true ? 'Conscious choice' : ''}
      </div>
      <div className="card-font">{item?.title}</div>
      <div className="card-font">{item?.price}</div>
      <div className="new">{item?.new == true ? '신제품' : ''}</div>
    </div>
  );
};

export default ProductCard;
