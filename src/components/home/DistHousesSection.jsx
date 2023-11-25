import { Link } from "react-router-dom";
import mediaMax from '../../assets/images/logo/media-max.png';
import mediaLink from '../../assets/images/logo/media-link.png';
import mediaTrade from '../../assets/images/logo/media-trade.png';
import akashMedia from '../../assets/images/logo/akash-media.png';

const DistHousesSection = () => {
  return (
    <section>
      <div className="container">
        <h2 className='text-title-color text-center text-[2rem] font-semibold mb-2 leading-tight'><span className="text-primary">Distribution</span> Houses</h2>
        <p className='max-w-[500px] mx-auto text-center mb-10'>We have four distribution houses tagged with Media Max.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="bg-secondary p-8 rounded-lg shadow-regular flex flex-col [&>*:nth-child(3)]:flex-1 [&>*:last-child]:self-start relative" data-aos="fade-up">
            <span className="inline-block bg-primary text-text-color-alt px-4 py-1 rounded font-medium absolute -left-[36px] top-[10px] -rotate-45">Head Office</span>
            <img className="h-[60px] self-start mb-6" src={mediaMax} alt="Media Max Logo" />
            <h3 className="text-title-color text-2xl font-medium mb-2">Media Max</h3>
            <p className="mb-6">Kitab Ali Plaza (3rd Floor), Mawna Chowrasta, Sreepur, Gazipur-1740, Dhaka.</p>
            <Link to='tel:+8801907868040' className="btn btn-primary">Call Now</Link>
          </div>
          <div className="bg-secondary p-8 rounded-lg shadow-regular flex flex-col [&>*:nth-child(3)]:flex-1 [&>*:last-child]:self-start" data-aos="fade-up">
            <img className="h-[60px] self-start mb-6" src={akashMedia} alt="Akash Media Logo" />
            <h3 className="text-title-color text-2xl font-medium mb-2">Akash Media</h3>
            <p className="mb-6">Adarsha Nagar, Palli Buddut, Mulaid, Sreepur, Gazipur-1740, Dhaka.</p>
            <Link to='tel:+8801996249484' className="btn btn-primary">Call Now</Link>
          </div>
          <div className="bg-secondary p-8 rounded-lg shadow-regular flex flex-col [&>*:nth-child(3)]:flex-1 [&>*:last-child]:self-start" data-aos="fade-up">
            <img className="h-[60px] self-start mb-6" src={mediaTrade} alt="Media Trade Logo" />
            <h3 className="text-title-color text-2xl font-medium mb-2">Media Trade</h3>
            <p className="mb-6">Alamin Bhaban (2nd Floor), College Road, Kapashia, Gazipur-1730, Dhaka.</p>
            <Link to='tel:+8801914793408' className="btn btn-primary">Call Now</Link>
          </div>
          <div className="bg-secondary p-8 rounded-lg shadow-regular flex flex-col [&>*:nth-child(3)]:flex-1 [&>*:last-child]:self-start lg:col-start-2 xl:col-start-auto" data-aos="fade-up">
            <img className="h-[60px] self-start mb-6" src={mediaLink} alt="Media Link Logo" />
            <h3 className="text-title-color text-2xl font-medium mb-2">Media Link</h3>
            <p className="mb-6">Alachi Plaza (1st Floor), Beside of Shamoli Garments, Salna, Gazipur-1703, Dhaka.</p>
            <Link to='tel:+8801401401489' className="btn btn-primary">Call Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistHousesSection;