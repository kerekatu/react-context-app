import React, { createContext, useState } from 'react'

export const ProductContext = createContext()

const ProductContextProvider = props => {
  const [products, setProducts] = useState([
    {
      productId: 23,
      productTitle: "Fusilli L'italiana",
      productInfo: '400 g / Pasta Zara',
      productPrice: 3.8,
      productImg: 'pasta.jpg'
    },
    {
      productId: 12,
      productTitle: 'Kiks m. kakaocreme',
      productInfo: '2 pk / 268 g / Hit',
      productPrice: 17.95,
      productImg: 'kiks.jpg'
    },
    {
      productId: 56,
      productTitle: 'Luksusrogn',
      productInfo: '2 x 200 g / Amanda',
      productPrice: 32.95,
      productImg: 'rogn.jpg'
    },
    {
      productId: 9,
      productTitle: 'Kaffe bl. 95 øko.',
      productInfo: '400 g / fairtrade/ malet kaffe / Peter Larsen Kaffe',
      productPrice: 55.95,
      productImg: 'kaffe.jpg'
    }
  ])

  const addProduct = (title, info, price, img) => {
    let id = Math.floor(Math.random() * 1)
    setProducts([
      ...products,
      {
        id,
        productTitle: title,
        productInfo: info,
        productPrice: price,
        productImg: img
      }
    ])
  }

  const deleteProduct = id => {
    setProducts(products.filter(index => index.productId !== id))
  }

  const findProduct = id => {
    return products.find(index => index.productId === id)
  }

  return (
    <ProductContext.Provider
      value={{ products, addProduct, deleteProduct, findProduct }}
    >
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider
