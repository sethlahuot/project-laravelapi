import StaticHome from "./Pages/StaticHome";
import SliderHome from "./Pages/SliderHome";
import About from "./Pages/About";
import Fzf from "./Pages/Fzf";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";
import Contach from "./Pages/Contach";
import News from "./Pages/News";
import Shop from "./Pages/Shop";
import Singlenews from "./Pages/Singlenews";
import Singleproduct from "./Pages/Singleproduct";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/statichome" />} />
        <Route path="/statichome" element={<StaticHome />} />
        <Route path="/sliderhome" element={<SliderHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/fzf" element={<Fzf />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/contact" element={<Contach />} />
        <Route path="/news" element={<News />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/singlenews" element={<Singlenews />} />
        <Route path="/singleproduct" element={<Singleproduct />} />
      </Routes>
    </Router>
  );
}

export default App;
