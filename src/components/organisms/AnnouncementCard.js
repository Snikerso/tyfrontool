import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import axios from 'axios';
import { MetaIcon } from 'components/molecules/MetaIcons';
import { ToolContext } from '../../contexts/ToolContext';

const StyledWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  justify-items: center;
  align-content: center;
`;
const StyledWrapperAnnounce = styled.div`
  position: relative;
  width: 400px;
  height: 200px;
  border: 0.2px solid ${(props) => props.theme.first};
  box-shadow: 2px 3px 3px ${(props) => props.theme.blue};
  padding: 20px;
  border-radius: 20px;
`;
const BottomPanelIcons = styled.div`
  position: absolute;
  bottom: 5px;
  display: flex;
  gap: 10px;
`;
const RightPanelIcons = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 40px;
  gap: 10px;
`;
const AnnouncementHead = styled.h2``;
const AnnouncementAuthor = styled.h5``;

function AnnouncementCard() {
  const [modalMetaIcon, setModalMetaIcon] = useState();
  const { toolType } = useContext(ToolContext);

  const handleOpenModalMetaIcon = (e) => {
    let modalName = e.currentTarget.getAttribute('name');
    console.log(modalName);

    switch (modalName) {
      case 'PAYMENT':
        return setModalMetaIcon(modalName);
      case 'HELP':
        return setModalMetaIcon(modalName);
      case 'WORK':
        return setModalMetaIcon(modalName);
    }
  };

  const { data, isLoading, error } = useQuery('data', async () => {
    const { data } = await axios.get(
      'http://127.0.0.1:8000/announcements/announcements/'
    );
    return data;
  });

  if (isLoading) return 'Loading...';
  if (error) return 'no data';

  return (
    <>
      <StyledWrapper data-testid="sample-announcement">
        {data.map((item) => {
          var d = new Date(item.createAt);
          return (
            <StyledWrapperAnnounce key={item.id}>
              <AnnouncementHead>
                {item.title} {toolType}
              </AnnouncementHead>

              <AnnouncementAuthor>Author: {item.author}</AnnouncementAuthor>

              <p>{d.getDate()}</p>
              <p>
                Lorem Ipsum to po prostu fikcyjny tekst z branży poligraficznej
                i składu. Lorem Ipsum jest standardowym tekstem zastępczym w
                branży od XVI wieku, książkę z wzorami.
              </p>
              <BottomPanelIcons>
                <MetaIcon
                  type={'PAYMENT'}
                  onClick={(e) => handleOpenModalMetaIcon(e)}
                  isActive={item.isPayment}
                  modalMetaIcon={modalMetaIcon}
                  setModalMetaIcon={setModalMetaIcon}
                />
                <MetaIcon
                  type={'HELP'}
                  onClick={(e) => handleOpenModalMetaIcon(e)}
                  isActive={item.isHelper}
                  modalMetaIcon={modalMetaIcon}
                  setModalMetaIcon={setModalMetaIcon}
                />
                <MetaIcon
                  type={'WORK'}
                  onClick={(e) => handleOpenModalMetaIcon(e)}
                  isActive={item.isWorker}
                  modalMetaIcon={modalMetaIcon}
                  setModalMetaIcon={setModalMetaIcon}
                />
              </BottomPanelIcons>

              <RightPanelIcons>
                <MetaIcon type={'LINK'} />
                <MetaIcon type={'PLACE'} />
              </RightPanelIcons>
            </StyledWrapperAnnounce>
          );
        })}
      </StyledWrapper>
    </>
  );
}

export default AnnouncementCard;
