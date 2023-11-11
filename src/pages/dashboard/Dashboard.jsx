import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <main>
      <Helmet>
        <title>Dashboard - Media Max</title>
      </Helmet>
      
      <section>
        <div className="container">
          <h2>Dashboard</h2>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;