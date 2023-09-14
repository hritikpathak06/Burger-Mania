import Home from "./components/Home/Home";
import Header from "./components/Layout/Header";
import {BrowserRouter, Route, Routes, } from "react-router-dom"
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Cart/Shipping";
import Footer from "./components/Layout/Footer";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import PaymentSuccess from "./components/Cart/PaymentSuccess";
import MyOrders from "./components/Orders/MyOrders";
import Dashoard from "./components/Admin/Dashoard";
import OrderDetails from "./components/Orders/OrderDetails";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Orders from "./components/Admin/Orders";
import Users from "./components/Admin/Users";
import NotFound from "./components/Layout/NotFound";
import About from "./components/About/About";
import Loader from "./components/Layout/Loader";
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"
import "./styles/cart.scss"
import "./styles/shipping.scss"
import "./styles/confirmOrder.scss"
import "./styles/paymentSuccess.scss"
import "./styles/login.scss"
import "./styles/profile.scss"
import "./styles/table.scss"
import "./styles/orderDetails.scss"
import "./styles/dashboard.scss"
import "./styles/about.scss"
import "./styles/notFound.scss"
import "./styles/loader.scss"



function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/shipping" element={<Shipping/>}/>
    <Route path="/confirm-order" element={<ConfirmOrder/>}/>
    <Route path="/payment-success" element={<PaymentSuccess/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/me" element={<Profile/>}/>
    <Route path="/my-orders" element={<MyOrders/>}/>
    <Route path="/order/:id" element={<OrderDetails/>}/>
    <Route path="/admin/dashboard" element={<Dashoard/>}/>
    <Route path="/admin/orders" element={<Orders/>}/>
    <Route path="/admin/users" element={<Users/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/loader" element={<Loader/>}/>
    <Route path="*" element={<NotFound/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  );
}

export default App;
