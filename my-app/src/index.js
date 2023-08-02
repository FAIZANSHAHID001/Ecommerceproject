import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home';
import About from './Components/About';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Dashboard from "./Components/admin/Dashboard";
import Profile from "./Components/admin/Profile";
import Adminheader from "./Components/admin/Adminheader";
import Addproduct from "./Components/admin/Addproduct";
import Signup from "./Components/admin/Signup";
import Login from "./Components/admin/Login";
import Updateproduct from "./Components/admin/Updateproduct";
import Products from "./Components/admin/Products";
import Viewproduct from "./Components/admin/Viewproduct";
import Privatecomponent from "./Components/admin/Privatecomponent";
import Productdetail from "./Components/Productdetail";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Explore from "./Components/Explore";
import Contact from "./Components/Contact";
import Customerlogin from "./Components/Customerlogin";
import Customersignup from "./Components/Customersignup";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
   
        <Route
          path="/admin/*"
          element={
            <>
              <Routes>
                <Route element={<><Adminheader/><Privatecomponent/></>}>
                <Route index element={<Dashboard />} />
                <Route path="products" element={<Products/>}/>
                <Route path="profile" element={<Profile />} />
                <Route path="addproduct" element={<Addproduct />}/>
                <Route path="updateproduct" element={<Updateproduct />}/>
                <Route path="viewproduct" element={<Viewproduct/>}/>
                </Route>
                <Route path="register" element={<Signup />}/>
                <Route path="login" element={<Login/>}/>
                {/* Additional admin routes */}
              </Routes>
            </>
          }
        />

        <Route
          path="/*"
          element={
            <>
            <Header/>
              <Routes>
                
                <Route index element={<Home/>}/>
                <Route path="productdetails/:id" element={<Productdetail/>}/>
                <Route path="cart/:id" element={<Cart/>}/>
                <Route path="cart" element={<Cart/>}/>
                <Route path="checkout" element={<Checkout/>}/>
                <Route path="explore" element={<Explore/>}/>
                <Route path="explore/:category" element={<Explore/>}/>
                <Route path="contactus" element={<Contact/>}/>
                
                {/* Additional admin routes */}
              </Routes>
            <Footer/>
            
            </>
            
          }
        />
                <Route path="customersignup" element={<Customersignup />}/>
                <Route path="customerlogin" element={<Customerlogin/>}/>

    </Routes>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
