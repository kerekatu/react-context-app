import React, { useState, useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import Products from './Products';

const createProduct = () => {
  const { addProduct } = useContext(ProductContext);
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (title && info && +price) {
      addProduct(title, info, price);
      setTitle('');
      setInfo('');
      setPrice('');
    }
  };

  return (
    <div>
      <h2>Opret et nyt produkt</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Produkt Overskrift"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Produkt info"
          value={info}
          onChange={e => setInfo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Produkt Pris"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <br />
        <input type="submit" value="Gem produkt" />
      </form>
      <br />
      <hr />
      <Products />
    </div>
  );
};

export default createProduct;
