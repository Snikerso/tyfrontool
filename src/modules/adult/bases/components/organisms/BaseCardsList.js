import React, { useContext, useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';
import BaseCard from 'modules/adult/bases/components/organisms/BaseCard';
import FiltrationsReducer from 'reducers/FiltrationsReducer';
import { AuthContext } from 'contexts/AuthContext';
import BaseCardNew from '../organisms/BaseCardNew';

const StyledWrapper = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;
const StyledWrapperBaseCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  > * {
    margin: 50px;
  }
`;

const useFiltrations = () => {
  const [valuesState, setValuesDispatch] = useReducer(FiltrationsReducer, {
    searching: '',
  });

  return { valuesState, setValuesDispatch };
};

const BaseCardsList = ({ bases, isMyBases, baseType }) => {
  const { valuesState, setValuesDispatch } = useFiltrations();
  const { authState } = useContext(AuthContext);

  return (
    <>
      <StyledWrapper>
        {authState.isAuth && baseType === 'MYBASES' && <BaseCardNew />}
        <StyledWrapperBaseCards>
          {bases
            .filter(
              (item) =>
                item.basename
                  .toUpperCase()
                  .indexOf(valuesState.searching.toUpperCase()) > -1
            )
            .sort(function (a, b) {
              let sortA;
              let sortB;
              if (valuesState === 'alphabetical') {
                sortA = a['basename'].toUpperCase();
                sortB = b['basename'].toUpperCase();
                if (sortA < sortB) return 1;
                if (sortA > sortB) return -1;
                if (sortA == sortB) return 0;
              } else if (valuesState === 'length') {
                sortA = a.words.length;
                sortB = b.words.length;
                if (sortA < sortB) return -1;
                if (sortA > sortB) return 1;
                if (sortA == sortB) return 0;
              } else if (valuesState === 'created_at') {
                sortA = new Date(a['created_at']);
                sortB = new Date(b['created_at']);
                if (sortA < sortB) return 1;
                if (sortA > sortB) return -1;
                if (sortA == sortB) return 0;
              } else if (valuesState === 'updated_at') {
                sortA = new Date(a['updated_at']);
                sortB = new Date(b['updated_at']);
                if (sortA < sortB) return 1;
                if (sortA > sortB) return -1;
                if (sortA == sortB) return 0;
              }
            })
            .map((item) => {
              return (
                <BaseCard
                  baseType={baseType}
                  setBaseData
                  key={item.id}
                  item={item}
                />
              );
            })}
        </StyledWrapperBaseCards>
      </StyledWrapper>
    </>
  );
};

export default BaseCardsList;
