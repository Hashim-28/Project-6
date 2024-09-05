import React from 'react';
import '../app/Style/CircularProgressBar.css';

const CircularProgressBar = ({ percentage}) => {
  const radius = 55; // Radius of the circle
  const stroke = 10; // Stroke width of the circle
  const normalizedRadius = radius - stroke * 2; 
  const circumference = normalizedRadius * 2 * Math.PI; // Circumference of the circle
  const strokeDashoffset = circumference - (percentage / 100) * circumference; // Offset for the stroke

  return (
    <div className="circular-progress-bar">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="circle-svg"
      >
        <circle
          stroke="#27293D"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="circle-background"
        />
        <circle
          stroke="#42B783"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="circle-progress group-hover:stroke-[#27293D]"
        />
      </svg>
      <span className="circle-text">
        {percentage}%
      </span>
    </div>
  );
};

export default CircularProgressBar;
