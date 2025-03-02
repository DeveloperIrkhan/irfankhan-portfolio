import LoadingScreen from "./Components/LoadingScreen";
import "./App.css";
import Navbar from "./Components/Navbar";
import { useState } from "react";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="font-Aclonica">
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 
        ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}
      >
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </div>
  );
};

export default App;
