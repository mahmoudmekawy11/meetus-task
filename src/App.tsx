import { RouterProvider } from "react-router-dom";
import { router } from "@/routes";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}

export default App;
