import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setRole }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("customer");
  const navigate = useNavigate();

  // Demo users (frontend-only auth)
  const users = {
    customer: {
      username: "customer",
      password: "1234"
    },
    admin: {
      username: "admin",
      password: "admin123"
    }
  };

  const handleLogin = () => {
    const user = users[selectedRole];

    if (
      username.trim() === user.username &&
      password === user.password
    ) {
      setRole(selectedRole);
      navigate(selectedRole === "admin" ? "/admin" : "/customer");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
