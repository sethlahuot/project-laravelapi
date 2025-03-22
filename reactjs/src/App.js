import Home from "./Pages/Home";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";
import Contach from "./Pages/Contach";
import News from "./Pages/News";
import Shop from "./Pages/Shop";
import Singlenews from "./Pages/Singlenews";
import Productdetail from "./Pages/Productdetail";
import MasterLayout from "./Admin/MasterLayout";
import Profile from "./Admin/Profile";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json' ;
axios.defaults.headers.post['Accept'] = 'application/json' ;

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/contact" element={<Contach />} />
        <Route path="/news" element={<News />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/singlenews" element={<Singlenews />} />
        <Route path="/productdetail" element={<Productdetail />} />
        {/* Admin Pages */}
        <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
        <Route path="/admin/dashboard" element={<MasterLayout />} /> 
        <Route path="/admin/profile" element={<Profile />} /> 

        {/* auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Routes>
    </Router>
  );
}

export default App;
