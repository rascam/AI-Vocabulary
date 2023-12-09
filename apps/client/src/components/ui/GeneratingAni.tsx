import { useState, useEffect } from 'react';

const GeneratingAnimation = () => {
  const [dots, setDots] = useState('.');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prevDots => (prevDots.length >= 20 ? '.' : prevDots + ' .'));
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Generating, please wait {dots}</p>
    </div>
  );
};

export default GeneratingAnimation;