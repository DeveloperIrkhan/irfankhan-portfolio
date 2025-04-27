import React, { useEffect, useState } from "react";

interface IAnimationTypeProps {
  phrases: string[];
  className?: string;
}

const AnimationText = ({ phrases, className = "" }: IAnimationTypeProps) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    //if text deleting then speed will be 50 else 100
    const speedOfAnimation = isDeleting ? 50 : 100;
    const pauseBeforeDelete = 2000;
    const emptyPause = 3000;

    const updateText = () => {
      if (isDeleting) {
        // when deleting, remove one character
        setCurrentText((prev) => prev.slice(0, prev.length - 1));
      } else {
        // when typing, add one character
        setCurrentText((prev) => currentPhrase.slice(0, prev.length + 1));
      }
    };

    let timeout: NodeJS.Timeout;
   
    if (!isDeleting && currentText === currentPhrase) {
        // Finished typing, now wait before deleting
        timeout = setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
      } else if (isDeleting && currentText === "") {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        timeout = setTimeout(updateText, speedOfAnimation);
      }
  
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex, phrases]);

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <span className="text-amber-300"> A {currentText} <span className="animate-blink ml-1"> | </span></span>
    </div>
  );
};

export default AnimationText;
