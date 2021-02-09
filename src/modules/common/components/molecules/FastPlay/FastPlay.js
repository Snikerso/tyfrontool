import React, { useContext, useState } from 'react';
import styled, { css } from 'styled-components';
import { RelayContext } from 'contexts/RelayContext';
import { FastWordsContext } from 'contexts/FastWordsContext';
import GameRelay from 'modules/common/components/organisms/gamerelay/GameRelay';
import CustomModal from 'modules/common/components/organisms/modal/Modal/Modal';

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
`;
const StyledFastPlayIcon = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  outline: none;
  border: none;

  background: linear-gradient(321.7deg, #fcfcfc 15.1%, #f7f7f7 84.43%);
  box-shadow: -2px -2px 4px #ffffff, 2px 2px 3px #a6a4a4,
    3px 3px 11px rgba(255, 255, 255, 0.44), -2px -2px 24px #ffffff;
  :hover {
    cursor: pointer;
  }
  svg {
    margin-left: 9px;
  }

  ${({ active }) =>
    active &&
    css`
      svg {
        transform: rotate(90deg);
        transition: transform 0.2s;
      }
    `}
`;

const FastPlay = () => {
  const { fastWords } = useContext(FastWordsContext);
  const {} = useContext(RelayContext);

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <StyledWrapper>
        <StyledFastPlayIcon
          active={openModal}
          onClick={() => setOpenModal((prev) => !prev)}
        >
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
        <CustomModal
          isOpen={openModal}
          onRequestClose={() => setOpenModal(false)}
        >
          <GameRelay
            setIsOpenGameRelay={setOpenModal}
            typeGameRelay={''}
            fastWords={fastWords}
          />
        </CustomModal>
      </StyledWrapper>
    </>
  );
};

export default FastPlay;
