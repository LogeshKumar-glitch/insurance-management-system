
import { policies } from "../data/mockData";
import { initialClaims } from "../data/claimsData";

function AdminDashboard() {
  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>

      <div className="cards">
        <div className="card">
          <h3>Total Policies</h3>
          <p>{policies.length}</p>
        </div>

        <div className="card">
          <h3>Total Claims</h3>
          <p>{initialClaims.length}</p>
        </div>

        <div className="card">
          <h3>Pending Claims</h3>
          <p>
            {
              initialClaims.filter(c => c.status === "Pending").length
            }
          </p>
        </div>
      </div>

      <p>Use the Claims tab to manage approvals.</p>
    </div>
  );
}

export default AdminDashboard;
