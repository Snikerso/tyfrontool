import React from 'react';
import { StyledButtonAdd, StyledWrapper } from './Styles';

export interface ButtonAddProps {
  text: string;
  isOpen: boolean;
  disabled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
export const ButtonAdd: React.FC<ButtonAddProps> = ({
  text,
  onClick,
  isOpen,
  disabled,
}) => {
  if (disabled) {
    return (
      <>
        <StyledWrapper>
          <StyledButtonAdd isOpen={isOpen} onClick={onClick}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.2632 3.36842C14.2632 2.06038 15.3235 1 16.6316 1C17.9396 1 19 2.06038 19 3.36842V14H28.6316C29.9396 14 31 15.0603 31 16.3684C31 17.6764 29.9396 18.7368 28.6316 18.7368H19V28.6316C19 29.9396 17.9396 31 16.6316 31C15.3235 31 14.2632 29.9396 14.2632 28.6316V18.7368H3.36842C2.06038 18.7368 1 17.6764 1 16.3684C1 15.0603 2.06038 14 3.36842 14H14.2632V3.36842Z"
                fill="url(#paint0_linear)"
              />
              <path
                d="M19 14H18.5C18.5 14.2761 18.7239 14.5 19 14.5V14ZM19 18.7368V18.2368C18.7239 18.2368 18.5 18.4607 18.5 18.7368H19ZM14.2632 18.7368H14.7632C14.7632 18.4607 14.5393 18.2368 14.2632 18.2368V18.7368ZM14.2632 14V14.5C14.5393 14.5 14.7632 14.2761 14.7632 14H14.2632ZM16.6316 0.5C15.0474 0.5 13.7632 1.78424 13.7632 3.36842H14.7632C14.7632 2.33652 15.5997 1.5 16.6316 1.5V0.5ZM19.5 3.36842C19.5 1.78424 18.2158 0.5 16.6316 0.5V1.5C17.6635 1.5 18.5 2.33652 18.5 3.36842H19.5ZM19.5 14V3.36842H18.5V14H19.5ZM28.6316 13.5H19V14.5H28.6316V13.5ZM31.5 16.3684C31.5 14.7842 30.2158 13.5 28.6316 13.5V14.5C29.6635 14.5 30.5 15.3365 30.5 16.3684H31.5ZM28.6316 19.2368C30.2158 19.2368 31.5 17.9526 31.5 16.3684H30.5C30.5 17.4003 29.6635 18.2368 28.6316 18.2368V19.2368ZM19 19.2368H28.6316V18.2368H19V19.2368ZM19.5 28.6316V18.7368H18.5V28.6316H19.5ZM16.6316 31.5C18.2158 31.5 19.5 30.2158 19.5 28.6316H18.5C18.5 29.6635 17.6635 30.5 16.6316 30.5V31.5ZM13.7632 28.6316C13.7632 30.2158 15.0474 31.5 16.6316 31.5V30.5C15.5997 30.5 14.7632 29.6635 14.7632 28.6316H13.7632ZM13.7632 18.7368V28.6316H14.7632V18.7368H13.7632ZM3.36842 19.2368H14.2632V18.2368H3.36842V19.2368ZM0.5 16.3684C0.5 17.9526 1.78424 19.2368 3.36842 19.2368V18.2368C2.33652 18.2368 1.5 17.4003 1.5 16.3684H0.5ZM3.36842 13.5C1.78424 13.5 0.5 14.7842 0.5 16.3684H1.5C1.5 15.3365 2.33652 14.5 3.36842 14.5V13.5ZM14.2632 13.5H3.36842V14.5H14.2632V13.5ZM13.7632 3.36842V14H14.7632V3.36842H13.7632Z"
                fill="url(#paint1_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="-6.5"
                  y1="-11.5"
                  x2="56.1159"
                  y2="24.5083"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#7AFBED" stopOpacity="0" />
                  <stop offset="0.183501" stopColor="#78FFEF" />
                  <stop offset="0.844133" stopColor="#D63CAE" />
                  <stop offset="0.9999" stopColor="#9A64C7" stopOpacity="0" />
                  <stop offset="1" stopColor="#5891E3" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="-6.5"
                  y1="-11.5"
                  x2="56.1159"
                  y2="24.5083"
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
          </StyledButtonAdd>
          <p>{text}</p>
        </StyledWrapper>
      </>
    );
  } else {
    return <StyledButtonAdd isOpen={isOpen}></StyledButtonAdd>;
  }
};

export default ButtonAdd;
