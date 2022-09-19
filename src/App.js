import "./App.css";
import Header from "./layout/Header";
import HomePage from "./view/HomePage";
import Footer from "./layout/Footer";
import { Route, Routes } from "react-router-dom";
import Products from "./view/Products";
import Cart from "./view/Cart";
import SignUpPage from "./view/SignUpPage";
import SignInPage from "./view/SignInPage";
import { Toaster } from "react-hot-toast";
import Details from "./view/Details";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
      <Footer />

      <Toaster />
    </div>
  );
}

export default App;
