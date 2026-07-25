import { useEffect, useState } from "react";
import {
  Mail,
  Lock,
  LogIn,
  Eye,
  EyeOff,
  ArrowLeft,
} from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      localStorage.setItem("token", res.data.token);

      toast.success("Welcome back!");

      navigate("/admin");

    } catch (err) {
      toast.error(
        err.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Blur */}

      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-indigo-300/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

      {/* Card */}

      <div className="relative w-full max-w-lg bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 px-10 py-10">

        {/* Back */}

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition cursor-pointer"
        >
          <ArrowLeft size={18} />
          Back to Home
        </button>

        {/* Badge */}

        <div className="flex justify-center mt-6">

          <div className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold">
            Secure Admin Portal
          </div>

        </div>

        {/* Logo */}

        <div className="flex justify-center mt-6">

          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-xl flex items-center justify-center">

            <span className="text-white text-4xl font-bold">
              LD
            </span>

          </div>

        </div>

        {/* Heading */}

        <div className="text-center mt-8">

          <h1 className="text-4xl font-bold text-slate-900">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Sign in to manage your leads and customers.
          </p>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-7 mt-10"
        >

          {/* Email */}

          <div>

            <label className="font-semibold block mb-2">
              Email Address
            </label>

            <div className="flex items-center border border-slate-300 rounded-xl px-4 transition focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100">

              <Mail
                className="text-gray-400"
                size={20}
              />

              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="admin@webcraft.com"
                className="w-full p-4 outline-none bg-transparent"
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="font-semibold block mb-2">
              Password
            </label>

            <div className="flex items-center border border-slate-300 rounded-xl px-4 transition focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100">

              <Lock
                className="text-gray-400"
                size={20}
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                required
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full p-4 outline-none bg-transparent"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="text-gray-500 hover:text-blue-600 cursor-pointer"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

          </div>

          {/* Button */}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 disabled:opacity-70"
          >

            <LogIn size={20} />

            {loading
              ? "Signing In..."
              : "Login to Dashboard"}

          </button>

        </form>

        {/* Footer */}

        <div className="mt-8 border-t pt-6">

          <p className="text-center text-sm text-gray-500">
            Built for Digital Heroes Training Task
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;