import { useState } from "react";
import { FiEye, FiEyeOff, FiZap } from "react-icons/fi";
import { useNavigate } from "react-router";
import api from "../services/api";
import logo from "../assets/logo_icon.png";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleDemoLogin = () => {
    setEmail("user1@example.com");
    setPassword("password123");
    setErr("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
      console.log("Submitting:", { email, password });
    } catch (error) {
      console.error("Login failed:", error);
      setErr("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-emerald-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center">
          <div className="p-6 flex items-center gap-3 shrink-0">
            <img src={logo} alt="logo" className="h-12 w-12" />
            <span className="text-2xl font-semibold text-gray-800 tracking-tight">
              Donezo
            </span>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-green-100 border border-green-100 px-8 py-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-gray-400 mt-1.5">
              Sign in to continue to your account
            </p>
          </div>

          {/* Demo Login Button */}
          <button
            type="button"
            onClick={handleDemoLogin}
            className="w-full mb-5 py-2.5 px-4 rounded-lg border border-green-300 bg-green-50 hover:bg-green-100 active:bg-green-200 text-green-700 text-sm font-semibold tracking-wide transition-all duration-150 flex items-center justify-center gap-2"
          >
            <FiZap className="w-4 h-4" />
            Try Demo Account
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-green-100" />
            <span className="text-xs text-gray-400 font-medium">OR</span>
            <div className="flex-1 h-px bg-green-100" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Email Field */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 text-sm rounded-lg border border-green-200 bg-green-50/40 text-gray-800 placeholder-gray-400 outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-100 hover:border-green-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs text-green-500 hover:text-green-600 font-medium transition"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pr-10 pl-4 py-2.5 text-sm rounded-lg border border-green-200 bg-green-50/40 text-gray-800 placeholder-gray-400 outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-100 hover:border-green-300"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <FiEyeOff className="w-4 h-4" />
                  ) : (
                    <FiEye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label className="flex items-center gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-green-300 text-green-500 accent-green-500 cursor-pointer"
              />
              <span className="text-sm text-gray-500">
                Remember me for 30 days
              </span>
            </label>

            {/* Submit Button */}
            {err && <h3 className="text-sm text-red-600">{err}</h3>}
            <button
              type="submit"
              disabled={loading}
              className="mt-1 w-full py-2.5 px-4 rounded-lg bg-green-500 hover:bg-green-600 active:bg-green-700 text-white text-sm font-semibold tracking-wide transition-all duration-150 shadow-md shadow-green-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-400 mt-6">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-green-500 hover:text-green-600 font-semibold transition"
            >
              Create one free
            </a>
          </p>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-gray-400 mt-6 px-4">
          By signing in, you agree to our{" "}
          <a href="#" className="text-green-500 hover:underline">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="text-green-500 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}