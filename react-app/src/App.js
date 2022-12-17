import logo from './logo.svg';
import './App.css';
import React from "react";
import { Link, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <Link to='/'>ProductList</Link>
        <Link to='/add-product'>Add Product</Link>
      </div>

      <Routers>
        <Router path={'/'} element={<ProductList />} />
        <Route path={'/add-product'} element={<AddProduct/>}/>
        <Route path={'/product-update/:id'} element={<UpdateProduct/>}/>
      </Routers>
    </div>
  );
}

export default App;
