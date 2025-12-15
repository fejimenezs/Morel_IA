import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Plans from "./pages/Plans";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import PatientProfile from "./pages/PatientProfile";
import CreatePatient from "./pages/CreatePatient";
import Settings from "./pages/Settings";
import PrivateLayout from "./layout/PrivateLayout";

export default function App() {
  const isLogged = Boolean(localStorage.getItem("token"));

  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/planes" element={<Plans />} />
        <Route path="/login" element={<Login />} />

        {/* PRIVATE */}
        <Route
          element={isLogged ? <PrivateLayout /> : <Navigate to="/login" />}
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/patients/new" element={<CreatePatient />} />
          <Route path="/patients/:id" element={<PatientProfile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
