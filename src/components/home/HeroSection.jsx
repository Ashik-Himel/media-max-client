import heroImg from '../../assets/images/hero-img.png';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const shapeStyles = [
    "square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] [background-image:linear-gradient(#303030,_#757575)] z-10",
    "circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] bg-primary rounded-full",
    "triangle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] bg-[#f5f5f5] [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)] [-webkit-clip-path:polygon(50%_0%,_0%_100%,_100%_100%)]"
  ];

  return (
    <section className="py-12 overflow-hidden">
      <div className="container relative flex flex-col md:flex-row justify-center items-center gap-8 [&>*]:flex-1">
        <div>
          <span className="inline-block mb-2 font-medium bg-white px-6 py-1 text-text-color-alt rounded">Hello</span>
          <h1 className="font-['Tilt_Neon',_sans-serif] text-[2.5rem] font-bold leading-tight mb-2">Welcome To <span className="text-primary">MEDIA MAX</span></h1>
          <h3 className="text-2xl font-medium mb-6">An Authorized Distributor of Banglalink</h3>
          <p className="max-w-[700px] mb-6">Media Max is an authorized distributor of banglalink in Sreepur, Gazipur. We are providing digital services of banglalink since March, 2018.</p>
          <div className="flex items-center gap-4">
            <Link to='/#about' className='btn btn-primary'>About Us</Link>
            <Link to='/employees' className='btn btn-outline'>Employees</Link>
          </div>
        </div>

        <div>
          <img className='w-full max-w-[450px] mx-auto' src={heroImg} alt="Hero Section Image" />
        </div>

        <div className="absolute left-0 top-0 right-0 h-full -z-10 brightness-[75%] contrast-[120%]">
          <div className={shapeStyles[0]}></div>
          <div className={shapeStyles[0]}></div>
          <div className={shapeStyles[0]}></div>
          <div className={shapeStyles[0]}></div>
          <div className={shapeStyles[0]}></div>
          <div className={shapeStyles[1]}></div>
          <div className={shapeStyles[1]}></div>
          <div className={shapeStyles[1]}></div>
          <div className={shapeStyles[1]}></div>
          <div className={shapeStyles[1]}></div>
          <div className={shapeStyles[2]}></div>
          <div className={shapeStyles[2]}></div>
          <div className={shapeStyles[2]}></div>
          <div className={shapeStyles[2]}></div>
          <div className={shapeStyles[2]}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;