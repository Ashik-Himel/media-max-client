import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section className="mt-16">
      <div className="container">
        <h2 className='text-title-color text-center text-[2rem] font-semibold mb-2 leading-tight'>Our <span className="text-primary">Services</span></h2>
        <p className='max-w-[500px] mx-auto text-center mb-10'>Here are some short description about the services we provide to our customers.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="bg-secondary p-8 rounded-lg shadow-regular flex flex-col [&>*:nth-child(2)]:flex-1 [&>*:last-child]:self-start">
            <h3 className="text-title-color text-2xl font-medium mb-2">Airtime Packages</h3>
            <p className="mb-6">We provide airtime packages from banglalink to our retailers and they sell those to customers.</p>
            <Link to='/#contact-us' className="btn btn-primary">Contact Us</Link>
          </div>
          <div className="bg-secondary p-8 rounded-lg shadow-regular flex flex-col [&>*:nth-child(2)]:flex-1 [&>*:last-child]:self-start">
            <h3 className="text-title-color text-2xl font-medium mb-2">Scratch Cards</h3>
            <p className="mb-6">We provide scratch cards from banglalink to our retailers and they sell those to customers.</p>
            <Link to='/#contact-us' className="btn btn-primary">Contact Us</Link>
          </div>
          <div className="bg-secondary p-8 rounded-lg shadow-regular flex flex-col [&>*:nth-child(2)]:flex-1 [&>*:last-child]:self-start">
            <h3 className="text-title-color text-2xl font-medium mb-2">Special Bundles</h3>
            <p className="mb-6">We provide special bundles from banglalink to our retailers and they sell those to customers.</p>
            <Link to='/#contact-us' className="btn btn-primary">Contact Us</Link>
          </div>
          <div className="bg-secondary p-8 rounded-lg shadow-regular flex flex-col [&>*:nth-child(2)]:flex-1 [&>*:last-child]:self-start lg:col-start-2 xl:col-start-auto">
            <h3 className="text-title-color text-2xl font-medium mb-2">Gross Add (SIM)</h3>
            <p className="mb-6">We provide physical sim from banglalink to our retailers and they sell those to customers.</p>
            <Link to='/#contact-us' className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;