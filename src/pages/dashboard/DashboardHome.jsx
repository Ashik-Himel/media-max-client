import { Helmet } from "react-helmet-async";

const DashboardHome = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard - Media Max</title>
      </Helmet>

      <section className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center items-center [&>*]:w-full">
        <div className="bg-primary text-text-color-alt w-max py-4 rounded-lg text-center">
          <h3>Total Visitors</h3>
          <span className="block mt-2 text-3xl font-semibold">501</span>
        </div>
        <div className="bg-secondary text-primary w-max py-4 rounded-lg text-center">
          <h3>Total Employees</h3>
          <span className="block mt-2 text-3xl font-semibold">165</span>
        </div>
        <div className="bg-primary text-text-color-alt w-max py-4 rounded-lg text-center">
          <h3>Team Members</h3>
          <span className="block mt-2 text-3xl font-semibold">4</span>
        </div>
      </section>
    </div>
  );
};

export default DashboardHome;