
import { policies } from "../data/mockData";

function CustomerDashboard() {
  return (
    <div className="dashboard">
      <h2>Customer Dashboard</h2>

      <div className="cards">
        <div className="card">
          <h3>Total Policies</h3>
          <p>{policies.length}</p>
        </div>

        <div className="card">
          <h3>Active Claims</h3>
          <p>1</p>
        </div>
      </div>

      <h3>Available Policies</h3>
      <ul>
        {policies.map(p => (
          <li key={p.id}>
            {p.name} – ₹{p.premium}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerDashboard;

