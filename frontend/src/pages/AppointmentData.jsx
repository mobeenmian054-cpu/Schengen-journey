import { useEffect, useState } from "react";
import axios from "axios";

export default function AppointmentData() {
  const [appointments, setAppointments] = useState([]);



  const getbooking = async ()=>{
    try {
      const res = await axios.get("http://localhost:5000/api/bookings") 
      setAppointments(res.data.data)
    } catch (error) {
      console.log(error)
    }
   }

  useEffect(() => {
   getbooking()
    
  }, []);

  return (
    <div className="p-8 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">All Appointments</h2>

      <table className="min-w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">DOB</th>
            <th className="border px-4 py-2">Gender</th>
            <th className="border px-4 py-2">Nationality</th>
            <th className="border px-4 py-2">Passport No</th>
            <th className="border px-4 py-2">Passport Expiry</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">Address</th>
            <th className="border px-4 py-2">Visa Type</th>
            <th className="border px-4 py-2">Country</th>
            <th className="border px-4 py-2">Appointment</th>
            <th className="border px-4 py-2">VFS Center</th>
            <th className="border px-4 py-2">Applicants</th>
            <th className="border px-4 py-2">Special Request</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a, i) => (
            <tr key={i}>
              <td className="border px-4 py-2">{a.firstName} {a.lastName}</td>
              <td className="border px-4 py-2">
                {new Date(a.dateOfBirth).toLocaleDateString()}
              </td>
              <td className="border px-4 py-2">{a.gender}</td>
              <td className="border px-4 py-2">{a.nationality}</td>
              <td className="border px-4 py-2">{a.passportNumber}</td>
              <td className="border px-4 py-2">
                {new Date(a.passportExpiry).toLocaleDateString()}
              </td>
              <td className="border px-4 py-2">{a.email}</td>
              <td className="border px-4 py-2">{a.phone}</td>
              <td className="border px-4 py-2">{a.address}</td>
              <td className="border px-4 py-2">{a.visaType}</td>
              <td className="border px-4 py-2">{a.countryOfTravel}</td>
              <td className="border px-4 py-2">
                {new Date(a.appointmentDate).toLocaleDateString()} - {a.appointmentTime}
              </td>
              <td className="border px-4 py-2">{a.vfsCenter}</td>
              <td className="border px-4 py-2">{a.numberOfApplicants}</td>
              <td className="border px-4 py-2">{a.specialRequest || "-"}</td>
              <td className="border px-4 py-2">{a.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
