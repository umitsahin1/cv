import "./App.css";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="flex flex-col items-center gap-20">
      <Welcome />
      <Skills />
      <Profile />
      <Projects />
    </div>
  );
}

export default App;
