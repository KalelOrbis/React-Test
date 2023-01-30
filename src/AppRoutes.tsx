import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Catalogue } from "./pages/Catalogue";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalogue" element={<Catalogue />} />
      </Routes>
    </Router>
  );
}
