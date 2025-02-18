import Home from "../home/Home";
import Footer from "../navbar-footer/Footer";
import { Navbar } from "../navbar-footer/Navbar";

export const Layout = () => {
  return (
    <div style={{width:'100%'}}>
      <Navbar />
      <div style={{ marginTop: "64px" }}>
        <Home />
      </div>
        <Footer />
    </div>
  );
};
