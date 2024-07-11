// import logo from './logo.svg';
import './App.css';
// import Navigation from './customar/components/Navigation/Navigation';
// import Homepage from './customar/pages/HomePage/HomePage';
// import Footer from './customar/components/Footer/Footer';
// import ProductDetails from './customar/components/ProductDetails/ProductDetails';
// import Cart from './customar/components/Cart/Cart';
// import CheckOut from './customar/components/CheckOut/CheckOut';
// import Order from './customar/components/Order/Order';
// import OrderDetails from './customar/components/Order/OrderDetails';
// import Product from './customar/components/Product/Product';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes> 
    </div>
  );
}

export default App;
