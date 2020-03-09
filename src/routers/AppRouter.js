import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// CONTEXT PROVIDER'
import ProductContextProvider from '../context/ProductContext';

// PAGES
import Home from '../components/Home';
import Contact from '../components/Contact';
import Products from '../components/Products';
import Product from '../components/Product';
import NotFound from '../components/NotFound';
import CreateProduct from '../components/CreateProduct';

// COMPONENTS
import Navbar from '../components/Navbar';

const AppRouter = () => {
  return (
    <ProductContextProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/products" component={Products} />
          <Route path="/product/:productId" component={Product} />
          <Route path="/create" component={CreateProduct} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ProductContextProvider>
  );
};

export default AppRouter;
