import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PublicRoute from "./routers/PublicRoute";
import HomePage from "./pages/HomePage";
import { store } from "./redux/store";
import { Provider } from 'react-redux'
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import PrivateLayout from "./layouts/PrivateLayout";
import ProductManagement from "./pages/Private/ProductManagement";
import ProductList from "./pages/Private/ProductManagement/ProductList";
import CreateProduct from "./pages/Private/ProductManagement/CreateProduct";



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute page={<HomePage />} />}/>
        <Route path=":category" element={<PublicRoute page={<ProductListPage />} />}/>
        <Route path=":category/:product" element={<PublicRoute page={<ProductDetailPage />} />}/>
        <Route path="login" element={<PublicRoute page={<SignInPage />} />}/>
        <Route path="register" element={<PublicRoute page={<SignUpPage />} />}/>
        <Route path="admin" element={<PublicRoute page={<PrivateLayout/>}/>}>
          <Route path="product" element={<ProductManagement/>}>
            <Route index element={<ProductList/>}/>
            <Route path="product-list" element={<ProductList/>}/>
            <Route path="create-product" element={<CreateProduct/>}/>
            <Route path="update-product/:id" element={<CreateProduct/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
    
  );
}

export default App;
