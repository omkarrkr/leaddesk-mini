import api from "../services/api";
import toast from "react-hot-toast";
import { useState } from "react";
import {
  Building2,
  User,
  Mail,
  Wallet,
  MessageSquare,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

function LeadForm() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const res = await api.post("/leads", formData);

    console.log(res.data);

    toast.success("Lead submitted successfully!");

    setFormData({
      company: "",
      name: "",
      email: "",
      budget: "",
      message: "",
    });

  } catch (err) {
    console.error(err);

    toast.error("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-5xl font-bold">
            Let's Build Something Amazing
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Fill out the form and our team will get back to you within 24 hours.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT CARD */}

          <div className="bg-blue-600 text-white rounded-3xl p-10 shadow-2xl">

            <h3 className="text-3xl font-bold mb-8">
              Why Work With Us?
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">
                <CheckCircle />
                <div>
                  <h4 className="font-semibold text-xl">
                    Fast Delivery
                  </h4>

                  <p className="text-blue-100">
                    Projects delivered on time with high quality.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle />
                <div>
                  <h4 className="font-semibold text-xl">
                    Modern Tech Stack
                  </h4>

                  <p className="text-blue-100">
                    React, Node.js, MongoDB and cloud deployment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle />
                <div>
                  <h4 className="font-semibold text-xl">
                    Dedicated Support
                  </h4>

                  <p className="text-blue-100">
                    We help you even after your project goes live.
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-14 border-t border-blue-400 pt-8">

              <h4 className="text-2xl font-bold">
                100+
              </h4>

              <p className="text-blue-100">
                Successful Projects
              </p>

            </div>

          </div>

          {/* FORM */}

          <div className="bg-white rounded-3xl shadow-2xl p-10">

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <div>

                <label className="font-semibold mb-2 block">
                  Company Name
                </label>

                <div className="flex items-center border rounded-xl px-4">

                  <Building2 className="text-gray-400" size={20} />

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-4 outline-none"
                    placeholder="ABC Pvt Ltd"
                  />

                </div>

              </div>

              <div>

                <label className="font-semibold mb-2 block">
                  Your Name
                </label>

                <div className="flex items-center border rounded-xl px-4">

                  <User className="text-gray-400" size={20} />

                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 outline-none"
                    placeholder="John Doe"
                  />

                </div>

              </div>

              <div>

                <label className="font-semibold mb-2 block">
                  Email Address
                </label>

                <div className="flex items-center border rounded-xl px-4">

                  <Mail className="text-gray-400" size={20} />

                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 outline-none"
                    placeholder="john@email.com"
                  />

                </div>

              </div>

              <div>

                <label className="font-semibold mb-2 block">
                  Project Budget
                </label>

                <div className="flex items-center border rounded-xl px-4">

                  <Wallet className="text-gray-400" size={20} />

                  <select
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full p-4 outline-none bg-transparent"
                  >
                    <option value="">Select Budget</option>
                    <option>Below ₹50K</option>
                    <option>₹50K - ₹1L</option>
                    <option>₹1L - ₹5L</option>
                    <option>Above ₹5L</option>
                  </select>

                </div>

              </div>

              <div>

                <label className="font-semibold mb-2 block">
                  Project Details
                </label>

                <div className="flex border rounded-xl px-4">

                  <MessageSquare
                    className="text-gray-400 mt-4"
                    size={20}
                  />

                  <textarea
                    rows="5"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />

                </div>

              </div>

              <button
  type="submit"
  disabled={loading}
  className={`w-full py-4 rounded-xl flex justify-center items-center gap-2 text-lg font-semibold shadow-lg transition-all duration-300 ${
    loading
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] text-white"
  }`}
>
  {loading ? (
    <>
      <svg
        className="animate-spin h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>

        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>

      Submitting...
    </>
  ) : (
    <>
      Get Free Consultation
      <ArrowRight size={20} />
    </>
  )}
</button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default LeadForm;