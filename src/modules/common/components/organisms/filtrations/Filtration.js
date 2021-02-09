import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.header`
  width: 400px;
  min-height: 300px;
  border: 2px solid black;
`;

const Filtration = () => {
  return (
    <StyledWrapper>
      <label>ilosc słów</label>
      <input type="range" />
      <label>sortuj według ilosc słów</label>
      <label>sortuj według nowosci, starosci wstawienia</label>
      <label>ilosc pobran</label>
      <label>sortuj według poziomu nauczenia</label>

      <label>
        sortuj alfabetycznie według (i tu od wyboru ) nazwy base, autora{' '}
      </label>

      <label>wpisz nazwe autora albo nazwę bazy</label>
      <label>wpisz tagi</label>
    </StyledWrapper>
  );
};

export default Filtration;
