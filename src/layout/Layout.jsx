import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col [&>*:nth-child(2)]:flex-1">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;