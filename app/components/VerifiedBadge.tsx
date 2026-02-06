import React from 'react';

interface VerifiedBadgeProps {
  size?: number | string;
  className?: string;
}

const VerifiedBadge = ({ size = 20, className = "" }: VerifiedBadgeProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
    >
      {/* Badge Shape - Filled Blue */}
      <path
        d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"
        fill="#2563eb" 
        stroke="#2563eb"
        strokeWidth="1"
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      {/* Checkmark - White Stroke */}
      <path
        d="m9 12 2 2 4-4"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default VerifiedBadge;
