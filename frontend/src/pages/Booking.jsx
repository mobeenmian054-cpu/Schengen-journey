import { useState } from "react";
import axios from "axios";

export default function MultiStepBooking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    countryOfTravel: "",
    destinationCity: "",
    travelDate: "",
    medicalInsurance: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    passportNumber: "",
    passportExpiry: "",
    email: "",
    phone: "",
    address: "",
    visaType: "",
    preferredDate: "",

    vfsCenter: "",
    numberOfApplicants: 1,
    specialRequest: "",
  });
  const [errors, setErrors] = useState({});

  // --- Handle input change ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // clear error
  };

  // --- Validation step wise ---
  const validateStep = () => {
    let newErrors = {};
    if (step === 1) {
      if (!formData.countryOfTravel) newErrors.countryOfTravel = "Required";
      if (!formData.destinationCity) newErrors.destinationCity = "Required";
    }
    if (step === 2) {
      if (!formData.medicalInsurance)
        newErrors.medicalInsurance = "Please select Yes or No";
    }
    if (step === 3) {
      [
        "firstName",
        "lastName",
        "dateOfBirth",
        "gender",
        "nationality",
        "passportNumber",
        "passportExpiry",
        "email",
        "phone",
        "address",
        "visaType",
        "preferredDate",

        "vfsCenter",
        "numberOfApplicants",
      ].forEach((field) => {
        if (!formData[field]) newErrors[field] = "Required";
      });
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) setStep((prev) => prev + 1);
  };
  const prevStep = () => setStep((prev) => prev - 1);

  // --- Submit ---
  const handleSubmit = async () => {
    if (!validateStep()) return;
    try {
      await axios.post("http://localhost:5000/api/bookings", formData);
      alert("✅ Booking submitted successfully!");
      setStep(1);
    } catch (err) {
      alert("❌ Failed to submit booking: " + err.response?.data?.message);
    }
  };

  // --- Helper input render ---
  const renderInput = (label, name, type = "text") => (
    <div className="w-full">
      <label className="block font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={`Enter ${label}`}
        value={formData[name]}
        onChange={handleChange}
        className={`w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none transition ${errors[name] ? "border-red-500" : "border-gray-300"
          }`}
      />
      {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
    </div>
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-3xl p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-indigo-600 mb-6">
          Visa Booking Form - Step {step}
        </h2>

        {/* STEP 1 */}
        {step === 1 && (
          // <div className="space-y-4">
          //   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          //     {renderInput("Where are you applying from?", "countryOfTravel")}
          //     {renderInput("Destination City", "destinationCity")}
          //   </div>
          //   <div className="flex justify-end">
          //     <button
          //       onClick={nextStep}
          //       className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 w-full sm:w-auto"
          //     >
          //       Next →
          //     </button>
          //   </div>
          // </div>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">


              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Where are you applying from?
                </label>
                <select
                  name="countryOfTravel"
                  value={formData.countryOfTravel}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Ireland">Ireland</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Destination Country
                </label>
                <select
                  name="destinationCity"
                  value={formData.destinationCity}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select</option>
                  <option value="Austria">Austria</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>
                  <option value="Greece">Greece</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="Italy">Italy</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Malta">Malta</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Norway">Norway</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Romania">Romania</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Spain">Spain</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                </select>
              </div>

            </div>

            {/* Next Button */}
            <div className="flex justify-end">
              <button
                onClick={nextStep}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 w-full sm:w-auto"
              >
                Next →
              </button>
            </div>
          </div>

        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block font-medium mb-1">
                Travel Date (optional)
              </label>
              <input
                type="date"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">
                Do you have medical insurance?
              </label>
              <div className="flex flex-wrap gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="medicalInsurance"
                    value="Yes"
                    checked={formData.medicalInsurance === "Yes"}
                    onChange={handleChange}
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="medicalInsurance"
                    value="No"
                    checked={formData.medicalInsurance === "No"}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
              {errors.medicalInsurance && (
                <p className="text-red-500 text-sm">
                  {errors.medicalInsurance}
                </p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-3">
              <button
                onClick={prevStep}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 w-full sm:w-auto"
              >
                ← Back
              </button>
              <button
                onClick={nextStep}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 w-full sm:w-auto"
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {renderInput("First Name", "firstName")}
              {renderInput("Last Name", "lastName")}
              {renderInput("Date of Birth", "dateOfBirth", "date")}

              {/* Gender */}
              <div>
                <label className="block font-medium mb-1">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={`w-full border rounded-lg p-3 ${errors.gender ? "border-red-500" : "border-gray-300"
                    }`}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500 text-sm">{errors.gender}</p>
                )}
              </div>

              {renderInput("Nationality", "nationality")}
              {renderInput("Passport Number", "passportNumber")}
              {renderInput("Passport Expiry", "passportExpiry", "date")}
              {renderInput("Email", "email", "email")}
              {renderInput("Phone", "phone")}
              {renderInput("Address", "address")}

              {/* Visa Type */}
              <div>
                <label className="block font-medium mb-1">Visa Type</label>
                <select
                  name="visaType"
                  value={formData.visaType}
                  onChange={handleChange}
                  className={`w-full border rounded-lg p-3 ${errors.visaType ? "border-red-500" : "border-gray-300"
                    }`}
                >
                  <option value="">Select Visa Type</option>
                  <option value="Tourist">Tourist</option>
                  <option value="Student">Student</option>
                  <option value="Business">Business</option>
                  <option value="Family">Family</option>
                  <option value="Work">Work</option>
                </select>
                {errors.visaType && (
                  <p className="text-red-500 text-sm">{errors.visaType}</p>
                )}
              </div>

              {renderInput("Preferred Date", "preferredDate", "date")}

              {renderInput("VFS Center", "vfsCenter")}
              {renderInput("Number of Applicants", "numberOfApplicants", "number")}
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-3">
              <button
                onClick={prevStep}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 w-full sm:w-auto"
              >
                ← Back
              </button>
              <button
                onClick={nextStep}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 w-full sm:w-auto"
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {/* STEP 4 - Review */}
        {step === 4 && (
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Review Your Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl shadow-inner">
              {Object.entries(formData).map(([key, value]) => (
                <div key={key}>
                  <p className="text-sm text-gray-500 capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </p>
                  <p className="font-medium break-words">{value || "—"}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
              <button
                onClick={prevStep}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 w-full sm:w-auto"
              >
                ← Back
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 w-full sm:w-auto"
              >
                ✅ Submit Booking
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
