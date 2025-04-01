import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const StatCounter = ({ end, title, subtitle, icon, duration = 3 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    if (isInView) {
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function for smoother animation
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easedProgress * end));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, end, duration]);
  
  return (
    <div className="flex flex-col items-center text-center" ref={counterRef}>
      <div className="text-[#40B8D3] mb-4 text-3xl">{icon}</div>
      <div className="text-4xl font-bold mb-2">
        {count}
        <span className="text-[#40B8D3]">+</span>
      </div>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  );
};

export default StatCounter;