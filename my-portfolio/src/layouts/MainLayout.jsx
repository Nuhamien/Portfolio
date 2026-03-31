import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import ScrollToTop from "../components/layout/ScrollToTop";
import Footer from "../components/layout/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
        <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default MainLayout;