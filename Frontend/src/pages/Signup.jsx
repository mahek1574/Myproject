import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { UserPlus, User, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { adminSignup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    const result = await adminSignup(username, password);
    setIsSubmitting(false);

    if (result.success) {
      navigate("/admin/dashboard");
    } else {
      setError(result.error || "Failed to create admin account.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EAF0EB] dark:bg-[#0f1710] py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-white dark:bg-[#131d16] p-8 sm:p-10 rounded-[32px] border border-[#BCCFC4]/30 dark:border-white/10 shadow-2xl"
      >
        <div className="text-center">
          <div className="mx-auto h-12 w-12 rounded-2xl bg-[#6B8F7B]/10 dark:bg-[#6B8F7B]/20 flex items-center justify-center text-[#6B8F7B]">
            <UserPlus size={24} />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-[#17221B] dark:text-white">
            Register Admin
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Create an initial admin login profile
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm px-4 py-3 rounded-xl">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3 border border-gray-200 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-black/20 text-[#17221B] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B8F7B] focus:border-transparent transition-all"
                  placeholder="admin-username"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-11 py-3 border border-gray-200 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-black/20 text-[#17221B] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B8F7B] focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3 border border-gray-200 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-black/20 text-[#17221B] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B8F7B] focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full flex justify-center items-center gap-2 bg-[#17221B] dark:bg-[#6B8F7B] text-white py-3.5 px-4 rounded-xl text-sm font-semibold uppercase tracking-wider hover:bg-[#6B8F7B] dark:hover:bg-[#577564] transition-all disabled:opacity-50"
            >
              {isSubmitting ? "Creating..." : "Sign Up"}
              {!isSubmitting && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              to="/admin/login"
              className="font-bold text-[#6B8F7B] hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
