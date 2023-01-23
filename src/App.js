import "./App.css";
import UseState from "./pages/useState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UseEffect from "./pages/useeffect";
import Cart from "./pages/cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/usestate" element={<UseState />} />
        <Route exact path="/useeffect" element={<UseEffect />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
