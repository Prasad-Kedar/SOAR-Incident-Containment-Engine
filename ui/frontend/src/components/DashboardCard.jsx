function DashboardCard({ title, value }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 5px rgba(0,0,0,0.1)",
        width: "220px",
      }}
    >
      <h4>{title}</h4>

      <h2>{value}</h2>
    </div>
  );
}

export default DashboardCard;