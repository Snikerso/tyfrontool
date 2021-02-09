import React from 'react';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const match = keyframes`
  0% {

    left:45%;
    top:40%;
  }
  50%{
    left:15%;
    top:15%;
  }
  75%{
    left:15%;
    top:15%;
  }
  100% {
    left:45%;
    top:40%;
  }

`;

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
  svg {
    margin: 10px;
  }
`;
const SvgDiffcultyStars = ({ level, width }) => {
  return (
    <StyledWrapper>
      {['129', '80', '80'].slice(0, level).map((item) => {
        return (
          <>
            <svg
              width={width}
              height="123"
              viewBox="0 0 129 123"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dii)">
                <path
                  d="M64.5 0L78.7566 43.8774H124.892L87.5677 70.9952L101.824 114.873L64.5 87.7548L27.1756 114.873L41.4323 70.9952L4.10791 43.8774H50.2434L64.5 0Z"
                  fill="#D264B6"
                />
              </g>
              <defs>
                <filter
                  id="filter0_dii"
                  x="-5.89209"
                  y="-10"
                  width="134.784"
                  height="132.873"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
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
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.823529 0 0 0 0 0.392157 0 0 0 0 0.713726 0 0 0 0.8 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect2_innerShadow"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="4" dy="5" />
                  <feGaussianBlur stdDeviation="5" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect2_innerShadow"
                    result="effect3_innerShadow"
                  />
                </filter>
              </defs>
            </svg>
          </>
        );
      })}
    </StyledWrapper>
  );
};

export default SvgDiffcultyStars;