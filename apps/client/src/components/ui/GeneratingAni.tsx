import { useState, useEffect } from 'react';

const GeneratingAnimation = () => {
  const [dots, setDots] = useState('.');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prevDots => (prevDots.length >= 14 ? '.' : prevDots + ' .'));
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-2">
      <p>Generating, please wait {dots}</p>
    </div>
  );
};

export default GeneratingAnimation;