import { getUserInfo } from "@/services/auth-services";
import { useAuthStore } from "@/store/auth-store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

const Home = () => {
  const { setUser, user, clearToken } = useAuthStore();
  const navigate = useNavigate();

  const fetchUserData = async () => {
    const userInfo = await getUserInfo();
    console.log("User Info on Home:", userInfo);
    if (userInfo) {
      setUser(userInfo);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = () => {
    // Clear token from auth store
    clearToken();
    // Clear localStorage
    localStorage.clear();
    // Redirect to login
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Home</h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>

          {user ? (
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  User Information
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-600 w-24">ID:</span>
                    <span className="text-gray-800">{user.id || "N/A"}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-600 w-24">Name:</span>
                    <span className="text-gray-800">{user.name || "N/A"}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-600 w-24">Email:</span>
                    <span className="text-gray-800">{user.email || "N/A"}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Loading user information...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
