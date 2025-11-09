import { useNavigate } from "react-router-dom";

function MultiButtons() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/booking")}>Appointment booking</button>
      <button onClick={() => navigate("/visa")}>Visa process</button>
      <button onClick={() => navigate("/ticket")}>ticket reserve</button>
        <button onClick={() => navigate("/appointmentdata")}>AppointmentData</button>
          
      
    </div>
  );
}

