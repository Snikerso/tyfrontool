import React from 'react';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const match = keyframes`
  0% {

    left:45%;
    top:40%;
  }
  50%{
    left: 20%;
    top:15%;
  }
  75%{
    left: 20%;
    top:15%;
  }
  100% {
    left:45%;
    top:40%;
  }

`;
const afterMatch = keyframes`
  
`;

const StyledWrapper = styled.div`
  z-index:100;
  width: 100%;
  #empty {
    position: absolute;
    left: 20%;
    top: 15%;

  }
  #fill {
    position: absolute;
    left: 45%;
    top: 40%;
    animation: 2s ${match} linear infinite;
    :hover{
      left: 20%;
        top: 15%;
    }
  }


  }
`;
const SvgMatchingLetters = ({ children }) => {
  return (
    <StyledWrapper>
      <svg
        id="empty"
        width="119"
        height="115"
        viewBox="0 0 119 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i)">
          <path
            d="M117.24 95.92C118.2 97.9467 118.68 99.92 118.68 101.84C118.68 105.36 117.24 108.347 114.36 110.8C111.587 113.253 108.387 114.48 104.76 114.48C102.307 114.48 100.067 113.84 98.04 112.56C96.0133 111.28 94.4133 109.36 93.24 106.8L86.04 90.64H34.2L26.84 106.8C25.6667 109.36 24.0133 111.28 21.88 112.56C19.8533 113.84 17.6133 114.48 15.16 114.48C11.5333 114.48 8.22665 113.253 5.23998 110.8C2.35998 108.347 0.919983 105.36 0.919983 101.84C0.919983 99.92 1.39998 97.9467 2.35998 95.92L44.6 9.19999C45.9867 6.31999 48.0133 4.13332 50.68 2.63999C53.4533 1.03999 56.4933 0.23999 59.8 0.23999C63 0.23999 65.9867 1.03999 68.76 2.63999C71.5333 4.13332 73.6133 6.31999 75 9.19999L117.24 95.92ZM44.12 68.56H76.12L60.12 32.88L44.12 68.56Z"
            fill="#F4F4F4"
          />
        </g>
        <defs>
          <filter
            id="filter0_i"
            x="0.919983"
            y="0.23999"
            width="117.76"
            height="119.41"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="5.17021" />
            <feGaussianBlur stdDeviation="2.58511" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.431786 0 0 0 0 0.437134 0 0 0 0 0.437457 0 0 0 0.6 0"
            />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
          </filter>
        </defs>
      </svg>
      <svg
        id="fill"
        width="119"
        height="115"
        viewBox="0 0 119 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_ii)">
          <path
            d="M117.24 95.92C118.2 97.9467 118.68 99.92 118.68 101.84C118.68 105.36 117.24 108.347 114.36 110.8C111.587 113.253 108.387 114.48 104.76 114.48C102.307 114.48 100.067 113.84 98.04 112.56C96.0133 111.28 94.4133 109.36 93.24 106.8L86.04 90.64H34.2L26.84 106.8C25.6667 109.36 24.0133 111.28 21.88 112.56C19.8533 113.84 17.6133 114.48 15.16 114.48C11.5333 114.48 8.22665 113.253 5.23998 110.8C2.35998 108.347 0.919983 105.36 0.919983 101.84C0.919983 99.92 1.39998 97.9467 2.35998 95.92L44.6 9.19999C45.9867 6.31999 48.0133 4.13332 50.68 2.63999C53.4533 1.03999 56.4933 0.23999 59.8 0.23999C63 0.23999 65.9867 1.03999 68.76 2.63999C71.5333 4.13332 73.6133 6.31999 75 9.19999L117.24 95.92ZM44.12 68.56H76.12L60.12 32.88L44.12 68.56Z"
            fill="#D264B6"
          />
        </g>
        <defs>
          <filter
            id="filter0_ii"
            x="-9.08002"
            y="-9.76001"
            width="137.76"
            height="134.24"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-10" dy="-10" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.823529 0 0 0 0 0.392157 0 0 0 0 0.713726 0 0 0 0.8 0"
            />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="10" dy="10" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow"
              result="effect2_innerShadow"
            />
          </filter>
        </defs>
      </svg>
    </StyledWrapper>
  );
};

export default SvgMatchingLetters;
