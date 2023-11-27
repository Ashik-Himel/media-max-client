import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../hooks/useAxios";
import {IoIosArrowBack} from 'react-icons/io';
import phoneIcon from '../assets/images/icons/telephone.png';
import { differenceInMonths, format, parseISO } from "date-fns";
import { useEffect } from "react";
import { useState } from "react";

const EmployeeDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [exp, setExp] = useState('');
  const {data: employee = {}, isLoading} = useQuery({
    queryKey: ["employees", id],
    queryFn: async() => {
      const res = await axiosInstance(`/employees/${id}`);
      return res.data;
    }
  })

  useEffect(() => {
    const startDate = parseISO(employee?.joiningDate);
    const diffInMonths = differenceInMonths(new Date(), startDate);
    const years = Math.floor(diffInMonths / 12);
    const months = diffInMonths % 12;
    setExp(`${years} Years ${months} Months`);
  }, [employee, isLoading]);

  if (isLoading) return (
    <div className="mt-32">
      <svg aria-hidden="true" className="w-8 h-8 text-white animate-spin fill-primary mx-auto" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
    </div>
  );

  return (
    <main>
      <Helmet>
        <title>Employee Details - Media Max</title>
      </Helmet>

      <section>
        <div className="container">
          <div className="mt-8 w-full max-w-[900px] mx-auto">
            <div className="btn btn-primary inline-flex items-center gap-1 cursor-pointer" onClick={() => navigate(-1)}>
              <IoIosArrowBack />
              <span>Back</span>
            </div>
          </div>

          <div className="w-full max-w-[900px] mx-auto bg-secondary p-6 mt-4 rounded-lg flex flex-col md:flex-row items-center gap-6 [&>*]:flex-1">
            <div className="w-full">
              <img className="w-full rounded-lg" src={employee?.photo} alt="Employees Photo" />
            </div>
            <div>
              <div className="text-center mb-6">
                <h2 className="text-primary text-2xl font-medium">{employee?.name}</h2>
                <span>{employee?.designation}</span>
              </div>

              <div className="[&>*]:block space-y-1 text-[18px] [&>*>*]:font-medium">
                {
                  employee?.id && <span><span className="text-primary">Employee ID:</span> {employee.id}</span>
                }
                {
                  employee?.phone && <span><span className="text-primary">Phone Number:</span> {employee.phone}</span>
                }
                {
                  employee?.dhHouse && <span><span className="text-primary">Dist. House:</span> {employee.dhHouse}</span>
                }
                {
                  employee?.status && <span><span className="text-primary">Employee Status:</span> <span className={employee.status === 'Resigned' ? "font-semibold text-red-600" : ""}>{employee.status}</span></span>
                }
                {
                  employee?.joiningDate && <span><span className="text-primary">Job Exp:</span> {exp}</span>
                }
                {
                  employee?.birthDate && <span><span className="text-primary">Birth Date:</span> {format(new Date(employee.birthDate), "dd MMM, yyyy")}</span>
                }
                {
                  employee?.bloodGroup && <span><span className="text-primary">Blood Group:</span> {employee.bloodGroup}</span>
                }
                <div className="!flex justify-center items-center gap-6 !mt-6">
                  <span className="block flex-1 h-[2px] bg-white"></span>
                  <a href={`tel:${employee?.phone}`}>
                    <img className="w-10" src={phoneIcon} alt="Phone Icon" />
                  </a>
                  <span className="block flex-1 h-[2px] bg-white"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmployeeDetails;