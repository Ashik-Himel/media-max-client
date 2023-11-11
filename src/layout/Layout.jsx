import { useEffect } from 'react';
import { Outlet } from "react-router-dom";
import anime from 'animejs/lib/anime.es.js';
import Header from "../components/header/Header";
import Footer from "../components/Footer";

const Layout = () => {
  useEffect(() => {
    function randomValues() {
      anime({
        targets: ".square, .circle, .triangle",
        translateX: function () {
          return anime.random(-500, 500);
        },
        translateY: function () {
          return anime.random(-300, 300);
        },
        rotate: function () {
          return anime.random(0, 360);
        },
        scale: function () {
          return anime.random(0.2, 2);
        },
        duration: 2000,
        easing: "easeInOutQuad",
        complete: randomValues,
      });
    }
    randomValues();
  }, []);

  return (
    <div className="min-h-screen flex flex-col [&>*:nth-child(2)]:flex-1">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;