import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const StyledModal = styled(Modal)`
  position: absolute;
  background-color: white;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  border: none;
  transform: translate(-50%, -50%);
`;
const CustomModal = ({ children, isOpen, onRequestClose }) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      {children}
    </StyledModal>
  );
};
export default CustomModal;
