import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Visa from "./pages/Visa.jsx";
import Booking from "./pages/Booking.jsx";
import AdminPanel from "./AdminPanel.jsx";
import AppointmentData from "./pages/AppointmentData.jsx";  




export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="/admin" element={<AdminPanel />} />
       
      
          <Route path="/admin/appointmentdata" element={<AppointmentData />} />


      </Routes>
      
    </Router>
    
  );
}
