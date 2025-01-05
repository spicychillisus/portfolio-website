import { useState, useEffect } from "react";

type Typerwriter = {
    words: string[];
    speed: number;
    delay: number;
}

export default function Typewriter({ words, speed, delay }: Typerwriter) {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (wordIndex === words.length) {
                clearInterval(interval);
                return;
            }

            if (letterIndex === words[wordIndex].length) {
                setTimeout(() => {
                    setWordIndex(wordIndex + 1);
                    setLetterIndex(0);
                    setText("");
                }, delay);
                return;
            }

            setText((prev) => prev + words[wordIndex][letterIndex]);
            setLetterIndex((prev) => prev + 1);
        }, speed);

        return () => clearInterval(interval);
    }, [letterIndex, wordIndex]);

    return (
        <span>
            {text}
        </span>
    );
}