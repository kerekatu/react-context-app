import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

// CONTEXT
import { ProductContext } from '../context/ProductContext'

const Products = () => {
  const { products, deleteProduct } = useContext(ProductContext)

  const productList = products.length ? (
    products.map(product => (
      <article key={product.ProductId}>
        <h2>{product.productTitle}</h2>
        <p>
          {product.productInfo.substring(0, 6)}...{' '}
          <Link to={`/nyhed/${product.ProductId}`}>Læs mere</Link>
        </p>
        <button onClick={() => deleteProduct(product.ProductId)}>
          Slet denne produkt
        </button>
      </article>
    ))
  ) : (
    <div>Der er ikke nogle produkter</div>
  )

  return <div className="products">{productList}</div>
}

export default Products
