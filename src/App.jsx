import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Auth from "./pages/auth";
import Checkout from "./pages/checkout";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/authContext";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <AuthProvider>
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
      </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;
