import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Collections from "./components/Collections";
import Footer from "./components/Footer";
import Account from "./components/Account";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Wallets from "./components/Wallets";
import Collection from "./components/Collection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/account" element={<Account />} />
        <Route path="/wallets" element={<Wallets />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </BrowserRouter>
  );
}

function MainLayout() {
  return (
    <>
      <Header />
      <Carousel />
      <Collections />
      <Footer />
      <Outlet />
    </>
  );
}

export default App;
