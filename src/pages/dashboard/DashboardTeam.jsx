import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaEye, FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../hooks/useAxios";

const DashboardTeam = () => {
  const navigate = useNavigate();
  const {data: team = []} = useQuery({
    queryKey: ["team"],
    queryFn: async() => {
      const res = await axiosInstance('/team');
      return res.data;
    }
  })
  return (
    <div>
      <Helmet>
        <title>Team Members - Media Max</title>
      </Helmet>

      <section className="my-10">
        <h2 className="text-title-color text-center text-[2rem] font-semibold leading-tight mb-6"><span className="text-primary">Team</span> Members</h2>

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
                  team?.map(team => <tr key={team?._id}>
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