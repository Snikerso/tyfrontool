import React from 'react';
import { StyledButtonPlay, StyledFastPlayIcon } from './Styles';
export interface ButtonPlayProps {
  isOpenGameRelay: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonPlay: React.FC<ButtonPlayProps> = ({
  onClick,
  isOpenGameRelay,
}) => {
  return (
    <>
      <StyledButtonPlay>
        <StyledFastPlayIcon active={isOpenGameRelay} onClick={onClick}>
          <svg
            width="21"
            height="24"
            viewBox="0 0 21 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 10.268C21.3333 11.0378 21.3333 12.9623 20 13.7321L3.5 23.2583C2.16667 24.0281 0.500001 23.0659 0.500001 21.5263L0.500002 2.47372C0.500002 0.934117 2.16667 -0.0281314 3.5 0.741669L20 10.268Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="35.5"
                y1="-10.5"
                x2="-0.508336"
                y2="52.1159"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#7AFBED" stopOpacity="0" />
                <stop offset="0.183501" stopColor="#78FFEF" />
                <stop offset="0.844133" stopColor="#D63CAE" />
                <stop offset="0.9999" stopColor="#9A64C7" stopOpacity="0" />
                <stop offset="1" stopColor="#5891E3" />
              </linearGradient>
            </defs>
          </svg>
        </StyledFastPlayIcon>
      </StyledButtonPlay>
    </>
  );
};

export default ButtonPlay;
