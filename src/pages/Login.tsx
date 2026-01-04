import Logo from "@/assets/meetusImage.svg";
import MeetUsLogo from "@/assets/meetusvrLogo.svg";
import GradientBackground from "@/components/shared/gradient-background";
import LoginForm from "@/components/shared/login-form";

const Login = () => {
  return (
    <GradientBackground>
      <div className="flex flex-col lg:flex-row min-h-screen w-full">
        <div className="flex min-h-screen w-full">
          <div className="w-full lg:w-[40%] flex flex-col gap-5 items-center pt-10 lg:pt-0">
            <img
              src={MeetUsLogo}
              alt="MeetUs Logo"
              className="w-60 md:w-80 lg:hidden mb-8 object-contain"
            />
            {/* Login Form */}
            <div className="w-full flex-1 flex flex-col items-center justify-center gap-8 px-6 lg:px-12">
              <div className="flex flex-col gap-y-4 max-w-md">
                <h1 className="text-center text-4xl lg:text-5xl xl:text-[3.5rem] leading-none">
                  Welcome back
                </h1>
                <p className="text-center text-[#62626B] text-lg leading-[155%] ">
                  Step into our shopping metaverse for an unforgettable shopping
                  experience
                </p>
              </div>
              <LoginForm />
            </div>
          </div>
          {/* Main Logo MeetUSVr */}
          <div className="hidden w-[60%] lg:flex items-center justify-center h-screen overflow-hidden">
            <img
              src={Logo}
              sizes=""
              alt="Meetus Logo"
              className="w-full lg:w-[70%] object-contain"
            />
          </div>
        </div>
      </div>
    </GradientBackground>
  );
};

export default Login;
