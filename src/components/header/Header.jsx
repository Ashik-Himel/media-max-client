import { useState } from "react";
import { Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa6';
import HeaderDrawer from "./HeaderDrawer";

const Header = () => {
  const [drawerShow, setDrawerShow] = useState(false);
  const navLinks = [
    ['Home', '/#home',],
    ['About Us', '/#about'],
    ['Services', '/#services'],
    ['Dist. Houses', '/#dist-houses'],
    ['Team', '/#team'],
    ['Contact Us', '/#contact'],
    ['Employees', '/employees'],
    ['Login', '/login']
  ]

  return (
    <header className="py-4 border-b-2 [background-image:linear-gradient(114.29deg,_#0b1926_-15.11%,_#020606_106.05%)] border-primary fixed left-0 top-0 right-0 z-40">
      <div className="container">
        <nav className="flex justify-between items-center">
          <Link to='/#home' className="flex items-center gap-2">
            <img className="w-[40px]" src="/favicon.png" alt="Brand Icon" />
            <span className="text-3xl font-bold text-primary uppercase">Media Max</span>
          </Link>

          <ul className="hidden xl:flex items-center gap-6">
            {
              navLinks?.map(navLink => <Link to={navLink[1]} className={navLink[0] === 'Login' ? 'btn btn-primary' : ''} key={navLink[1]}>{navLink[0]}</Link>)
            }
          </ul>

          <FaBars className="xl:hidden text-3xl text-primary cursor-pointer" onClick={() => setDrawerShow(true)} />
        </nav>

        <HeaderDrawer navLinks={navLinks} drawerShow={drawerShow} setDrawerShow={setDrawerShow} />

      </div>
    </header>
  );
};

export default Header;