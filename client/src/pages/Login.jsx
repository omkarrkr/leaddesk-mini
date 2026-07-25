import { useState } from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

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

      toast.success("Login Successful!");

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
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-10">

        <h1 className="text-4xl font-bold text-center mb-2">
          Admin Login
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Sign in to access the dashboard.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>

            <label className="block mb-2 font-medium">
              Email
            </label>

            <div className="flex items-center border rounded-xl px-4">

              <Mail className="text-gray-400" size={20} />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="admin@webcraft.com"
                className="w-full p-4 outline-none"
              />

            </div>

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Password
            </label>

            <div className="flex items-center border rounded-xl px-4">

              <Lock className="text-gray-400" size={20} />

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="w-full p-4 outline-none"
              />

            </div>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition cursor-pointer flex items-center justify-center gap-2"
          >
            <LogIn size={18} />

            {loading ? "Signing In..." : "Sign In"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;