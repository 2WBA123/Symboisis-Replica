import React, { Suspense } from 'react';
import "./App.css";
import { ReactQueryDevtools } from "react-query/devtools";
import { Routes, Route } from "react-router";
// import Header from "./components/Header/Header";

//import MainPage from "./components/AdminPanel/Screens/MainPage/MainPage";
// import Footer from "./components/Footer/Footer";
const CreateProduct = React.lazy(() => import('./components/AdminPanel/components/Products/CreateProduct'));
const AllProduct = React.lazy(() => import('./components/AdminPanel/components/Products/AllProduct'));
const EditProduct = React.lazy(() => import('./components/AdminPanel/components/Products/EditProduct'));
const MainPage1 = React.lazy(() => import('./components/CustomerPanel/scree/MainPage'));
const ProductDetail = React.lazy(() => import('./components/CustomerPanel/Product/ProductDetail'));
const User = React.lazy(() => import('./components/AdminPanel/components/Users/User'));
const Login = React.lazy(() => import('./components/Auth/Login'));
const Signup = React.lazy(() => import('./components/Auth/Signup'));
const AllCategories = React.lazy(() => import('./components/AdminPanel/components/Categories/AllCategories'));
const CreateCategories = React.lazy(() => import('./components/AdminPanel/components/Categories/CreateCategories'));
const EditCategories = React.lazy(() => import('./components/AdminPanel/components/Categories/EditCategory'));
const SearchedItem = React.lazy(() => import('./components/SearchedItems/SearchedItem'));
const Payment = React.lazy(() => import('./components/Payment/Payment'));
const Cart = React.lazy(() => import('./components/CustomerPanel/Cart/Cart'));
const MainPage = React.lazy(() => import('./components/AdminPanel/Screens/MainPage/MainPage'));

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Suspense fallback={"...loading"}>
      <Routes>
        <Route path="/" element={<MainPage1/>} />
        <Route path="/admin" element={<MainPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Payment/>} />
        <Route path="/searched" element={<SearchedItem/>} />
        <Route path="/allcategory" element={<AllCategories/>} />
        <Route path="/createCat" element={<CreateCategories/>} />
        <Route path="/editcat" element={<EditCategories/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/users" element={<User/>} />
        <Route path="/productdetail" element={<ProductDetail/>} />
        <Route path="/createproduct" element={<CreateProduct/>} />
        <Route path="/allproduct" element={<AllProduct/>} />
        <Route path="/editproduct" element={<EditProduct/>} />
      </Routes>
      </Suspense>
      {/* <Footer/> */}
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
    </>
  );
};

export default App;
