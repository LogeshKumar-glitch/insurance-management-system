import { Link, useNavigate } from "react-router-dom";

function Navbar({ role, setRole }) {
  const navigate = useNavigate();

  const logout = () => {
    setRole(null);
    navigate("/");
  };

  return (
    <nav style={{ padding: "10px", background: "#1976d2", color: "#fff" }}>
      <span style={{ fontWeight: "bold" }}>Insurance System</span>

      {role === "customer" && (
        <>
          <Link to="/customer" style={{ margin: "0 10px", color: "#fff" }}>
            Dashboard
          </Link>
          <Link to="/customer/claims" style={{ margin: "0 10px", color: "#fff" }}>
            Claims
          </Link>

        </>
      )}

      {role === "admin" && (
        <>
          <Link to="/admin" style={{ margin: "0 10px", color: "#fff" }}>
            Admin Dashboard
          </Link>
          <Link to="/admin/claims" style={{ margin: "0 10px", color: "#fff" }}>
          Claims
          </Link>

        </>
      )}

      <button
        onClick={logout}
        style={{
          float: "right",
          background: "white",
          color: "#1976d2",
          border: "none",
          padding: "5px 10px",
          cursor: "pointer"
        }}
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
