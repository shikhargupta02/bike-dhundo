import Home from "../home/Home";
import Footer from "../navbar-footer/Footer";
import { Navbar } from "../navbar-footer/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DetailPage } from "../product-page/DetailPage";
import { Loader } from "../loader/Loader";
import { useEffect, useState } from "react";
export const Layout = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div style={{ width: "100%" }}>
        <Navbar />
        <div style={{ marginTop: "55px" }}>
          {loading ? (
            <Loader />
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about/*" element={<DetailPage />} />
            </Routes>
          )}
        </div>
        <Footer />
      </div>
    </Router>
  );
};
