import { useContext, useState } from "react";
import {FaBars} from 'react-icons/fa6';
import HeaderDrawer from "./HeaderDrawer";
import { AllContext } from "../../context/GlobalContext";
import { Link } from 'react-scroll';
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const {user, userLoaded} = useContext(AllContext);
  const [drawerShow, setDrawerShow] = useState(false);
  const navLinks = [
    ['Home', 'hero',],
    ['About Us', 'about'],
    ['Services', 'services'],
    ['Dist. Houses', 'dhHouse'],
    ['Team', 'team'],
    ['Contact Us', 'contact'],
    ['Employees', '/employees']
  ]
  if (userLoaded) {
    if (user) navLinks.push(['Dashboard', '/dashboard/home'])
    else navLinks.push(['Login', '/login'])
  }

  return (
    <header className="py-4 border-b-2 [background-image:linear-gradient(114.29deg,_#0b1926_-15.11%,_#020606_106.05%)] border-primary fixed left-0 top-0 right-0 z-40">
      <div className="container">
        <nav className="flex justify-between items-center">
          <Link to='hero' spy={true} smooth={true} duration={500} activeClass="active" className="cursor-pointer flex items-center gap-2" onClick={() => pathname !== '/' && navigate('/')}>
            <img className="w-[40px]" src="/favicon.png" alt="Brand Icon" />
            <span className="text-3xl font-bold text-primary uppercase">Media Max</span>
          </Link>

          <ul className="hidden xl:flex items-center gap-6 [&_.active]:font-medium [&_.active]:text-primary">
            {
              navLinks?.map(navLink => navLink[1][0] === '/' ? <NavLink to={navLink[1]} className={navLink[0] === 'Login' || navLink[0] === 'Dashboard' ? "btn btn-primary !text-text-color-alt hover:!text-primary" : ""} key={navLink[1]}>{navLink[0]}</NavLink> : <Link to={navLink[1]} spy={true} smooth={true} duration={500} activeClass="active" className={`cursor-pointer select-none ${navLink[1]}-link`} onClick={() => pathname !== '/' && navigate('/')} key={navLink[1]}>{navLink[0]}</Link>)
            }
          </ul>

          <FaBars className="xl:hidden text-3xl text-primary cursor-pointer select-none" onClick={() => setDrawerShow(true)} />
        </nav>

        <HeaderDrawer navLinks={navLinks} drawerShow={drawerShow} setDrawerShow={setDrawerShow} />

      </div>
    </header>
  );
};

export default Header;