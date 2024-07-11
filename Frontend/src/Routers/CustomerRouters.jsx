import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../customar/pages/HomePage/HomePage";
import Navigation from "../customar/components/Navigation/Navigation";
import Footer from "../customar/components/Footer/Footer";
import Cart from "../customar/components/Cart/Cart";
import Product from "../customar/components/Product/Product";
import ProductDetails from "../customar/components/ProductDetails/ProductDetails";
import CheckOut from "../customar/components/CheckOut/CheckOut";
import Order from "../customar/components/Order/Order";
import OrderDetails from "../customar/components/Order/OrderDetails";


const CustomerRouters=()=>{
    return(
        <div>
            <div>
                <Navigation/>
            </div>
          <Routes>
            <Route path="/login" element={<Homepage/>}></Route>
            <Route path="/register" element={<Homepage/>}></Route>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product/>}></Route>
            <Route path="/product/:productId" element={<ProductDetails/>}></Route>
            <Route path="/checkout" element={<CheckOut/>}></Route>
            <Route path="/account/order" element={<Order/>}></Route>
            <Route path="/account/order/:orderId" element={<OrderDetails/>}></Route>
          </Routes>
          <div>
            <Footer/>
          </div>
        </div>
    )
}

export default CustomerRouters;