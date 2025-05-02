import { useEffect, useState } from 'react';

const CHARACTERS = 'アカサタナハマヤラワギジズデポツヌミヒユリヲゼビプ';

export const useDecodeText = (text, duration = 500) => {
  const [decoded, setDecoded] = useState('');
  
  useEffect(() => {
    let frame = 0;
    const frameDuration = 1000 / 60; // 60 fps
    const totalFrames = Math.floor(duration / frameDuration);
    const framesPerChar = Math.floor(totalFrames / text.length);
    
    const interval = setInterval(() => {
      frame++;

      const progress = Math.min(text.length, Math.floor(frame / framesPerChar));
      let result = '';

      for (let i = 0; i < text.length; i++) {
        if (i < progress) {
          result += text[i];
        } else {
          result += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        }
      }

      setDecoded(result);

      if (progress >= text.length) {
        clearInterval(interval);
      }
    }, frameDuration);

    return () => clearInterval(interval);
  }, [text, duration]);

  return decoded;
};


export default useDecodeText;