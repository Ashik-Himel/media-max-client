import brandLogo from '../assets/images/logo/media-max.png';

const Footer = () => {
  return (
    <footer>
      <section className='bg-secondary py-12'>
        <div className="container">
          <div className='flex flex-col sm:flex-row justify-center sm:items-center gap-10 [&>*]:flex-1'>
            <div>
              <img className='w-[100px] mb-4' src={brandLogo} alt="Brand Logo" />
              <p className='max-w-[500px]'>Kitab Ali Plaza (3rd Floor), Mawna Chowrasta, Sreepur, Gazipur-1740, Dhaka, Bangladesh.</p>
            </div>
            <div>
              <div className='w-max sm:mx-auto [&>*]:block space-y-3'>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="mailto:support@mediamax.com.bd" target="_blank" rel="noopener noreferrer">Email</a>
                <a href="https://goo.gl/maps/86rJE74TTRbxXd5i7" target="_blank" rel="noopener noreferrer">Google Maps</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-primary text-text-color-alt text-center py-5'>
        <div className="container">
          <p>Copyright &copy; {new Date().getFullYear()} - Media Max. All rights reserved.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;