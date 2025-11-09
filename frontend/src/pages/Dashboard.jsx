import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaFacebookF, FaWhatsapp , FaPhoneAlt, FaEnvelope} from "react-icons/fa";
import { FaCalendarAlt, FaPlane, FaHotel, FaPassport, FaUserGraduate, FaBolt } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";

import ukphoto from "../assets/ukphoto.jpg";
import logopic from "../assets/logopic.png";
import france from "../assets/france.png";
import italy from "../assets/italy.png";
import germany from "../assets/germany.png";
import swiss from "../assets/swiss.png";
import spain from "../assets/spain.png";
import london from "../assets/london.png";




export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* 🔹 Hero */}
      <div className="relative w-full h-[70vh] sm:h-[80vh]">
        <img src={ukphoto} alt="Travel" className="w-full h-full object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          {/* Navbar */}
          <nav className="absolute top-0 left-0 w-full flex flex-col sm:flex-row justify-between items-center px-6 py-4 z-20 gap-3 sm:gap-0">
            <div className="flex items-center gap-3">
              <img
                src={logopic}
                alt="Schengen Journey Logo"
                className="h-10 w-10 rounded-full shadow-md"
              />
              <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                Schengen Journey
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <span className="border text-white px-4 py-1.5 rounded-lg shadow-md text-sm sm:text-base bg-white/10">
                {user?.name || "Guest"}
              </span>
              <button
                onClick={handleLogout}
                className="border text-white px-4 py-1.5 rounded-lg shadow-md hover:bg-white hover:text-black transition text-sm sm:text-base"
              >
                Logout
              </button>
            </div>
          </nav>

          {/* Welcome Line */}
          <motion.h2
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 mt-20"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome, {user?.name || "User"}
          </motion.h2>

          {/* Typing Animated Line */}
          <p className="text-sm sm:text-lg italic text-gray-200 mb-8 h-6">
            <ReactTyped
              strings={[
                "Your journey is safe with us ✈️🌍",
                "Trusted by thousands of travelers ✅",
                "Secure, reliable & fast booking 🔐",
              ]}
              typeSpeed={50}
              backSpeed={30}
              backDelay={1500}
              loop
            />
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/booking")}
              className="bg-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg rounded-xl shadow-lg hover:bg-indigo-700 transition"
            >
              Appointment Booking
            </button>

            <button
              onClick={() => navigate("/visa")}
              className="bg-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg rounded-xl shadow-lg hover:bg-indigo-700 transition"
            >
              Visa Process
            </button>
          </div>
        </div>
      </div>

      {/* Services Section Heading */}
      <div className="text-center my-12 px-4">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-blue-800 mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        <motion.p
          className="text-gray-600 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          We provide trusted solutions for your travel and visa needs.
        </motion.p>

        <motion.p
          className="text-gray-600 text-sm sm:text-base mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Explore the services below and make your journey stress-free.
        </motion.p>
      </div>
                                  








   <div>
      {/* 1. Appointment Booking */}
      <motion.div
        className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-gray-100 cursor-pointer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(99,102,241,0.15)" }}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-3">
          <FaCalendarAlt className="w-7 h-7 text-indigo-600" />
          <span className="hover:text-indigo-600 transition">Appointment Booking</span>
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          Book your embassy appointments with real-time availability and instant confirmation. 
          Our system allows you to select convenient time slots and make changes without hassle. 
          Automated reminders keep you updated so you never miss an important date. 
          Enjoy a stress-free booking experience designed to save your time and effort.
        </p>
      </motion.div>

      {/* 2. Ticket Reserve */}
      <motion.div
        className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-gray-100 cursor-pointer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(99,102,241,0.15)" }}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-3">
          <FaPlane className="w-7 h-7 text-indigo-600" />
          <span className="hover:text-indigo-600 transition">Ticket Reserve</span>
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          Reserve flight tickets quickly at competitive fares from top airlines. 
          Choose flexible schedules with options to reschedule or cancel with ease. 
          Our secure system ensures your payments are protected at every step. 
          Whether for business or leisure, we make your travel planning smooth and reliable.
        </p>
      </motion.div>

      {/* 3. Accommodation */}
      <motion.div
        className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-gray-100 cursor-pointer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(99,102,241,0.15)" }}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-3">
          <FaHotel className="w-7 h-7 text-indigo-600" />
          <span className="hover:text-indigo-600 transition">Accommodation</span>
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          Find verified hotels, apartments, and guesthouses at your destination. 
          We partner with trusted providers to ensure safe, comfortable, and affordable stays. 
          Exclusive discounts and seasonal offers help you save more. 
          Enjoy flexible booking options and easy cancellations for complete peace of mind.
        </p>
      </motion.div>

      {/* 4. Visa Process */}
      <motion.div
        className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-gray-100 cursor-pointer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(99,102,241,0.15)" }}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-3">
          <FaPassport className="w-7 h-7 text-indigo-600" />
          <span className="hover:text-indigo-600 transition">Visa Process</span>
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          Get expert guidance from document preparation to submission and updates. 
          Our team helps you understand requirements, avoid mistakes, and speed up approvals. 
          Real-time tracking keeps you informed about every step of your application. 
          We aim to make your visa process simple, transparent, and stress-free.
        </p>
      </motion.div>

      {/* 5. Free Consultancy */}
      <motion.div
        className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-gray-100 cursor-pointer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(99,102,241,0.15)" }}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-3">
          <FaUserGraduate className="w-7 h-7 text-indigo-600" />
          <span className="hover:text-indigo-600 transition">Free Consultancy</span>
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          Receive personalized guidance tailored to your travel and visa needs. 
          Our consultants answer your questions clearly and provide the best possible options. 
          From budgeting tips to destination insights, we help you plan with confidence. 
          Make informed decisions and enjoy peace of mind with our expert advice.
        </p>
      </motion.div>

      {/* 6. Fast Booking */}
      <motion.div
        className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-gray-100 cursor-pointer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(99,102,241,0.15)" }}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center gap-3">
          <FaBolt className="w-7 h-7 text-indigo-600" />
          <span className="hover:text-indigo-600 transition">Fast Booking</span>
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          Experience lightning-fast booking powered by our optimized system. 
          Get instant confirmations and automated receipts right after payment. 
          Multiple secure payment methods are available for your convenience. 
          Save time and enjoy seamless booking without unnecessary delays.
        </p>
      </motion.div>
    </div>

    <div className="text-center py-10 px-4">
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-600 mb-3 flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FaGlobeAmericas className="w-6 h-6 text-indigo-600" />
        Explore Countries & Their Famous Attractions
      </motion.h2>
      <motion.p
        className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Discover what makes each country special — from cultural landmarks to
        unique foods and traditions. Explore famous attractions that showcase
        the beauty and charm of every destination.
      </motion.p>
    </div>



      {/* 🌍 Countries Grid (6 cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-8">


        

    
        {/* France */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer">
          <img
            src={france}
            alt="France"
            className="w-full h-40 sm:h-48 object-cover opacity-80 hover:opacity-100 transition duration-300"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/30">
            <h3 className="text-lg sm:text-2xl font-bold">France</h3>
            <p className="text-xs sm:text-sm">Eiffel Tower & Fine Wine 🍷</p>
          </div>
        </div>

        {/* United Kingdom */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer">
          <img
            src={london}
            alt="United Kingdom"
            className="w-full h-40 sm:h-48 object-cover opacity-80 hover:opacity-100 transition duration-300"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/30">
            <h3 className="text-lg sm:text-2xl font-bold">United Kingdom</h3>
            <p className="text-xs sm:text-sm">Big Ben & Royal Heritage 👑</p>
          </div>
        </div>

        {/* Italy */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer">
          <img
            src={italy}
            alt="Italy"
            className="w-full h-40 sm:h-48 object-cover opacity-80 hover:opacity-100 transition duration-300"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/30">
            <h3 className="text-lg sm:text-2xl font-bold">Italy</h3>
            <p className="text-xs sm:text-sm">Colosseum & Pizza 🍕</p>
          </div>
        </div>

        {/* Germany */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer">
          <img
            src={germany}
            alt="Germany"
            className="w-full h-40 sm:h-48 object-cover opacity-80 hover:opacity-100 transition duration-300"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/30">
            <h3 className="text-lg sm:text-2xl font-bold">Germany</h3>
            <p className="text-xs sm:text-sm">Berlin Wall & Oktoberfest 🍺</p>
          </div>
        </div>

        {/* Switzerland */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer">
          <img
            src={swiss}
            alt="Switzerland"
            className="w-full h-40 sm:h-48 object-cover opacity-80 hover:opacity-100 transition duration-300"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/30">
            <h3 className="text-lg sm:text-2xl font-bold">Switzerland</h3>
            <p className="text-xs sm:text-sm">Alps & Swiss Chocolate 🍫</p>
          </div>
        </div>

        {/* Spain */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer">
          <img
            src={spain}
            alt="Spain"
            className="w-full h-40 sm:h-48 object-cover opacity-80 hover:opacity-100 transition duration-300"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/30">
            <h3 className="text-lg sm:text-2xl font-bold">Spain</h3>
            <p className="text-xs sm:text-sm">Flamenco & Sagrada Familia 💃</p>
          </div>
        </div>
      </div>

     <footer className="bg-gray-900 text-gray-300 mt-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Schengen Appointments
          </h2>
          <p className="text-sm leading-relaxed">
            Helping you with all your Schengen visa appointment needs. 
            Trusted, reliable, and professional service ensuring smooth journeys.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/dashboard" className="hover:text-indigo-400 transition">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/booking" className="hover:text-indigo-400 transition">
                Booking
              </a>
            </li>
            <li>
              <a href="/visa" className="hover:text-indigo-400 transition">
                Visa Info
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-indigo-400" /> +44 7598 790169
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-indigo-400" /> Schengenjourney021@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-indigo-400" /> Schengensplenders021@gmail.com
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/schengen.appointments?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition shadow-md"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://wa.me/message/TA4MCRQI7HBCI1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition shadow-md"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-xs sm:text-sm text-gray-400">
        © {new Date().getFullYear()} Schengen Appointments. All rights reserved.
      </div>
    </footer>
    </div>
  );
}
