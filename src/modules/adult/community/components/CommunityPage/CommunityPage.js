import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BaseCard from 'modules/adult/community/components/BaseCardCommunity/BaseCardCommunity';

const StyledWrapperCommunityCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  > * {
    margin: 40px;
  }
`;

const CommunityPage = () => {
  const [example, setExample] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/wordlist/basescommunity/?basename=${''}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setExample(data);
      });
  }, []);

  return (
    <>
      <StyledWrapperCommunityCards>
        {example.map((item) => {
          return <BaseCard community item={item} />;
        })}
      </StyledWrapperCommunityCards>
    </>
  );
};

export default CommunityPage;
