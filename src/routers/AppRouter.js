import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// PAGES
import Home from '../components/Home'
import Contact from '../components/Contact'
import Products from '../components/Products'
import Product from '../components/Product'
import NotFound from '../components/NotFound'
import CreateProduct from '../components/CreateProduct'

// COMPONENTS
import Navbar from '../components/Navbar'

const AppRouter = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/products" component={Products} />
          <Route path="/product/:productId" component={Product} />
          <Route path="/create" component={CreateProduct} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  )
}

export default AppRouter
