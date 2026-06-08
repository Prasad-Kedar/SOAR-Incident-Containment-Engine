import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1, background: "#f5f5f5" }}>
        <Header />

        <div
          style={{
            display: "flex",
            gap: "20px",
            padding: "20px",
            flexWrap: "wrap",
          }}
        >
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