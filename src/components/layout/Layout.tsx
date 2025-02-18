import Home from "../home/Home";
import Footer from "../navbar-footer/Footer";
import { Navbar } from "../navbar-footer/Navbar";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "64px" }}>
        <Home />
        <Footer />
      </div>
    </>
  );
};
