import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CustomerDashboard from "./pages/CustomerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import CustomerClaims from "./pages/CustomerClaims";
import AdminClaims from "./pages/AdminClaims";
import "./App.css";



function App() {
  const [role, setRole] = useState(null);

  return (
    <BrowserRouter>
      {role && <Navbar role={role} setRole={setRole} />}

      <Routes>
        <Route path="/" element={<Login setRole={setRole} />} />

        <Route
          path="/customer"
          element={
            <ProtectedRoute role={role} allowedRole="customer">
              <CustomerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute role={role} allowedRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
  path="/customer/claims"
  element={
    <ProtectedRoute role={role} allowedRole="customer">
      <CustomerClaims />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/claims"
  element={
    <ProtectedRoute role={role} allowedRole="admin">
      <AdminClaims />
    </ProtectedRoute>
  }
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
