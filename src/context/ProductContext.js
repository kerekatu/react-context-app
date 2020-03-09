import React, { createContext, useState } from 'react';

import productImgOne from '../../public/images/pasta.jpg';
import productImgTwo from '../../public/images/kiks.jpg';
import productImgThree from '../../public/images/rogn.jpg';
import productImgFour from '../../public/images/kaffe.jpg';

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      productId: 23,
      productTitle: "Fusilli L'italiana",
      productInfo: '400 g / Pasta Zara',
      productPrice: 3.8,
      productImg: productImgOne
    },
    {
      productId: 12,
      productTitle: 'Kiks m. kakaocreme',
      productInfo: '2 pk / 268 g / Hit',
      productPrice: 17.95,
      productImg: productImgTwo
    },
    {
      productId: 56,
      productTitle: 'Luksusrogn',
      productInfo: '2 x 200 g / Amanda',
      productPrice: 32.95,
      productImg: productImgThree
    },
    {
      productId: 9,
      productTitle: 'Kaffe bl. 95 øko.',
      productInfo: '400 g / fairtrade/ malet kaffe / Peter Larsen Kaffe',
      productPrice: 55.95,
      productImg: productImgFour
    }
  ]);

  const addProduct = (title, info, price) => {
    let id = Math.floor(Math.random() * 100);
    setProducts([
      ...products,
      {
        productId: id,
        productTitle: title,
        productInfo: info,
        productPrice: price,
        productImg: 'placeholder'
      }
    ]);
  };

  const deleteProduct = id => {
    setProducts(products.filter(index => index.productId !== id));
  };

  const findProduct = id => {
    return products.find(index => index.productId === id);
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, deleteProduct, findProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
