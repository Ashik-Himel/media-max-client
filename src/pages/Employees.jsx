import { Helmet } from "react-helmet-async";
import {BiSearch} from 'react-icons/bi';

const Employees = () => {
  return (
    <main>
      <Helmet>
        <title>Employees - Media Max</title>
      </Helmet>

      <section className="mt-12">
        <div className="container">
          <h2 className="text-title-color text-center text-[2rem] font-semibold leading-tight mb-6"><span className="text-primary">Employee</span> List</h2>
          <form className="bg-white text-black w-full max-w-[500px] mx-auto rounded-lg relative mb-10">
            <input className="p-3 pr-12 w-full rounded-lg" type="search" name="search" id="search" placeholder="Search employee by name" />
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
                <tr>
                  <td>MM-001</td>
                  <td>Shahidul Islam Shohel</td>
                  <td>Manager</td>
                  <td>01907878040</td>
                  <td>Media Max</td>
                  <td>
                    <img className="w-10 h-10 mx-auto" src="https://mediamax.com.bd/images/employees/shahidul-islam.jpg" alt="Employees Photo" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Employees;