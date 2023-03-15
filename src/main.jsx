import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header';
import Home from './Home';
import NotFound from './NotFound';
import About from './About';
import CryptoDetail from './CryptoDetail';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './routes/Root';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import CreateProduct from './pages/CreateProduct';
import ProductDetails from './pages/ProductDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} >
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='cryptodetail/:cryptoSymbol' element={<CryptoDetail />} />
      <Route path='cryptodetail/:cryptoSymbol/:id' element={<CryptoDetail />} />
      <Route path='product'>
        <Route index element={<Product />} />
        <Route path='list' element={<ProductList />} />
        <Route path='create' element={<CreateProduct />} />
        {/* <Route path='details' element={<ProductDetails />} /> */}
        <Route path='details/:productId' element={<ProductDetails />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
  //   [
  //   {
  //     path: '/',
  //     element: <Home />
  //   },
  //   {
  //     path: '/about',
  //     element: <About />
  //   }
  // ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <div style={{ color: 'white' }}>
    <RouterProvider router={router} />
  </div>,
)
