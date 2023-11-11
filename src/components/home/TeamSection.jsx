import fbIcon from '../../assets/images/icons/facebook.png';
import gmailIcon from '../../assets/images/icons/gmail.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import phoneIcon from '../../assets/images/icons/telephone.png';

const TeamSection = () => {
  return (
    <section className="mt-16">
      <div className="container">
        <h2 className='text-center text-[2rem] font-semibold mb-2 leading-tight'>Our <span className="text-primary">Team</span></h2>
        <p className='max-w-[500px] mx-auto text-center mb-10'>We have total 166 employees in 4 distribution houses. Some of them are -</p>

        <div className="max-w-[900px] mx-auto bg-secondary p-8 rounded-lg flex flex-col md:flex-row justify-center items-center gap-8 [&>*]:flex-1">
          <div className="w-full">
            <img className="rounded-lg w-full" src="https://mediamax.com.bd/images/chairman.jpg" alt="Chairman's Photo" />
          </div>
          <div>
            <h3 className="text-2xl font-medium text-primary mb-1">Late Mohammad Abdul Awal</h3>
            <span className="mb-8 block">Our Honorable Chairman</span>
            <p className="mb-8">The Founder of Media Max, Akash Media, Media Trade, Media Link, Betar Bhaban & SF network. He was a successful business person in Gazipur started in 2003.</p>
            <div>
              <h4 className="text-2xl text-primary font-medium mb-2">Achievements:</h4>
              <ul className="list-disc ml-4">
                <li>Got <span className="font-semibold">National Awards</span> from Banglalink Digital (2 times)</li>
                <li>Got <span className="font-semibold">The Best Tax Payer 2016</span> award in Gazipur.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          <div className='bg-secondary rounded-lg'>
            <div className='w-full relative group'>
              <img className='w-full rounded-t-lg' src="https://mediamax.com.bd/images/md.jpg" alt="Managing Director's Photo" />
              <div className='absolute inset-0 group-hover:bg-black group-hover:bg-opacity-60'></div>
              <div className='absolute left-0 right-0 bottom-0 h-0 overflow-hidden group-hover:h-full transition-[height] duration-300 flex justify-center items-center gap-4 [&_img]:w-10 rounded-t-lg'>
                <a href="https://www.facebook.com/md.billaluddin.5" target="_blank" rel="noopener noreferrer">
                  <img src={fbIcon} alt="Facebook Icon" />
                </a>
                <a href="mailto:billal_sf@yahoo.com" target="_blank" rel="noopener noreferrer">
                  <img src={gmailIcon} alt="Gmail Icon" />
                </a>
                <a href="https://wa.me/+8801717320690" target="_blank" rel="noopener noreferrer">
                  <img src={whatsappIcon} alt="WhatsApp Icon" />
                </a>
                <a href="tel:+8801717320690" target="_blank" rel="noopener noreferrer">
                  <img src={phoneIcon} alt="Telephone Icon" />
                </a>
              </div>
            </div>
            <div className='p-4'>
              <h3 className='text-2xl font-medium text-primary mb-1'>MD Billal Uddin</h3>
              <span>Managing Director</span>
            </div>
          </div>
          <div className='bg-secondary rounded-lg'>
            <div className='w-full relative group'>
              <img className='w-full rounded-t-lg' src="https://mediamax.com.bd/images/employees/shahidul-islam.jpg" alt="General Manager's Photo" />
              <div className='absolute inset-0 group-hover:bg-black group-hover:bg-opacity-60'></div>
              <div className='absolute left-0 right-0 bottom-0 h-0 overflow-hidden group-hover:h-full transition-[height] duration-300 flex justify-center items-center gap-4 [&_img]:w-10 rounded-t-lg'>
                <a href="https://www.facebook.com/profile.php?id=100009150676328" target="_blank" rel="noopener noreferrer">
                  <img src={fbIcon} alt="Facebook Icon" />
                </a>
                <a href="mailto:support@mediamax.com.bd" target="_blank" rel="noopener noreferrer">
                  <img src={gmailIcon} alt="Gmail Icon" />
                </a>
                <a href="https://wa.me/+8801907878040" target="_blank" rel="noopener noreferrer">
                  <img src={whatsappIcon} alt="WhatsApp Icon" />
                </a>
                <a href="tel:+8801907878040" target="_blank" rel="noopener noreferrer">
                  <img src={phoneIcon} alt="Telephone Icon" />
                </a>
              </div>
            </div>
            <div className='p-4'>
              <h3 className='text-2xl font-medium text-primary mb-1'>MD Shahidul Islam</h3>
              <span>General Manager</span>
            </div>
          </div>
          <div className='bg-secondary rounded-lg'>
            <div className='w-full relative group'>
              <img className='w-full rounded-t-lg' src="https://mediamax.com.bd/images/employees/sarwar-sorkar.jpg" alt="Assistant Manager's Photo" />
              <div className='absolute inset-0 group-hover:bg-black group-hover:bg-opacity-60'></div>
              <div className='absolute left-0 right-0 bottom-0 h-0 overflow-hidden group-hover:h-full transition-[height] duration-300 flex justify-center items-center gap-4 [&_img]:w-10 rounded-t-lg'>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <img src={fbIcon} alt="Facebook Icon" />
                </a>
                <a href="mailto:support@mediamax.com.bd" target="_blank" rel="noopener noreferrer">
                  <img src={gmailIcon} alt="Gmail Icon" />
                </a>
                <a href="https://wa.me/+8801954424344" target="_blank" rel="noopener noreferrer">
                  <img src={whatsappIcon} alt="WhatsApp Icon" />
                </a>
                <a href="tel:+8801954424344" target="_blank" rel="noopener noreferrer">
                  <img src={phoneIcon} alt="Telephone Icon" />
                </a>
              </div>
            </div>
            <div className='p-4'>
              <h3 className='text-2xl font-medium text-primary mb-1'>MD Sarwar Sorkar</h3>
              <span>Assistant Manager</span>
            </div>
          </div>
          <div className='bg-secondary rounded-lg lg:col-start-2 xl:col-start-auto'>
            <div className='w-full relative group'>
              <img className='w-full rounded-t-lg' src="https://mediamax.com.bd/images/employees/azizul-islam.jpg" alt="Chief Accountant's Photo" />
              <div className='absolute inset-0 group-hover:bg-black group-hover:bg-opacity-60'></div>
              <div className='absolute left-0 right-0 bottom-0 h-0 overflow-hidden group-hover:h-full transition-[height] duration-300 flex justify-center items-center gap-4 [&_img]:w-10 rounded-t-lg'>
                <a href="https://www.facebook.com/aziz.hoque.165" target="_blank" rel="noopener noreferrer">
                  <img src={fbIcon} alt="Facebook Icon" />
                </a>
                <a href="mailto:support@mediamax.com.bd" target="_blank" rel="noopener noreferrer">
                  <img src={gmailIcon} alt="Gmail Icon" />
                </a>
                <a href="https://wa.me/+8801914812052" target="_blank" rel="noopener noreferrer">
                  <img src={whatsappIcon} alt="WhatsApp Icon" />
                </a>
                <a href="tel:+8801914812052" target="_blank" rel="noopener noreferrer">
                  <img src={phoneIcon} alt="Telephone Icon" />
                </a>
              </div>
            </div>
            <div className='p-4'>
              <h3 className='text-2xl font-medium text-primary mb-1'>MD Azizul Islam</h3>
              <span>Chief Accountant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;