import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function VisaInfoPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <div className="bg-indigo-600 text-white py-12 px-6 text-center">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Schengen Visa Information
        </motion.h1>
        <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Complete details about the Schengen visa process, requirements, and fees — 
          carefully explained to help you prepare with confidence.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Eligibility */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 mb-4">
            Who Can Apply?
          </h2>
          <p className="leading-relaxed text-gray-700 text-sm sm:text-base">
            Any non-EU citizen who intends to travel to one or more Schengen countries 
            for up to 90 days within a 180-day period must apply for a Schengen visa. 
            Students, tourists, business travelers, and visitors for family purposes are eligible.
          </p>
        </section>

        {/* Required Documents */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 mb-4">
            Required Documents
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
            <li>Completed visa application form (signed by applicant).</li>
            <li>Valid passport with at least 2 blank pages and 6 months validity.</li>
            <li>Recent passport-sized photographs (biometric standard).</li>
            <li>Proof of travel arrangements (flight booking / reservation).</li>
            <li>Hotel booking / accommodation proof.</li>
            <li>Travel insurance covering at least £30,000 medical expenses.</li>
            <li>Bank statements of last 3–6 months showing sufficient funds.</li>
            <li>Proof of employment or student status.</li>
          </ul>
        </section>

        {/* Visa Process Steps */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 mb-4">
            Visa Application Process
          </h2>
          <ol className="list-decimal pl-6 space-y-2 text-sm sm:text-base">
            <li>Choose the Schengen country where you will spend the most days.</li>
            <li>Complete the visa application form online or by hand.</li>
            <li>Book an appointment at the VFS center of your destination country.</li>
            <li>Prepare all required documents and attend your appointment.</li>
            <li>Submit biometrics (fingerprints and photo) at the VFS center.</li>
            <li>Pay the visa fee in Pounds (£) at the counter.</li>
            <li>Track your application online via VFS tracking system.</li>
            <li>Collect your passport once the decision is made.</li>
          </ol>
        </section>

        {/* Visa Fees */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 mb-4">
            Visa Fees (in Pounds £)
          </h2>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>Adult Visa Fee: <span className="font-semibold">£80</span></li>
            <li>Children (6–12 years): <span className="font-semibold">£40</span></li>
            <li>Children under 6 years: <span className="font-semibold">Free</span></li>
            <li>VFS Service Fee: <span className="font-semibold">£25</span></li>
            <li>Optional Courier / SMS Service: <span className="font-semibold">£10–£15</span></li>
          </ul>
        </section>

        {/* Processing Time */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 mb-4">
            Processing Time
          </h2>
          <p className="leading-relaxed text-gray-700 text-sm sm:text-base">
            Standard visa processing usually takes 15 working days from the date 
            of your appointment. During busy travel seasons (summer & holidays), 
            processing can take up to 30 days. It is advised to apply well in advance.
          </p>
        </section>

        {/* Final Call to Action */}
        <section className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-indigo-700 mb-3">
            Need Help With Your Documents or Visa Process?
          </h3>
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            If you want us to check your documents or handle your complete 
            visa process for a smooth and stress-free experience, feel free to 
            contact us directly.
          </p>
          <a
            href="https://wa.me/message/TA4MCRQI7HBCI1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition"
          >
            <FaWhatsapp size={20} /> Contact Us on WhatsApp
          </a>
        </section>
      </div>
    </div>
  );
}
