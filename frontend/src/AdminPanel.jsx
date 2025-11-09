import { useNavigate } from "react-router-dom";

export default function AdminPanel() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      <div className="flex gap-6">
       

        <button
          onClick={() => navigate("/admin/appointmentdata")}
          className="bg-indigo-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-indigo-700 transition"
        >
          Appointment Data
        </button>
      </div>
    </div>
  );
}
