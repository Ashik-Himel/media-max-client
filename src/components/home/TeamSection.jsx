import fbIcon from '../../assets/images/icons/facebook.png';
import gmailIcon from '../../assets/images/icons/gmail.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import phoneIcon from '../../assets/images/icons/telephone.png';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../hooks/useAxios';

const TeamSection = () => {
  const {data: chairman = {}, isLoading} = useQuery({
    queryKey: ["chairman"],
    queryFn: async() => {
      const res = await axiosInstance('/chairman');
      return res.data;
    }
  })
  const {data: team = [], isLoading: isLoading2} = useQuery({
    queryKey: ['team'],
    queryFn: async() => {
      const res = await axiosInstance('/team');
      return res.data;
    }
  })

  if (isLoading || isLoading2) return(
    <div className="mt-32">
      <svg aria-hidden="true" className="w-8 h-8 text-white animate-spin fill-primary mx-auto" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
    </div>
  );

  return (
    <section className="mt-16">
      <div className="container">
        <h2 className='text-title-color text-center text-[2rem] font-semibold mb-2 leading-tight'>Our <span className="text-primary">Team</span></h2>
        <p className='max-w-[500px] mx-auto text-center mb-10'>We have total 166 employees in 4 distribution houses. Some of them are -</p>

        <div className="max-w-[900px] mx-auto bg-secondary p-8 rounded-lg flex flex-col md:flex-row justify-center items-center gap-8 [&>*]:flex-1">
          <div className="w-full">
            <img className="rounded-lg w-full" src={chairman?.photo} alt="Chairman's Photo" />
          </div>
          <div>
            <h3 className="text-2xl font-medium text-primary mb-1">{chairman?.name}</h3>
            <span className="mb-8 block">{chairman?.designation}</span>
            <p className="mb-8">{chairman?.about}</p>
            <div>
              <h4 className="text-2xl text-primary font-medium mb-2">Achievements:</h4>
              <ul className="list-disc ml-4">
                {
                  chairman?.achievements?.map(item => <li key={item}>{item}</li>)
                }
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {
            team?.map((item, index) => index === team.length - 1 ? <div key={item._id} className='bg-secondary rounded-lg lg:col-start-2 xl:col-start-auto'>
            <div className='w-full relative group'>
              <img className='w-full rounded-t-lg' src={item?.photo} alt="Team Members's Photo" />
              <div className='absolute inset-0 group-hover:bg-black group-hover:bg-opacity-60'></div>
              <div className='absolute left-0 right-0 bottom-0 h-0 overflow-hidden group-hover:h-full transition-[height] duration-300 flex justify-center items-center gap-4 [&_img]:w-10 rounded-t-lg'>
                <a href={item?.contact?.facebook} target="_blank" rel="noopener noreferrer">
                  <img src={fbIcon} alt="Facebook Icon" />
                </a>
                <a href={`mailto:${item?.contact?.email}`} target="_blank" rel="noopener noreferrer">
                  <img src={gmailIcon} alt="Gmail Icon" />
                </a>
                <a href={`https://wa.me/${item?.contact?.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <img src={whatsappIcon} alt="WhatsApp Icon" />
                </a>
                <a href={`tel:${item?.contact?.phone}`} target="_blank" rel="noopener noreferrer">
                  <img src={phoneIcon} alt="Telephone Icon" />
                </a>
              </div>
            </div>
            <div className='p-4'>
              <h3 className='text-2xl font-medium text-primary mb-1'>{item?.name}</h3>
              <span>{item?.designation}</span>
            </div>
          </div> : <div key={item._id} className='bg-secondary rounded-lg'>
            <div className='w-full relative group'>
              <img className='w-full rounded-t-lg' src={item?.photo} alt="Team Members's Photo" />
              <div className='absolute inset-0 group-hover:bg-black group-hover:bg-opacity-60'></div>
              <div className='absolute left-0 right-0 bottom-0 h-0 overflow-hidden group-hover:h-full transition-[height] duration-300 flex justify-center items-center gap-4 [&_img]:w-10 rounded-t-lg'>
                <a href={item?.contact?.facebook} target="_blank" rel="noopener noreferrer">
                  <img src={fbIcon} alt="Facebook Icon" />
                </a>
                <a href={`mailto:${item?.contact?.email}`} target="_blank" rel="noopener noreferrer">
                  <img src={gmailIcon} alt="Gmail Icon" />
                </a>
                <a href={`https://wa.me/${item?.contact?.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <img src={whatsappIcon} alt="WhatsApp Icon" />
                </a>
                <a href={`tel:${item?.contact?.phone}`} target="_blank" rel="noopener noreferrer">
                  <img src={phoneIcon} alt="Telephone Icon" />
                </a>
              </div>
            </div>
            <div className='p-4'>
              <h3 className='text-2xl font-medium text-primary mb-1'>{item?.name}</h3>
              <span>{item?.designation}</span>
            </div>
          </div>)
          }
        </div>
      </div>
    </section>
  );
};

export default TeamSection;