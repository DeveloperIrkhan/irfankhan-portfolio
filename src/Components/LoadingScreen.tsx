import { useEffect, useState } from "react";

interface ILoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: ILoadingScreenProps) => {
  const [text, setText] = useState<string>("");
  const fullText = "Hi, I'm IrfanShah, a Graphics Designer and Full Stack Developer";

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
    <div className="fixed inset-0 z-50 bg-black text-lime-500 flex flex-col items-center justify-center">
      <div className="mb-4 md:text-2xl text-[13px] md:px-0 px-5 text-center font-bold">
        {text}
        <span className="animate-blink ml-1 text-lime-300"> | </span>
      </div>
      <div className="progress-bar w-[300px] h-[2px] rounded relative overflow-hidden">
        <div className="w-[50%] bg-lime-500 shadow-[0_0_0_15px_#84CC16] animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
