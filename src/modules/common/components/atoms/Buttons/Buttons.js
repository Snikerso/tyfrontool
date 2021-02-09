import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledGame = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  width: 349px;
  height: 256px;
  background: #fcfcfc;
  box-shadow: -10px -10px 30px #ffffff, 10px 10px 20px rgba(49, 52, 59, 0.3),
    inset -10px -10px 10px rgba(0, 0, 0, 0.18), inset 10px 10px 10px #ffffff;
  border-radius: 86px;

  :hover {
    cursor: pointer;
    box-shadow: -10px -10px 30px #ffffff, 10px 10px 30px rgba(49, 52, 59, 0.3),
      inset -10px -10px 10px rgba(0, 0, 0, 0.38), inset 10px 10px 10px #ffffff;
  }

  svg.border {
    position: absolute;
    width: 100%;
  }
  :active {
    box-shadow: inset -10px -10px 10px #ffffff,
      inset 10px 10px 10px rgba(60, 60, 61, 0.39);
  }
  :active svg.border {
    opacity: 0;
    /* #fill {
      top: 15%;
      left: 15%;
    } */
  }
`;
const StyledButtonGradientWithHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 38px;
    font-family: virgo;
    letter-spacing: 2px;
    font-size: 42px;
  }
`;
export const ButtonGradient = ({ children, onClick }) => {
  return (
    <NavLink to="/games/choose-letters">
      <StyledGame onClick={onClick}>
        {children}
        <svg
          className="border"
          xmlns="http://www.w3.org/2000/svg"
          width="349"
          height="256"
          viewBox="0 0 349 256"
          fill="none"
        >
          <path
            d="M86 2H263C309.392 2 347 39.6081 347 86V170C347 216.392 309.392 254 263 254H86C39.6081 254 2 216.392 2 170V86C2 39.6081 39.6081 2 86 2Z"
            stroke="url(#paint0_linear)"
            strokeWidth="4"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="-87.25"
              y1="-106.667"
              x2="513.093"
              y2="363.988"
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
      </StyledGame>
    </NavLink>
  );
};
export const ButtonGradientWithHead = ({ text, children }) => {
  return (
    <StyledButtonGradientWithHead>
      <h3>{text}</h3>
      {children}
    </StyledButtonGradientWithHead>
  );
};

const StyledWrapperButtonAddToGame = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(321.7deg, #fcfcfc 15.1%, #f7f7f7 84.43%);
  box-shadow: -2px -2px 4px #ffffff, 2px 2px 3px #a6a4a4,
    3px 3px 11px rgba(255, 255, 255, 0.44), -2px -2px 24px #ffffff;
  outline: none;
  border: none;
  :hover {
    cursor: pointer;
  }
  width: 40px;
  height: 40px;
`;
export const ButtonAddToGame = ({ onClick }) => {
  return (
    <>
      <StyledWrapperButtonAddToGame onClick={onClick}>
        <svg
          width="22"
          height="26"
          viewBox="0 0 22 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.2144 13.6251C19.5477 14.3949 19.5477 16.3194 18.2144 17.0892L8.89293 22.4709C7.5596 23.2407 5.89293 22.2784 5.89293 20.7388L5.89293 9.97538C5.89293 8.43578 7.55959 7.47353 8.89293 8.24333L18.2144 13.6251Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M22 4.7499C22 4.35212 21.6776 4.02966 21.2798 4.02966H18.3988V1.14871C18.3988 0.750929 18.0764 0.428467 17.6786 0.428467V0.428467C17.2808 0.428467 16.9584 0.750928 16.9584 1.1487V4.02966H14.0774C13.6796 4.02966 13.3572 4.35212 13.3572 4.7499V4.7499C13.3572 5.14767 13.6796 5.47013 14.0774 5.47013H16.9584V8.35109C16.9584 8.74886 17.2808 9.07132 17.6786 9.07132V9.07132C18.0764 9.07132 18.3988 8.74886 18.3988 8.35109V5.47013H21.2798C21.6776 5.47013 22 5.14767 22 4.7499V4.7499Z"
            fill="url(#paint1_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="29.7263"
              y1="0.0356788"
              x2="5.20631"
              y2="42.6742"
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
              x1="11.1965"
              y1="-3.17272"
              x2="29.2358"
              y2="7.2011"
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
      </StyledWrapperButtonAddToGame>
    </>
  );
};

const StyledWrapperButtonAction = styled.button`
  border: none;
  outline: none;
`;

export const ButtonAction = ({ onClick, isOpen, text }) => {
  return (
    <>
      <StyledWrapperButtonAction isOpen={isOpen} onClick={onClick}>
        {text}
      </StyledWrapperButtonAction>
    </>
  );
};

export default ButtonAction;
