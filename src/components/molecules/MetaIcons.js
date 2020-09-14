import React from 'react';
import styled from 'styled-components';
import {
  BiDollar,
  BiDirections,
  BiDonateHeart,
  BiBriefcaseAlt2,
} from 'react-icons/bi';
import { ImLink } from 'react-icons/im';

import ModalMetaIcon from 'components/molecules/ModalMetaIcon';

const CircleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  box-shadow: 2px 3px 3px ${(props) => props.theme.blue};
  border: 0.5px solid ${(props) => props.theme.blue};
  background-color: ${(props) => (props.isActive ? 'green' : 'white')};
  border-radius: 50%;
  cursor: ${(props) => props.isActive && 'pointer'}; ;
`;
const SquereIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  box-shadow: 2px 3px 3px ${(props) => props.theme.blue};
  border: 0.5px solid ${(props) => props.theme.blue};
`;

export const MetaIcon = ({
  type,
  isActive,
  onClick,
  modalMetaIcon,
  setModalMetaIcon,
}) => {
  switch (type) {
    case 'PAYMENT':
      return (
        <CircleIcon name={type} onClick={onClick} isActive={isActive}>
          <BiDollar />
          {modalMetaIcon == 'PAYMENT' && isActive && (
            <ModalMetaIcon type={type} />
          )}
        </CircleIcon>
      );
    case 'HELP':
      return (
        <CircleIcon name={type} onClick={onClick} isActive={isActive}>
          <BiDonateHeart />
          {modalMetaIcon == 'HELP' && <ModalMetaIcon type={type} />}
        </CircleIcon>
      );
    case 'WORK':
      return (
        <CircleIcon name={type} onClick={onClick} isActive={isActive}>
          <BiBriefcaseAlt2 />
          {modalMetaIcon == 'WORK' && isActive && <ModalMetaIcon type={type} />}
        </CircleIcon>
      );
    case 'LINK':
      return (
        <SquereIcon>
          <ImLink />
        </SquereIcon>
      );
    case 'PLACE':
      return (
        <SquereIcon>
          <BiDirections />
        </SquereIcon>
      );
  }
};
