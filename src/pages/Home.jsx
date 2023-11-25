import { Helmet } from "react-helmet-async";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import DistHousesSection from "../components/home/DistHousesSection";
import ContactSection from "../components/home/ContactSection";
import TeamSection from "../components/home/TeamSection";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import scrollToTopIcon from '../assets/images/icons/scroll-top.gif';
import { Link, Element } from 'react-scroll';

const Home = () => {
  const [showScrollIcon, setShowScrollIcon] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollY >= 200 ? setShowScrollIcon(true) : setShowScrollIcon(false)
    })
  }, []);

  return (
    <main className="overflow-x-hidden pt-0">
      <Helmet>
        <title>Media Max - An Authorized Distributor of Banglalink Digital</title>
      </Helmet>

      <Element name="hero" className="hero pt-[70px] xl:pt-[77px]">
        <HeroSection />
      </Element>
      <Element name="about" className="about pt-[80px] xl:pt-[87px]">
        <AboutSection />
      </Element>
      <Element name="services" className="services pt-[80px] xl:pt-[87px]">
        <ServicesSection />
      </Element>
      <Element name="dhHouse" className="dhHouse pt-[80px] xl:pt-[87px]">
        <DistHousesSection />
      </Element>
      <Element name="team" className="team pt-[80px] xl:pt-[87px]">
        <TeamSection />
      </Element>
      <Element name="contact" className="contact pt-[80px] xl:pt-[87px]">
        <ContactSection />
      </Element>

      <div>
        <Link to='hero' spy={true} smooth={true} duration={500} activeClass="active" className="cursor-pointer select-none block p-[5px] rounded-md bg-secondary fixed right-8 border-2 border-primary transition-[bottom] duration-500" style={showScrollIcon ? {bottom: '2rem'}: {bottom: "-100px"}}>
          <img className="w-[50px]" src={scrollToTopIcon} alt="Scroll To Top Icon" />
        </Link>
      </div>
    </main>
  );
};

export default Home;