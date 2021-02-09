import React from 'react';

const BorderGradient = () => {
  return (
    <svg
      className="border"
      style={{ position: 'absolute', left: '0px', width: '100%' }}
      xmlns="http://www.w3.org/2000/svg"
      width="739"
      height="132"
      viewBox="0 0 101% 132"
      fill="none"
    >
      <rect
        x="1"
        y="1"
        width="739"
        height="130"
        rx="50"
        stroke="url(#border_word)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id="border_word"
          x1="-158.25"
          y1="-53.1667"
          x2="39.647"
          y2="504.473"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7AFBED" stopOpacity="0" />
          <stop offset="0.183501" stopColor="#78FFEF" />
          <stop offset="0.844133" stopColor="#C4389F" />
          <stop offset="0.9999" stopColor="#9A64C7" stopOpacity="0" />
          <stop offset="1" stopColor="#5891E3" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BorderGradient;
