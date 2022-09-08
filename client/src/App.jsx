import "./App.css";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,Navigate,
  Route
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state)=>state.user.currentUser)
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/Products" element={<ProductList/>} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}/>
        </Routes>
    </Router>
  );
}

export default App;