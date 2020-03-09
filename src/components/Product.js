import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const Product = props => {
  const { findProduct } = useContext(ProductContext);

  let newProductId = +props.match.params.productId;
  const product = findProduct(newProductId);

  return (
    <div className="product" key={product.productId}>
      <h2>{product.productTitle}</h2>
      <p>{product.productInfo}</p>
      <p>{product.productPrice} DKK</p>
      <img src={product.productImg} alt={`Product ${product.productId}`} />
    </div>
  );
};

export default Product;
