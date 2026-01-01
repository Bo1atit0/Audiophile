import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeadphonesPage from "./pages/HeadphonesPage";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsListPage from "./pages/productsListPage";
import ProductsDetailsPage from "./pages/ProductsDetailsPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <section className="w-full select-none ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<ProductsListPage />} />
          <Route path="/:category/:slug" element={<ProductsDetailsPage />} />
          <Route path="/checkoutPage" element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </section>
  );
}

export default App;
