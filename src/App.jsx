import { Flip, toast, ToastContainer } from "react-toastify";
import "./App.css";
import Footer from "./pages/Footer";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Welcome from "./pages/Welcome";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    toast.success("Sayfama Hoşgeldiniz!");
  }, []);
  return (
    <div className="flex flex-col items-center gap-20 px-2 lg:px-0 transform scale-75 lg:transform-none">
      <Welcome />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
    </div>
  );
}

export default App;
