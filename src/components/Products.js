import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// CONTEXT
import { ProductContext } from '../context/ProductContext';

const Products = () => {
  const { products, deleteProduct } = useContext(ProductContext);

  const productList = products.length ? (
    products.map(product => (
      <article key={product.productId}>
        <h2>{product.productTitle}</h2>
        <p>
          {product.productInfo.length > 6
            ? `${product.productInfo.substring(0, 6)}...`
            : product.productInfo}
          {' -- '}
          <Link to={`/product/${product.productId}`}>Læs mere</Link>
        </p>
        <p>{product.productPrice} DKK</p>
        <img src={product.productImg} alt={`Product ${product.productId}`} />
        <button onClick={() => deleteProduct(product.productId)}>
          Slet denne produkt
        </button>
      </article>
    ))
  ) : (
    <div>Der er ikke nogle produkter</div>
  );

  return <div>{productList}</div>;
};

export default Products;
