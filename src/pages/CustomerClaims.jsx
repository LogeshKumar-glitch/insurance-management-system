import { useState } from "react";
import { initialClaims } from "../data/claimsData";

function CustomerClaims() {
  const [claims, setClaims] = useState(initialClaims);
  const [amount, setAmount] = useState("");

  const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.webp"];

  const applyClaim = () => {
    const newClaim = {
      id: claims.length + 1,
      policyName: "Health Insurance",
      amount,
      status: "Pending",
      image: images[claims.length % images.length]
    };

    setClaims([...claims, newClaim]);
    setAmount("");
  };

  return (
    <div className="claims-page">
      <h2>My Claims</h2>

      {/* Claim form */}
      <div className="claim-form">
        <input
          type="number"
          placeholder="Claim Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={applyClaim}>Apply Claim</button>
      </div>

      {/* Claims list */}
      <div className="claims-list">
        {claims.map((c) => (
          <div className="claim-card" key={c.id}>

            {/* 👇 IMAGE GOES HERE */}
            <img src={c.image} alt="Claim" />

            <h4>{c.policyName}</h4>
            <p>Amount: ₹{c.amount}</p>
            <span className={`status ${c.status.toLowerCase()}`}>
              {c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerClaims;
