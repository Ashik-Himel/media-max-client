import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {FaCircleXmark} from 'react-icons/fa6';
import brandLogo from '../../assets/images/logo/media-max.png';
import fbIcon from '../../assets/images/icons/facebook.png';
import gmailIcon from '../../assets/images/icons/gmail.png';
import mapIcon from '../../assets/images/icons/google-maps.png';

const HeaderDrawer = ({navLinks, drawerShow, setDrawerShow}) => {
  return (
    <div className='fixed top-0 right-0 bottom-0 z-50 w-4/5 max-w-[320px] bg-secondary border-s-4 border-menu-border transition-[right] duration-300' style={drawerShow ? {right: "0px"} : {right: "-350px"}}>
      <FaCircleXmark className='absolute top-6 left-6 text-3xl text-primary cursor-pointer' onClick={() => setDrawerShow(false)} />

      <div className='mt-12'>
        <img className='w-[120px] mx-auto mb-5' src={brandLogo} alt="Brand Logo" />
        <div className='flex justify-center items-center gap-6 [&_img]:w-8'>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={fbIcon} alt="Facebook Icon" />
          </a>
          <a href="mailto:support@mediamax.com.bd" target="_blank" rel="noopener noreferrer">
            <img src={gmailIcon} alt="Gmail Icon" />
          </a>
          <a href="https://goo.gl/maps/86rJE74TTRbxXd5i7" target="_blank" rel="noopener noreferrer">
            <img src={mapIcon} alt="Google Maps Icon" />
          </a>
        </div>

        <nav className='mt-8'>
          {
            navLinks?.map((navLink, index) => <Link to={navLink[1]} className={`text-[18px] block py-3 w-[calc(100%-1rem)] ml-auto rounded-s-full text-center pe-4 relative -right-[350px] transition-[right] duration-300`} style={drawerShow ? {right: "0px", transitionDelay: `${0.3+(index/20)}s`} : {right: "-350px"}} onClick={() => setDrawerShow(false
              )} key={navLink[1]}>{navLink[0]}</Link>)
          }
        </nav>
      </div>
    </div>
  );
};

export default HeaderDrawer;

HeaderDrawer.propTypes = {
  navLinks: PropTypes.array,
  drawerShow: PropTypes.bool,
  setDrawerShow: PropTypes.func
}