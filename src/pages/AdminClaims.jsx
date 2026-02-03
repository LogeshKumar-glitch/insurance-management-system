import { useState } from "react";
import { initialClaims } from "../data/claimsData";

function AdminClaims() {
  const [claims, setClaims] = useState(initialClaims);

  const updateStatus = (id, status) => {
    const updated = claims.map(c =>
      c.id === id ? { ...c, status } : c
    );
    setClaims(updated);
  };

  return (
    <div>
      <h2>Manage Claims</h2>

      <ul>
        {claims.map(c => (
          <li key={c.id}>
            {c.policyName} – ₹{c.amount} – {c.status}
            <button onClick={() => updateStatus(c.id, "Approved")}>
              Approve
            </button>
            <button onClick={() => updateStatus(c.id, "Rejected")}>
              Reject
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminClaims;
