import Home from "../home/Home";
import Footer from "../navbar-footer/Footer";
import { Navbar } from "../navbar-footer/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DetailPage } from "../product-page/DetailPage";
export const Layout = () => {
  return (
    <Router>
      <div style={{ width: "100%" }}>
        <Navbar />
        <div style={{ marginTop: "64px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<DetailPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
