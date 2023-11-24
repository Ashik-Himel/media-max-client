import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Layout = () => {
  const {pathname} = useLocation();

  useEffect(() => {
    scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div className="min-h-screen flex flex-col [&>*:nth-child(2)]:flex-1">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;