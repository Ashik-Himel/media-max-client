import { Helmet } from "react-helmet-async";
import HeroSection from "../components/home/HeroSection";

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Media Max - An Authorized Distributor of Banglalink Digital</title>
      </Helmet>

      <HeroSection />
    </main>
  );
};

export default Home;