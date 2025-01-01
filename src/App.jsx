import {
  Bounce,
  Flip,
  Slide,
  toast,
  ToastContainer,
  Zoom,
} from "react-toastify";
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
    <div className="flex flex-col items-center gap-20">
      <Welcome />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Flip}
      />
    </div>
  );
}

export default App;
