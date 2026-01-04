import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import smsIcon from "@/assets/sms.svg";
import lockIcon from "@/assets/lock.svg";
import { Link } from "react-router-dom";
import { handleLoginUser } from "@/services/auth-services";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { useAuthStore } from "@/store/auth-store";
import { Navigate } from "react-router-dom";
import { AppAxios } from "@/lib/axios.config";

// Zod schema for login form validation
const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { setToken } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: LoginFormData) => {

    try {
      setIsLoading(true);
      const userInfo = await handleLoginUser(data.email, data.password);
      if (userInfo && userInfo.token) {
        setToken(userInfo.token);
        AppAxios.setup(userInfo.token);
        return <Navigate to="/home" replace />;
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md space-y-4"
    >
      {/* Email Input */}
      <div>
        <div className="relative">
          <img
            src={smsIcon}
            alt="Email"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 z-10"
          />
          <input
            type="email"
            id="email"
            {...register("email")}
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700 placeholder:text-gray-400"
            placeholder="Email"
          />
        </div>
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Password Input */}
      <div>
        <div className="relative">
          <img
            src={lockIcon}
            alt="Password"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 z-10"
          />
          <input
            type="password"
            id="password"
            {...register("password")}
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700 placeholder:text-gray-400"
            placeholder="Password"
          />
        </div>
        {errors.password && (
          <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Login Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3.5 px-4 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-colors mt-6 flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <LoaderCircle className="w-5 h-5 animate-spin" />
            <span>Logging in...</span>
          </>
        ) : (
          "Login"
        )}
      </button>

      {/* Sign up link */}
      <p className="text-center text-gray-600 text-sm mt-4">
        Don't have an account?{" "}
        <Link to="/signup" className="text-purple-600 hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
