import { useEffect, useState } from "react";

interface ILoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: ILoadingScreenProps) => {
  const [text, setText] = useState<string>("");
  const fullText = "Hi, I'm IrfanShah, a FrontEnd and Backend Developer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);
  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 md:text-4xl text-xl md:px-0 px-5 text-center font-bold">
        {text}
        <span className="animate-blink ml-1"> | </span>
      </div>
      <div className="progress-bar w-[300px] h-[2px] rounded relative overflow-hidden">
        <div className="w-[50%] bg-blue-500 shadow-[0_0_0_15px_#FFBF00] animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
