import { Link } from 'react-router-dom';
import aboutImg from '../../assets/images/about-img.png';

const AboutSection = () => {
  return (
    <section className='mt-4'>
      <div className="container">
        <h2 className='text-center text-[2rem] font-semibold mb-2 leading-tight'><span className="text-primary">About</span> Us</h2>
        <p className='max-w-[500px] mx-auto text-center mb-10'>Here is a brief about ourselves that let you know who we are.</p>

        <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-8 [&>*]:flex-1'>
          <div>
            <img className='block w-full max-w-[450px] mx-auto md:mx-0' src={aboutImg} alt="About Section Image" />
          </div>
          <div>
            <p className='max-w-[700px] mb-4'>Media Max is an organization of authorized distributor of banglalink. We are located in Mawna Chowrasta, Sreepur, Gazipur-1740, Dhaka, Bangladesh. We have 4 DD houses tagged with Media Max and 166 employees work with our organization. We provide services of digital products of banglalink to our retailers and customers. We have 6500+ retailers.</p>
            <div className='flex justify-between items-center text-center gap-4 [&>div>span:first-child]:text-2xl [&>div>span:first-child]:font-semibold [&>div>span:first-child]:block [&>div>span:first-child]:mb-[2px] max-w-[450px] mb-6'>
              <div>
                <span>164</span>
                <span>Employees</span>
              </div>
              <div>
                <span>4</span>
                <span>DD Houses</span>
              </div>
              <div>
                <span>6500+</span>
                <span>Retailers</span>
              </div>
            </div>
            <Link to='/#services' className='btn btn-primary'>Our Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;