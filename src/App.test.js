import React from 'react';
import { render,waitForElement,getByTestId,waitForDomChange,act } from '@testing-library/react';
import Announcement from './components/organisms/AnnouncementCard'
import axios from 'axios';


jest.mock('axios');

afterEach(() => jest.resetAllMocks())

describe('Announcement component', ()=>{

      test('renders Input component', () => {

        const {getByText} = render(<Announcement />);
        expect(getByText(/loading/i)).toBeInTheDocument()
    });

      test('display fetched data', async () => {
        axios.get.mockResolvedValue({data:[]})

        const {getByTestId} = render(<Announcement />)
        
  

        const announcementCart = await waitForElement(()=> getByTestId('sample-announcement'))
        expect(announcementCart).toBeInTheDocument();

    });



})






