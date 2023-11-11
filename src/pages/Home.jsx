import { Helmet } from "react-helmet-async";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import DistHousesSection from "../components/home/DistHousesSection";
import ContactSection from "../components/home/ContactSection";
import TeamSection from "../components/home/TeamSection";

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Media Max - An Authorized Distributor of Banglalink Digital</title>
      </Helmet>

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DistHousesSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
};

export default Home;