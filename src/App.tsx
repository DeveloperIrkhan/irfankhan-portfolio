import LoadingScreen from "./Components/LoadingScreen";
import "./App.css";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Home from "./Components/sections/Home";
import About from "./Components/sections/About";
import Projects from "./Components/sections/Projects";
import ContactUs from "./Components/sections/ContactUs";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="font-Aclonica overflow-hidden">
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 
        ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}
      >
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Home/>
        <Projects/>
        <About/>
        <ContactUs/>
      </div>
    </div>
  );
};

export default App;
