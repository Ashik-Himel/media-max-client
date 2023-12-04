import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { axiosInstance } from "../../hooks/useAxios";

const DashboardHome = () => {
  const {data: views = {month: 'Month', views: 0}} = useQuery({
    queryKey: ['viewCount'],
    queryFn: async() => {
      const res = await axiosInstance('/views');
      return res.data;
    }
  })
  const {data: employeeCount = 0} = useQuery({
    queryKey: ['employeeCount'],
    queryFn: async() => {
      const res = await axiosInstance('/employeeCount');
      return res.data;
    }
  })
  const {data: teamCount = 0} = useQuery({
    queryKey: ['teamCount'],
    queryFn: async() => {
      const res = await axiosInstance('/teamCount');
      return res.data;
    }
  })

  return (
    <div>
      <Helmet>
        <title>Dashboard - Media Max</title>
      </Helmet>

      <section className="px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center items-center [&>*]:w-full">
        <div className="bg-primary text-text-color-alt w-max py-4 rounded-lg text-center">
          <h3>Total Visitors</h3>
          <div className="flex justify-center items-center gap-2 mt-2">
            <span className="block text-3xl font-semibold">{views?.views}</span>
            <span className="block">({views?.month})</span>
          </div>
        </div>
        <div className="bg-secondary text-primary w-max py-4 rounded-lg text-center">
          <h3>Total Employees</h3>
          <span className="block mt-2 text-3xl font-semibold">{employeeCount}</span>
        </div>
        <div className="bg-primary text-text-color-alt w-max py-4 rounded-lg text-center">
          <h3>Team Members</h3>
          <span className="block mt-2 text-3xl font-semibold">{teamCount+1}</span>
        </div>
      </section>
    </div>
  );
};

export default DashboardHome;