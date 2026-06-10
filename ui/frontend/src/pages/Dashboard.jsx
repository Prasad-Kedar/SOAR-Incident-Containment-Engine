import "../styles/dashboard.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <Header />

        <div className="cards">
          <DashboardCard title="Total Alerts" value="120" />
          <DashboardCard title="Open Cases" value="18" />
          <DashboardCard title="Critical Alerts" value="9" />
          <DashboardCard title="Resolved Cases" value="102" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;