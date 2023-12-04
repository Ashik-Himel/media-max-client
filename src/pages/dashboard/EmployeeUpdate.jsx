import { Helmet } from "react-helmet-async";
import { axiosInstance } from "../../hooks/useAxios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import DatePicker from "react-datepicker";
import { useQuery } from "@tanstack/react-query";

const EmployeeUpdate = () => {
  const {id: _id} = useParams();
  const navigate = useNavigate();
  const [birthDate, setBirthDate] = useState(new Date());
  const [joiningDate, setJoiningDate] = useState(new Date());
  const {data: employee = {}, isLoading, refetch} = useQuery({
    queryKey: ['employees', _id],
    queryFn: async() => {
      const res = await axiosInstance(`employees/${_id}`);
      return res.data;
    }
  })

  useEffect(() => {
    if (!isLoading) {
      setBirthDate(new Date(employee?.birthDate));
      setJoiningDate(new Date(employee?.joiningDate));
    }
  }, [isLoading, employee]);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const id = form.id.value;
    const name = form.name.value;
    const photo = form.photo?.files[0];
    const designation = form.designation.value;
    const dhHouse = form.dhHouse.value;
    const phone = form.phone.value;
    const status = form.status.value;
    const bloodGroup = form.bloodGroup.value;

    if (photo) {
      const employeeData = {id, name, photo, designation, dhHouse, phone, status, birthDate, joiningDate, bloodGroup}
      axiosInstance.put(`/employees/${_id}`, employeeData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(res => {
          if (res.data?.modifiedCount > 0) {
            Swal.fire({
              title: "Updated!",
              text: "Employee updated!",
              icon: "success"
            });
            refetch();
          }
        })
        .catch(err => {
          Swal.fire({
            title: "Error!",
            text: err.message,
            icon: "error"
          });
        })
    } else {
      const employeeData = {id, name, designation, dhHouse, phone, status, birthDate, joiningDate, bloodGroup}
      axiosInstance.put(`/employees/${_id}`, employeeData)
        .then(res => {
          if (res.data?.modifiedCount > 0) {
            Swal.fire({
              title: "Updated!",
              text: "Employee updated!",
              icon: "success"
            });
            refetch();
          }
        })
        .catch(err => {
          Swal.fire({
            title: "Error!",
            text: err.message,
            icon: "error"
          });
        })
    } 
  }

  return (
    <div>
      <Helmet>
        <title>Update Employee - Media Max</title>
      </Helmet>

      <section className="px-6 py-10">
        <div className="mb-4 w-full max-w-[900px] mx-auto">
          <div className="btn btn-primary inline-flex items-center gap-1 cursor-pointer" onClick={() => navigate(-1)}>
            <IoIosArrowBack />
            <span>Back</span>
          </div>
        </div>

        <form className="bg-secondary [&_input]:text-black p-6 rounded-lg max-w-[900px] mx-auto" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-medium text-center mb-6">Update Employee</h2>
          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 [&>*]:flex-1 mb-5">
            <div className="w-full">
              <label htmlFor="id" className="block font-medium mb-2">Employee Id</label>
              <input className="w-full px-4 py-2 rounded-md" type="text" name="id" id="id" placeholder="Enter Employee ID" defaultValue={employee?.id} required />
            </div>
            <div className="w-full">
              <label htmlFor="name"  className="block font-medium mb-2">Employee Name</label>
              <input className="w-full px-4 py-2 rounded-md" type="text" name="name" id="name" placeholder="Enter Employee Name" defaultValue={employee?.name} required />
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 [&>*]:flex-1 mb-5">
            <div className="w-full">
              <label htmlFor="designation" className="block font-medium mb-2">Designation</label>
              <input className="w-full px-4 py-2 rounded-md" type="text" name="designation" id="designation" placeholder="Enter Employee Designation" defaultValue={employee?.designation} required />
            </div>
            <div className="w-full">
              <label htmlFor="dhHouse"  className="block font-medium mb-2">Dist. House</label>
              <input className="w-full px-4 py-2 rounded-md" type="text" name="dhHouse" id="dhHouse" placeholder="Enter Dist. House Name" defaultValue={employee?.dhHouse} required />
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 [&>*]:flex-1 mb-5">
            <div className="w-full">
              <label htmlFor="phone" className="block font-medium mb-2">Phone Number</label>
              <input className="w-full px-4 py-2 rounded-md" type="tel" name="phone" id="phone" placeholder="Enter Employee Phone Number" defaultValue={employee?.phone} required />
            </div>
            <div className="w-full">
              <label htmlFor="status"  className="block font-medium mb-2">Employee Status</label>
              <select name="status" id="status" className="w-full px-4 py-2 rounded-md bg-white text-black cursor-pointer" defaultValue={employee?.status}>
                <option value="Enrolled">Enrolled</option>
                <option value="Resigned">Resigned</option>
              </select>
            </div>
          </div>
          
          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 [&>*]:flex-1 mb-5">
            <div className="w-full">
              <span className="block font-medium mb-2">Birth Date</span>
              <DatePicker
                className="w-full rounded-md"
                showIcon
                selected={birthDate}
                onChange={(date) => setBirthDate(date)}
              />
            </div>
            <div className="w-full">
              <span className="block font-medium mb-2">Joining Date</span>
                <DatePicker
                  className="w-full rounded-md"
                  showIcon
                  selected={joiningDate}
                  onChange={(date) => setJoiningDate(date)}
                />
            </div>
          </div>
          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 [&>*]:flex-1 mb-5">
            <div className="w-full">
              <label htmlFor="photo"  className="block font-medium mb-2">Employee Photo</label>
              <input className="w-full px-4 py-2 rounded-md bg-white text-black cursor-pointer" type="file" name="photo" id="photo" accept="image/*" />
            </div>
            <div className="w-full">
              <label htmlFor="bloodGroup" className="block font-medium mb-2">Blood Group</label>
              <input className="w-full px-4 py-2 rounded-md" type="text" name="bloodGroup" id="bloodGroup" placeholder="Enter Employee Blood Group" defaultValue={employee?.bloodGroup} required />
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-full mt-6">Update Employee</button>
        </form>
      </section>
    </div>
  );
};

export default EmployeeUpdate;