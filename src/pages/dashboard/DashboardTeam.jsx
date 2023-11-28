import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaEye, FaPen } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../hooks/useAxios";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const DashboardTeam = () => {
  const navigate = useNavigate();
  const {data: chairman = {}, isLoading} = useQuery({
    queryKey: ['chairman'],
    queryFn: async() => {
      const res = await axiosInstance('/chairman');
      return res.data;
    }
  })
  const {data: team = [], isLoading: isLoading2, refetch} = useQuery({
    queryKey: ["team"],
    queryFn: async() => {
      const res = await axiosInstance('/team');
      return res.data;
    }
  })

  const handleDelete = id => {
    Swal.fire({
      title: "Delete Team Member?",
      text: "Are you sure to delete this team member?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#01f38d",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete(`/team/${id}`)
          .then(() => {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Successfully deleted!",
              icon: "success"
            });
          })
          .catch(err => {
            Swal.fire({
              title: "Error!",
              text: err.message,
              icon: "error"
            });
          })
      }
    });
  }

  return (
    <div>
      <Helmet>
        <title>Team Members - Media Max</title>
      </Helmet>

      <section className="my-10">
        <h2 className="text-title-color text-center text-[2rem] font-semibold leading-tight mb-6"><span className="text-primary">Team</span> Members</h2>
        <div className="mx-6">
          <div className="max-w-[900px] mx-auto mb-4">
            <Link to='/dashboard/team/add' className="btn btn-primary">Add Team Member</Link>
          </div>
        </div>

        <div className="overflow-auto mx-6">
            <table className="border [&_td]:border [&_tr>*]:px-4 [&_tr>*]:py-2 [&_tbody_tr]:bg-white [&_tbody_tr]:bg-opacity-10 w-full min-w-[600px] max-w-[900px] mx-auto text-center">
              <thead>
                <tr className="bg-primary text-text-color-alt">
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Photo</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  !isLoading && <tr key={chairman?._id}>
                    <td>{chairman?.name}</td>
                    <td>{chairman?.designation}</td>
                    <td>
                      <img className="w-10 h-10 mx-auto" src={chairman?.photo} alt="Employee's Photo" />
                    </td>
                    <td>
                      <div className="flex justify-evenly items-center gap-4">
                        <FaEye className="text-[22px] cursor-pointer text-primary" onClick={() => {
                          navigate('/chairman');
                        }} />
                        <FaPen className="cursor-pointer" onClick={() => {
                          navigate(`/dashboard/chairman/update/${chairman?._id}`);
                        }} />
                      </div>
                    </td>
                  </tr>
                }
                {
                  !isLoading2 && team?.map(team => <tr key={team?._id}>
                    <td>{team?.name}</td>
                    <td>{team?.designation}</td>
                    <td>
                      <img className="w-10 h-10 mx-auto" src={team?.photo} alt="Employee's Photo" />
                    </td>
                    <td>
                      <div className="flex justify-center items-center gap-4">
                        <FaEye className="text-[22px] cursor-pointer text-primary" onClick={() => {
                          navigate(`/team/${team?._id}`);
                        }} />
                        <FaPen className="cursor-pointer" onClick={() => {
                          navigate(`/dashboard/team/update/${team?._id}`);
                        }} />
                        <MdDelete className="text-[20px] cursor-pointer text-red-500" onClick={() => handleDelete(team?._id)} />
                      </div>
                    </td>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
      </section>
    </div>
  );
};

export default DashboardTeam;