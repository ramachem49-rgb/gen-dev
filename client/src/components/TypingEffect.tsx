import { useState, useEffect } from "react";

const TypingEffect = ({ words, className = "" }: { words: string[]; className?: string }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(word.slice(0, text.length + 1));
        if (text.length === word.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, words]);

  return (
    <span className={className}>
      {text}
      <span className="animate-pulse-soft text-primary">|</span>
    </span>
  );
};

export default TypingEffect;
