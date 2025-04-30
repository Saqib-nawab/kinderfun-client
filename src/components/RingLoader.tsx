

import React from 'react';

interface RingLoaderProps {
  size?: string; 
  color?: string; 
  speed?: string; 
  text?: string; 
}

const RingLoader: React.FC<RingLoaderProps> = ({
  size = 'w-16 h-16', 
  color = 'border-green-500',
  speed = '1s', 
  text = 'Please wait a sec' 
}) => {
  return (
    <div className={`flex flex-col justify-center items-center ${size}`}>
      <div
        className={`border-4 border-t-transparent border-solid ${color} rounded-full animate-spin`}
        style={{ 
          width: '50%',  
          height: '50%', 
          animationDuration: speed 
        }}
      ></div>
      <p className="mt-4 text-sm text-gray-600">{text}</p>
    </div>
  );
};

export default RingLoader;
