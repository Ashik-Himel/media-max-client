import { Helmet } from "react-helmet-async";
import {BiSearch} from 'react-icons/bi';
import { axiosInstance } from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Employees = () => {
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState('');
  const {data: employees, isLoading, refetch} = useQuery({
    queryKey: ['employees', searchVal],
    queryFn: async() => {
      const res = await axiosInstance(`/employees?search=${searchVal}`);
      return res.data;
    }
  });

  const handleOnChange = e => {
    const value = e.target.value;
    setSearchVal(value);
    refetch();
  }


  return (
    <main>
      <Helmet>
        <title>Employees - Media Max</title>
      </Helmet>

      <section className="mt-12">
        <div className="container">
          <h2 className="text-title-color text-center text-[2rem] font-semibold leading-tight mb-6"><span className="text-primary">Employee</span> List</h2>
          <form className="bg-white text-black w-full max-w-[500px] mx-auto rounded-lg relative mb-10">
            <input className="p-3 pr-12 w-full rounded-lg" onChange={handleOnChange} type="search" name="search" id="search" placeholder="Search employee by name" />
            <BiSearch className="absolute top-1/2 right-4 -translate-y-1/2 text-2xl" />
          </form>

          <div className="overflow-auto">
            <table className="border [&_td]:border [&_tr>*]:px-4 [&_tr>*]:py-2 [&_tbody_tr]:bg-white [&_tbody_tr]:bg-opacity-10 min-w-[800px] w-full max-w-[900px] mx-auto text-center">
              <thead>
                <tr className="bg-primary text-text-color-alt">
                  <th>ID No.</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Mobile Number</th>
                  <th>DH Name</th>
                  <th>Photo</th>
                </tr>
              </thead>
              <tbody>
                {
                    !isLoading ? employees?.map(employee => <tr key={employee?._id} className="cursor-pointer" onClick={() => {
                      navigate(`/employees/${employee?._id}`);
                    }}>
                      <td>{employee?.id}</td>
                      <td>{employee?.name}</td>
                      <td>{employee?.designation}</td>
                      <td>{employee?.phone}</td>
                      <td>{employee?.dhHouse}</td>
                      <td>
                        <img className="w-10 h-10 mx-auto" src={employee?.photo} alt="Employee's Photo" />
                      </td>
                    </tr>) : <tr>
                      <td colSpan='6'>
                        <div className='my-2'>
                          <svg aria-hidden="true" className="w-8 h-8 text-white animate-spin fill-primary mx-auto" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                          </svg>
                        </div>
                      </td>
                    </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Employees;