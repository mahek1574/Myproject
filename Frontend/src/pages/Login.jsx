import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { KeyRound, User, Mail, Lock, ArrowRight, Eye, EyeOff, Sparkles, UserPlus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Login() {
  const [activeTab, setActiveTab] = useState("login"); 

  const [loginInput, setLoginInput] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isLoginSubmitting, setIsLoginSubmitting] = useState(false);

  // Signup states
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [signupError, setSignupError] = useState("");
  const [isSignupSubmitting, setIsSignupSubmitting] = useState(false);

  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!loginInput || !loginPassword) {
      setLoginError("Please fill in all fields.");
      return;
    }

    setLoginError("");
    setIsLoginSubmitting(true);

    const result = await login(loginInput, loginPassword);
    setIsLoginSubmitting(false);

    if (result.success) {
      if (result.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    } else {
      setLoginError(result.error || "Invalid username or password.");
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (!signupName || !signupEmail || !signupPassword || !confirmPassword) {
      setSignupError("Please fill in all fields.");
      return;
    }

    if (signupPassword.length < 6) {
      setSignupError("Password must be at least 6 characters long.");
      return;
    }

    if (signupPassword !== confirmPassword) {
      setSignupError("Passwords do not match.");
      return;
    }

    setSignupError("");
    setIsSignupSubmitting(true);

    const result = await signup(signupName, signupEmail, signupPassword);
    setIsSignupSubmitting(false);

    if (result.success) {
      navigate("/user/dashboard");
    } else {
      setSignupError(result.error || "Failed to create user account.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EAF0EB] dark:bg-[#0f1710] py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-white dark:bg-[#131d16] p-8 sm:p-10 rounded-[32px] border border-[#BCCFC4]/30 dark:border-white/10 shadow-2xl relative overflow-hidden"
      >
      
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#6B8F7B]/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#BCCFC4]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="text-center">
          <div className="mx-auto h-12 w-12 rounded-2xl bg-[#6B8F7B]/10 dark:bg-[#6B8F7B]/20 flex items-center justify-center text-[#6B8F7B]">
            {activeTab === "login" ? <KeyRound size={24} /> : <UserPlus size={24} />}
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-[#17221B] dark:text-white tracking-tight">
            {activeTab === "login" ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {activeTab === "login" 
              ? "Sign in to access your dashboard workspace" 
              : "Register a regular user profile to get started"}
          </p>
        </div>

  
        <div className="grid grid-cols-2 p-1 bg-[#EAF0EB] dark:bg-black/40 rounded-2xl border border-[#BCCFC4]/20 dark:border-white/5">
          <button
            onClick={() => { setActiveTab("login"); setLoginError(""); setSignupError(""); }}
            className={`py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
              activeTab === "login"
                ? "bg-white dark:bg-[#6B8F7B] text-[#17221B] dark:text-white shadow-sm"
                : "text-gray-500 dark:text-gray-400 hover:text-[#6B8F7B]"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => { setActiveTab("signup"); setLoginError(""); setSignupError(""); }}
            className={`py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
              activeTab === "signup"
                ? "bg-white dark:bg-[#6B8F7B] text-[#17221B] dark:text-white shadow-sm"
                : "text-gray-500 dark:text-gray-400 hover:text-[#6B8F7B]"
            }`}
          >
            Register
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "login" ? (
            <motion.div
              key="login-form"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              {loginError && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm px-4 py-3 rounded-xl mb-4">
                  {loginError}
                </div>
              )}

              <form className="space-y-6" onSubmit={handleLoginSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                      Username or Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <User size={18} />
                      </div>
                      <input
                        type="text"
                        required
                        value={loginInput}
                        onChange={(e) => setLoginInput(e.target.value)}
                        className="block w-full pl-11 pr-4 py-3 border border-gray-200 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-black/20 text-[#17221B] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B8F7B] focus:border-transparent transition-all"
                        placeholder="admin or email@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Password
                      </label>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <Lock size={18} />
                      </div>
                      <input
                        type={showLoginPassword ? "text" : "password"}
                        required
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="block w-full pl-11 pr-11 py-3 border border-gray-200 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-black/20 text-[#17221B] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B8F7B] focus:border-transparent transition-all"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      >
                        {showLoginPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoginSubmitting}
                    className="group relative w-full flex justify-center items-center gap-2 bg-[#17221B] dark:bg-[#6B8F7B] text-white py-3.5 px-4 rounded-xl text-sm font-semibold uppercase tracking-wider hover:bg-[#6B8F7B] dark:hover:bg-[#577564] transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {isLoginSubmitting ? "Verifying..." : "Sign In"}
                    {!isLoginSubmitting && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="signup-form"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              {signupError && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm px-4 py-3 rounded-xl mb-4">
                  {signupError}
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSignupSubmit}>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <User size={18} />
                    </div>
                    <input
                      type="text"
                      required
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                      className="block w-full pl-11 pr-4 py-3 border border-gray-200 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-black/20 text-[#17221B] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B8F7B] focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <Mail size={18} />
                    </div>
                    <input
                      type="email"
                      required
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      className="block w-full pl-11 pr-4 py-3 border border-gray-200 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-black/20 text-[#17221B] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B8F7B] focus:border-transparent transition-all"
                      placeholder="john@example.com"
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
                      type={showSignupPassword ? "text" : "password"}
                      required
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      className="block w-full pl-11 pr-11 py-3 border border-gray-200 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-black/20 text-[#17221B] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B8F7B] focus:border-transparent transition-all"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowSignupPassword(!showSignupPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      {showSignupPassword ? <EyeOff size={18} /> : <Eye size={18} />}
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
                      type={showSignupPassword ? "text" : "password"}
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="block w-full pl-11 pr-4 py-3 border border-gray-200 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-black/20 text-[#17221B] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B8F7B] focus:border-transparent transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSignupSubmitting}
                    className="group relative w-full flex justify-center items-center gap-2 bg-[#17221B] dark:bg-[#6B8F7B] text-white py-3.5 px-4 rounded-xl text-sm font-semibold uppercase tracking-wider hover:bg-[#6B8F7B] dark:hover:bg-[#577564] transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {isSignupSubmitting ? "Creating..." : "Create Account"}
                    {!isSignupSubmitting && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
