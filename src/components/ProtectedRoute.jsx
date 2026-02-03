import { Navigate } from "react-router-dom";

function ProtectedRoute({ role, allowedRole, children }) {
  if (!role) {
    return <Navigate to="/" />;
  }

  if (role !== allowedRole) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
