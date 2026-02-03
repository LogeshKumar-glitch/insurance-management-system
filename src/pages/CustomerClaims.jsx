import { useState } from "react";
import { initialClaims } from "../data/claimsData";

function CustomerClaims() {
  const [claims, setClaims] = useState(initialClaims);
  const [amount, setAmount] = useState("");

  const applyClaim = () => {
    const newClaim = {
      id: claims.length + 1,
      policyName: "Health Insurance",
      amount,
      status: "Pending"
    };
    setClaims([...claims, newClaim]);
    setAmount("");
  };

  return (
    <div>
      <h2>My Claims</h2>

      <input
        type="number"
        placeholder="Claim Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={applyClaim}>Apply Claim</button>

      <ul>
        {claims.map((c) => (
          <li key={c.id}>
            {c.policyName} – ₹{c.amount} – {c.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerClaims;
